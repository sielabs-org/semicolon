// problems.js — Rendering, filtering, animations
document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('problems-tbody');
    const searchInput = document.getElementById('search-input');
    const filterChips = document.querySelectorAll('.chip');
    const diffSelect = document.getElementById('difficulty-select');
    const noResults = document.getElementById('no-results');
    const drawer = document.getElementById('problem-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerOverlay = document.getElementById('drawer-overlay');

    let activeFilter = 'all';
    let activeDifficulty = 'all';
    let searchQuery = '';
    let solved = new Set(JSON.parse(localStorage.getItem('sc_solved') || '[]'));

    // ---- Category meta ----
    const CAT_META = {
        'array': { label: 'Array', icon: 'fa-table-cells', cls: 'cat-array' },
        'linked-list': { label: 'Linked List', icon: 'fa-link', cls: 'cat-linked-list' },
        'tree': { label: 'Tree', icon: 'fa-sitemap', cls: 'cat-tree' },
        'graph': { label: 'Graph', icon: 'fa-circle-nodes', cls: 'cat-graph' },
        'hashmap': { label: 'HashMap', icon: 'fa-hashtag', cls: 'cat-hashmap' },
        'stack-queue': { label: 'Stack/Queue', icon: 'fa-layer-group', cls: 'cat-stack-queue' }
    };

    function getCategoryMeta(cat) {
        if (CAT_META[cat]) return CAT_META[cat];
        // Handle arbitrary dynamic categories like 'fragmentation'
        return {
            label: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' '),
            icon: 'fa-star',
            cls: 'cat-custom'
        };
    }

    // ---- Render table ----
    function renderTable() {
        const filtered = PROBLEMS.filter(p => {
            if (activeFilter !== 'all' && p.category !== activeFilter) return false;
            if (activeDifficulty !== 'all' && p.difficulty !== activeDifficulty) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                return p.title.toLowerCase().includes(q) ||
                    p.realWorld.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q);
            }
            return true;
        });

        document.getElementById('total-count').textContent = PROBLEMS.length;
        document.getElementById('solved-count').textContent = solved.size;

        if (filtered.length === 0) {
            tbody.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }
        noResults.style.display = 'none';

        tbody.innerHTML = filtered.map((p, i) => {
            const catMeta = getCategoryMeta(p.category);
            const isSolved = solved.has(p.id);
            return `
            <tr data-id="${p.id}" onclick="openDrawer(${p.id})">
                <td class="col-status">
                    <div class="status-icon ${isSolved ? 'solved' : 'unsolved'}">
                        <i class="fa-solid fa-${isSolved ? 'check' : 'minus'}"></i>
                    </div>
                </td>
                <td class="col-num">${p.id}</td>
                <td class="col-title">
                    <div class="problem-title-cell">
                        <span class="problem-name">${p.title}</span>
                        <span class="problem-tagline">${p.tagline}</span>
                    </div>
                </td>
                <td class="col-category">
                    <span class="cat-tag" style="color: ${catMeta.color}; border-color: ${catMeta.color}; background: ${catMeta.color}20">
                        <i class="${catMeta.icon}"></i> ${catMeta.label}
                    </span>
                </td>
                <td class="col-diff">
                    <span class="diff-badge diff-${p.difficulty}">${p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1)}</span>
                </td>
            </tr>
        `;
        }).join('');

        // Attach row click handlers
        tbody.querySelectorAll('tr').forEach(row => {
            row.addEventListener('click', e => {
                openDrawer(parseInt(row.dataset.id));
            });
        });
    }

    // ---- Filters ----
    function initFilters() {
        const categories = new Set(PROBLEMS.map(p => p.category));

        const filterContainer = document.getElementById('filter-chips');
        filterContainer.innerHTML = `
            <button class="chip active" data-filter="all">
                <i class="fa-solid fa-layer-group"></i> All
            </button>
        ` + Array.from(categories).map(cat => {
            const meta = getCategoryMeta(cat);
            return `
            <button class="chip" data-filter="${cat}">
                <i class="fa-solid ${meta.icon}"></i> ${meta.label}
            </button>`;
        }).join('');

        const newChips = document.querySelectorAll('.chip');
        newChips.forEach(chip => {
            chip.addEventListener('click', () => {
                newChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeFilter = chip.dataset.filter;
                renderTable();
            });
        });
    }

    initFilters();

    diffSelect.addEventListener('change', () => {
        activeDifficulty = diffSelect.value;
        renderTable();
    });

    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
        renderTable();
    });

    // ---- Drawer ----
    let currentProblem = null;
    let animInterval = null;

    function openDrawer(id) {
        currentProblem = PROBLEMS.find(p => p.id === id);
        if (!currentProblem) return;
        const p = currentProblem;
        const cat = getCategoryMeta(p.category);

        document.getElementById('drawer-num').textContent = `#${p.id}`;
        document.getElementById('drawer-difficulty').className = `diff-badge diff-${p.difficulty}`;
        document.getElementById('drawer-difficulty').textContent = p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1);
        document.getElementById('drawer-title').textContent = p.title;
        document.getElementById('drawer-real-world-text').textContent = p.realWorld;
        document.getElementById('drawer-description').textContent = p.description;

        // Tags
        const tagsEl = document.getElementById('drawer-tags');
        tagsEl.innerHTML = `<span class="cat-tag ${cat.cls}"><i class="fa-solid ${cat.icon}"></i> ${cat.label}</span>`;

        // External Link
        const extBtn = document.getElementById('external-link-btn');
        if (p.externalLink && p.externalPlatform) {
            extBtn.style.display = 'inline-flex';
            extBtn.href = p.externalLink;
            document.getElementById('external-platform-name').textContent =
                p.externalPlatform.charAt(0).toUpperCase() + p.externalPlatform.slice(1);
        } else {
            extBtn.style.display = 'none';
        }

        // Statement
        document.getElementById('statement-box').innerHTML = p.statement;

        // Examples
        const exEl = document.getElementById('examples-section');
        exEl.innerHTML = p.examples.map((ex, i) =>
            `<div class="example-block">
        <div class="example-label">Example ${i + 1}</div>
        <code>Input: ${ex.input}\nOutput: ${ex.output}</code>
      </div>`
        ).join('');

        // Code editor
        document.getElementById('code-editor').value = p.template;
        updateLineNumbers();
        document.getElementById('run-result').textContent = '';
        document.getElementById('run-result').className = 'run-result';

        // Build animation
        buildAnimation(p);

        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
        stopAnimation();
    }

    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

    // ---- Line numbers ----
    const codeEditor = document.getElementById('code-editor');
    const lineNumsEl = document.getElementById('line-numbers');

    function updateLineNumbers() {
        const lines = codeEditor.value.split('\n').length;
        lineNumsEl.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
    }
    codeEditor.addEventListener('input', updateLineNumbers);
    codeEditor.addEventListener('scroll', () => { lineNumsEl.scrollTop = codeEditor.scrollTop; });

    // ---- Animation Engine ----
    let animStep = 0;
    let animPlaying = false;

    function buildAnimation(p) {
        stopAnimation();
        animStep = 0;
        const canvas = document.getElementById('animation-canvas');
        const log = document.getElementById('anim-log');
        log.innerHTML = '<p>> Ready. Press Play to start the animation.</p>';

        if (p.animType === 'array') buildArrayAnim(canvas, p.animData);
        else if (p.animType === 'linked-list') buildLLAnim(canvas, p.animData);
        else if (p.animType === 'tree') buildTreeAnim(canvas, p.animData);
        else if (p.animType === 'graph') buildGraphAnim(canvas, p.animData);
    }

    function buildArrayAnim(canvas, data) {
        canvas.innerHTML = `<div class="anim-array">${data.map((v, i) =>
            `<div class="anim-cell" data-idx="${i}">${v}</div>`
        ).join('')}</div>`;
    }

    function buildLLAnim(canvas, data) {
        canvas.innerHTML = `<div class="anim-linked-list">${data.map((v, i) =>
            `<div class="ll-node">
        <div class="ll-box" data-idx="${i}">${v}</div>
        ${i < data.length - 1 ? '<div class="ll-arrow">→</div>' : ''}
      </div>`
        ).join('')}<div class="ll-null">null</div></div>`;
    }

    function buildTreeAnim(canvas, tree) {
        // Flatten tree to levels
        const levels = [];
        const queue = [{ node: tree, level: 0 }];
        while (queue.length) {
            const { node, level } = queue.shift();
            if (!node) continue;
            if (!levels[level]) levels[level] = [];
            levels[level].push(node.val);
            queue.push({ node: node.left, level: level + 1 });
            queue.push({ node: node.right, level: level + 1 });
        }
        canvas.innerHTML = `<div class="anim-tree-wrapper"><div class="anim-tree">${levels.map(level =>
            `<div class="tree-level">${level.map(v =>
                `<div class="tree-node" data-val="${v}">${v}</div>`
            ).join('')}</div>`
        ).join('')}</div></div>`;
    }

    function buildGraphAnim(canvas, data) {
        const nodes = data.nodes;
        const edges = data.edges;
        // Position nodes in a circle
        const cx = 50, cy = 50, r = 35;
        const positions = nodes.map((_, i) => {
            const angle = (2 * Math.PI * i / nodes.length) - Math.PI / 2;
            return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
        });

        let svgLines = edges.map(([a, b]) => {
            const ai = nodes.indexOf(a), bi = nodes.indexOf(b);
            return `<line class="graph-edge" data-from="${a}" data-to="${b}"
        x1="${positions[ai].x}%" y1="${positions[ai].y}%"
        x2="${positions[bi].x}%" y2="${positions[bi].y}%"/>`;
        }).join('');

        let nodeEls = nodes.map((n, i) =>
            `<div class="graph-node" data-node="${n}" style="left:calc(${positions[i].x}% - 22px);top:calc(${positions[i].y}% - 22px)">${n}</div>`
        ).join('');

        canvas.innerHTML = `<div class="anim-graph">
      <svg class="graph-svg">${svgLines}</svg>
      ${nodeEls}
    </div>`;
    }

    // ---- Play animation ----
    function getSpeed() {
        const v = parseInt(document.getElementById('anim-speed-slider').value);
        return [800, 500, 250][v - 1] || 500;
    }

    function playAnimation() {
        if (!currentProblem || animPlaying) return;
        const steps = currentProblem.animSteps;
        if (animStep >= steps.length) animStep = 0;
        animPlaying = true;

        animInterval = setInterval(() => {
            if (animStep >= steps.length) { stopAnimation(); return; }
            executeStep(steps[animStep], currentProblem);
            animStep++;
        }, getSpeed());
    }

    function stopAnimation() {
        clearInterval(animInterval);
        animPlaying = false;
    }

    function resetAnimation() {
        stopAnimation();
        animStep = 0;
        if (currentProblem) buildAnimation(currentProblem);
    }

    document.getElementById('anim-play').addEventListener('click', () => {
        if (animPlaying) stopAnimation(); else playAnimation();
    });
    document.getElementById('anim-reset').addEventListener('click', resetAnimation);

    function executeStep(step, problem) {
        const canvas = document.getElementById('animation-canvas');
        const log = document.getElementById('anim-log');

        if (step.msg || step.text) {
            const p = document.createElement('p');
            p.textContent = `> ${step.msg || step.text}`;
            log.appendChild(p);
            log.scrollTop = log.scrollHeight;
        }

        if (step.type === 'msg') return;

        if (problem.animType === 'array' || problem.animType === 'linked-list') {
            // Clear previous highlights
            canvas.querySelectorAll('.highlight, .found, .swap, .pointer').forEach(el => {
                el.classList.remove('highlight', 'found', 'swap', 'pointer');
            });

            const cells = problem.animType === 'array'
                ? canvas.querySelectorAll('.anim-cell')
                : canvas.querySelectorAll('.ll-box');

            if (step.indices) {
                step.indices.forEach(idx => {
                    if (cells[idx]) cells[idx].classList.add(step.type);
                });
            }

            if (step.type === 'swap' && step.values) {
                step.indices.forEach((idx, i) => {
                    if (cells[idx] && step.values[i] !== undefined) {
                        cells[idx].textContent = step.values[i];
                    }
                });
            }
        }

        if (problem.animType === 'tree' && step.type === 'visit') {
            const node = canvas.querySelector(`.tree-node[data-val="${step.node}"]`);
            if (node) {
                canvas.querySelectorAll('.tree-node.highlight').forEach(n => {
                    n.classList.remove('highlight');
                    n.classList.add('visited');
                });
                node.classList.add('highlight');
            }
        }

        if (problem.animType === 'graph' && step.type === 'visit') {
            const node = canvas.querySelector(`.graph-node[data-node="${step.node}"]`);
            if (node) {
                canvas.querySelectorAll('.graph-node.current').forEach(n => {
                    n.classList.remove('current');
                    n.classList.add('visited');
                });
                node.classList.add('current');
                // Activate edges
                canvas.querySelectorAll(`.graph-edge[data-from="${step.node}"], .graph-edge[data-to="${step.node}"]`).forEach(e => {
                    e.classList.add('active');
                });
            }
        }
    }

    // ---- Run user code ----
    document.getElementById('run-btn').addEventListener('click', () => {
        if (!currentProblem) return;
        const result = document.getElementById('run-result');
        try {
            // Mark as solved
            solved.add(currentProblem.id);
            localStorage.setItem('sc_solved', JSON.stringify([...solved]));
            result.textContent = '✓ Solution submitted! Visualizing...';
            result.className = 'run-result pass';
            renderTable();
            // Trigger animation playback
            resetAnimation();
            setTimeout(playAnimation, 300);
        } catch (e) {
            result.textContent = `✗ Error: ${e.message}`;
            result.className = 'run-result fail';
        }
    });

    // ---- Language toggle (cosmetic) ----
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Initial render
    renderTable();
});

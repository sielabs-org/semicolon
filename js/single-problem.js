// js/single-problem.js
document.addEventListener('DOMContentLoaded', () => {
    const p = window.PROBLEM_DATA;
    if (!p) {
        console.error("PROBLEM_DATA not found. Scripts must be loaded in a problem template.");
        return;
    }

    const solved = new Set(JSON.parse(localStorage.getItem('sc_solved') || '[]'));

    // ---- Line numbers ----
    const codeEditor = document.getElementById('code-editor');
    const lineNumsEl = document.getElementById('line-numbers');

    function updateLineNumbers() {
        const lines = codeEditor.value.split('\n').length;
        lineNumsEl.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
    }
    if (codeEditor) {
        codeEditor.addEventListener('input', updateLineNumbers);
        codeEditor.addEventListener('scroll', () => { lineNumsEl.scrollTop = codeEditor.scrollTop; });
        updateLineNumbers();
    }

    // ---- Animation Engine ----
    let animStep = 0;
    let animPlaying = false;
    let animInterval = null;

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

    function getSpeed() {
        const v = parseInt(document.getElementById('anim-speed-slider').value);
        return [800, 500, 250][v - 1] || 500;
    }

    function playAnimation() {
        if (animPlaying) return;
        const steps = p.animSteps;
        if (animStep >= steps.length) animStep = 0;
        animPlaying = true;

        animInterval = setInterval(() => {
            if (animStep >= steps.length) { stopAnimation(); return; }
            executeStep(steps[animStep], p);
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
        buildAnimation(p);
    }

    document.getElementById('anim-play').addEventListener('click', () => {
        if (animPlaying) stopAnimation(); else playAnimation();
    });
    document.getElementById('anim-reset').addEventListener('click', resetAnimation);

    function executeStep(step, problem) {
        const canvas = document.getElementById('animation-canvas');
        const log = document.getElementById('anim-log');

        if (step.msg || step.text) {
            const el = document.createElement('p');
            el.textContent = `> ${step.msg || step.text}`;
            log.appendChild(el);
            log.scrollTop = log.scrollHeight;
        }

        if (step.type === 'msg') return;

        if (problem.animType === 'array' || problem.animType === 'linked-list') {
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
                canvas.querySelectorAll(`.graph-edge[data-from="${step.node}"], .graph-edge[data-to="${step.node}"]`).forEach(e => {
                    e.classList.add('active');
                });
            }
        }
    }

    // ---- Run user code ----
    const runBtn = document.getElementById('run-code-btn');
    if (runBtn) {
        runBtn.addEventListener('click', () => {
            const result = document.getElementById('run-result');
            try {
                // Mark as solved
                solved.add(p.id);
                localStorage.setItem('sc_solved', JSON.stringify([...solved]));
                result.textContent = '✓ Solution submitted! Visualizing...';
                result.className = 'run-result pass';

                resetAnimation();
                setTimeout(playAnimation, 300);
            } catch (e) {
                result.textContent = `✗ Error: ${e.message}`;
                result.className = 'run-result fail';
            }
        });
    }

    // Initialize the animation canvas immediately
    buildAnimation(p);
});

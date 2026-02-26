// problems.js — Card-grid rendering and filtering
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('problems-grid');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');

    let activeFilter = 'all';
    let activeDifficulty = 'all';
    let searchQuery = '';
    let solved = new Set(JSON.parse(localStorage.getItem('sc_solved') || '[]'));

    // ---- Category meta ----
    const CAT_META = {
        'array':       { label: 'Array',       icon: 'fa-table-cells',  cls: 'cat-array' },
        'linked-list': { label: 'Linked List',  icon: 'fa-link',         cls: 'cat-linked-list' },
        'tree':        { label: 'Tree',         icon: 'fa-sitemap',      cls: 'cat-tree' },
        'graph':       { label: 'Graph',        icon: 'fa-circle-nodes', cls: 'cat-graph' },
        'hashmap':     { label: 'HashMap',      icon: 'fa-hashtag',      cls: 'cat-hashmap' },
        'stack-queue': { label: 'Stack/Queue',  icon: 'fa-layer-group',  cls: 'cat-stack-queue' }
    };

    function getCategoryMeta(cat) {
        if (CAT_META[cat]) return CAT_META[cat];
        return {
            label: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' '),
            icon: 'fa-star',
            cls: 'cat-custom'
        };
    }

    function getPlatformLabel(platform) {
        if (!platform) return 'Solve Problem';
        if (platform === 'leetcode') return 'LeetCode';
        if (platform === 'codeforces') return 'Codeforces';
        return platform.charAt(0).toUpperCase() + platform.slice(1);
    }

    // ---- Render card grid ----
    function renderGrid() {
        const filtered = PROBLEMS.filter(p => {
            if (activeFilter !== 'all' && p.category !== activeFilter) return false;
            if (activeDifficulty !== 'all' && p.difficulty !== activeDifficulty) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                return p.title.toLowerCase().includes(q) ||
                    (p.tagline && p.tagline.toLowerCase().includes(q)) ||
                    (p.realWorld && p.realWorld.toLowerCase().includes(q)) ||
                    p.category.toLowerCase().includes(q);
            }
            return true;
        });

        // Update stats
        const totalEl = document.getElementById('total-count');
        const solvedEl = document.getElementById('solved-count');
        if (totalEl) totalEl.textContent = PROBLEMS.length;
        if (solvedEl) solvedEl.textContent = solved.size;

        // Results count label
        if (resultsCount) {
            resultsCount.textContent = filtered.length === PROBLEMS.length
                ? `${PROBLEMS.length} problems`
                : `${filtered.length} of ${PROBLEMS.length} problems`;
        }

        if (filtered.length === 0) {
            grid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }
        noResults.style.display = 'none';

        grid.innerHTML = filtered.map((p, i) => {
            const catMeta = getCategoryMeta(p.category);
            const isSolved = solved.has(p.id);
            const diff = p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1);
            const platformLabel = getPlatformLabel(p.externalPlatform);

            return `
            <a class="problem-card" href="../problems/${p.slug}/index.html" style="animation-delay:${i * 0.03}s">
                <div class="card-top-row">
                    <span class="card-num">#${String(p.id).padStart(2, '0')}</span>
                    <div class="card-badges">
                        <span class="diff-badge diff-${p.difficulty}">${diff}</span>
                        <span class="cat-tag ${catMeta.cls}">
                            <i class="fa-solid ${catMeta.icon}"></i>${catMeta.label}
                        </span>
                    </div>
                </div>
                <div class="card-title">${p.title}</div>
                <div class="card-tagline">${p.realWorld || p.tagline || ''}</div>
                <div class="card-footer">
                    <span class="card-platform-hint">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        ${platformLabel}
                        ${p.codeforcesLink ? ' + Codeforces' : ''}
                    </span>
                    <div class="card-arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </a>
            `;
        }).join('');
    }

    // ---- Init category chips ----
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

        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeFilter = chip.dataset.filter;
                renderGrid();
            });
        });
    }

    // ---- Difficulty filter ----
    document.getElementById('diff-filter').addEventListener('click', (e) => {
        const btn = e.target.closest('.diff-btn');
        if (!btn) return;
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeDifficulty = btn.dataset.diff;
        renderGrid();
    });

    // ---- Search ----
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
        renderGrid();
    });

    // ---- Reset ----
    window.resetFilters = () => {
        activeFilter = 'all';
        activeDifficulty = 'all';
        searchQuery = '';
        searchInput.value = '';
        document.querySelectorAll('.chip').forEach((c, i) => c.classList.toggle('active', i === 0));
        document.querySelectorAll('.diff-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
        renderGrid();
    };

    initFilters();
    renderGrid();
});

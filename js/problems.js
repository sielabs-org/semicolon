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

        const totalCountEl = document.getElementById('total-count');
        const solvedCountEl = document.getElementById('solved-count');
        if (totalCountEl) totalCountEl.textContent = PROBLEMS.length;
        if (solvedCountEl) solvedCountEl.textContent = solved.size;

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
            <tr data-slug="${p.slug}">
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
                const slug = row.dataset.slug;
                if (slug) {
                    window.location.href = '../problems/' + slug + '/index.html';
                }
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

    // Initial render
    renderTable();
});

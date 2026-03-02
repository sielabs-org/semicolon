// js/single-problem.js

const CAT_META = {
    'array': { label: 'Array', icon: 'fa-table-cells', cls: 'cat-array' },
    'linked-list': { label: 'Linked List', icon: 'fa-link', cls: 'cat-linked-list' },
    'tree': { label: 'Tree', icon: 'fa-sitemap', cls: 'cat-tree' },
    'graph': { label: 'Graph', icon: 'fa-circle-nodes', cls: 'cat-graph' },
    'hashmap': { label: 'HashMap', icon: 'fa-hashtag', cls: 'cat-hashmap' },
    'stack-queue': { label: 'Stack/Queue', icon: 'fa-layer-group', cls: 'cat-stack-queue' },
    'fragmentation': { label: 'Fragmentation', icon: 'fa-boxes-stacked', cls: 'cat-custom' }
};

const CODEFORCES_LINKS = {
    'two-sum': null,
    'move-zeroes': null,
    'binary-search': 'https://codeforces.com/problemset/problem/1/A',
    'number-of-islands': null,
    'course-schedule': null,
};

function getCategoryMeta(cat) {
    if (CAT_META[cat]) return CAT_META[cat];
    return {
        label: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' '),
        icon: 'fa-code',
        cls: 'cat-custom'
    };
}

function buildPlatformLinksHtml(p) {
    const links = [];

    if (p.externalLink) {
        const platform = p.externalPlatform || 'external';
        let cls = 'platform-btn-external';
        let icon = 'fa-arrow-up-right-from-square';
        let label = 'Solve Problem';

        if (platform === 'leetcode') {
            cls = 'platform-btn-leetcode';
            icon = 'fa-code';
            label = 'Solve on LeetCode';
        } else if (platform === 'codeforces') {
            cls = 'platform-btn-codeforces';
            icon = 'fa-trophy';
            label = 'Solve on Codeforces';
        }

        links.push(`
        <a href="${p.externalLink}" target="_blank" rel="noopener" class="platform-btn ${cls}">
            <i class="fa-solid ${icon}"></i> ${label}
        </a>`);
    }

    const cfLink = p.codeforcesLink || (CODEFORCES_LINKS[p.slug]);
    if (cfLink && p.externalPlatform !== 'codeforces') {
        links.push(`
        <a href="${cfLink}" target="_blank" rel="noopener" class="platform-btn platform-btn-codeforces">
            <i class="fa-solid fa-trophy"></i> Solve on Codeforces
        </a>`);
    }

    if (links.length === 0) {
        links.push(`
        <span class="platform-btn platform-btn-external" style="opacity:0.5; cursor:default;">
            <i class="fa-solid fa-circle-info"></i> No external link yet
        </span>`);
    }

    return links.join('\n');
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('id');
    
    if (!slug || typeof PROBLEMS === 'undefined') {
        document.getElementById('problem-error').style.display = 'block';
        return;
    }
    
    const p = PROBLEMS.find(prob => prob.slug === slug);
    if (!p) {
        document.getElementById('problem-error').style.display = 'block';
        return;
    }

    // Populate DOM
    document.title = `${p.title} | Semicolon`;
    document.getElementById('meta-description').content = p.tagline || '';
    document.getElementById('problem-wrap').style.display = 'block';
    
    const catMeta = getCategoryMeta(p.category);
    const diff = p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1);
    
    document.getElementById('problem-meta-row').innerHTML = `
        <span class="diff-badge diff-${p.difficulty}">${diff}</span>
        <span class="cat-tag ${catMeta.cls}">
            <i class="fa-solid ${catMeta.icon}"></i> ${catMeta.label}
        </span>
    `;
    
    document.getElementById('problem-title').textContent = p.title;
    document.getElementById('problem-real-world').textContent = p.realWorld || p.tagline || '';
    document.getElementById('problem-description').textContent = p.description || '';
    document.getElementById('problem-statement').innerHTML = p.statement || '';
    
    const examplesHtml = (p.examples || []).map((ex, i) => `
        <div class="example-block">
            <div class="example-label">Example ${i + 1}</div>
            <code>Input: ${ex.input}\nOutput: ${ex.output}</code>
        </div>
    `).join('');
    document.getElementById('problem-examples').innerHTML = examplesHtml;
    
    document.getElementById('platform-links-row').innerHTML = buildPlatformLinksHtml(p);
});

const fs = require('fs');
const path = require('path');
const problemsDir = path.join(__dirname, '../problems');
const outputFile = path.join(__dirname, '../js/problems-data.js');
const templatePath = path.join(__dirname, '../pages/problem-template.html');

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function getCategoryMeta(cat) {
    const metas = {
        'array': { icon: 'fa-table-cells', label: 'Array', cls: 'cat-array' },
        'linked-list': { icon: 'fa-link', label: 'Linked List', cls: 'cat-linked-list' },
        'tree': { icon: 'fa-sitemap', label: 'Tree', cls: 'cat-tree' },
        'graph': { icon: 'fa-circle-nodes', label: 'Graph', cls: 'cat-graph' },
        'hashmap': { icon: 'fa-hashtag', label: 'HashMap', cls: 'cat-hashmap' },
        'stack-queue': { icon: 'fa-layer-group', label: 'Stack/Queue', cls: 'cat-stack-queue' },
        'fragmentation': { icon: 'fa-boxes-stacked', label: 'Fragmentation', cls: 'cat-custom' }
    };
    return metas[cat] || { icon: 'fa-code', label: cat.toUpperCase(), cls: 'cat-custom' };
}

// Codeforces links for common problems (add more as needed)
const CODEFORCES_LINKS = {
    'two-sum': null,
    'move-zeroes': null,
    'binary-search': 'https://codeforces.com/problemset/problem/1/A',
    'number-of-islands': null,
    'course-schedule': null,
};

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

    // Check for additional codeforces link
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

function build() {
    console.log('Building problems data and static pages...');
    const files = fs.readdirSync(problemsDir).filter(f => f.endsWith('.json'));

    let templateHtml = '';
    try {
        templateHtml = fs.readFileSync(templatePath, 'utf-8');
    } catch (e) {
        console.error('Could not read problem-template.html', e);
        return;
    }

    let problems = [];
    for (const file of files) {
        try {
            const content = fs.readFileSync(path.join(problemsDir, file), 'utf-8');
            const data = JSON.parse(content);
            data.slug = slugify(data.title);
            problems.push(data);
            generateProblemPage(data, templateHtml);
        } catch (e) {
            console.error(`Error parsing ${file}:`, e.message);
        }
    }

    problems.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    const jsContent = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Update JSON files in problems/ and run: node scripts/build.js

const PROBLEMS = ${JSON.stringify(problems, null, 4)};\n`;

    fs.writeFileSync(outputFile, jsContent, 'utf-8');
    console.log(`Built js/problems-data.js and HTML pages for ${problems.length} problems.`);
}

function generateProblemPage(p, template) {
    const cat = getCategoryMeta(p.category);

    const examplesHtml = p.examples.map((ex, i) =>
        `<div class="example-block">
            <div class="example-label">Example ${i + 1}</div>
            <code>Input: ${ex.input}\nOutput: ${ex.output}</code>
        </div>`
    ).join('');

    const platformLinksHtml = buildPlatformLinksHtml(p);

    let pageHtml = template
        .replace(/{{title}}/g, p.title)
        .replace(/{{tagline}}/g, p.tagline || '')
        .replace(/{{difficultyClass}}/g, p.difficulty)
        .replace(/{{difficulty}}/g, p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1))
        .replace(/{{icon}}/g, cat.icon)
        .replace(/{{catCls}}/g, cat.cls)
        .replace(/{{categoryLabel}}/g, cat.label)
        .replace(/{{realWorld}}/g, p.realWorld || '')
        .replace(/{{description}}/g, p.description || '')
        .replace(/{{statement}}/g, p.statement || '')
        .replace(/{{examplesHtml}}/g, examplesHtml)
        .replace(/{{platformLinksHtml}}/g, platformLinksHtml);

    const outDir = path.join(problemsDir, p.slug);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml, 'utf-8');
    console.log(`  → ${p.slug}/index.html`);
}

build();

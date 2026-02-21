const fs = require('fs');
const path = require('path');
const problemsDir = path.join(__dirname, '../problems');
const outputFile = path.join(__dirname, '../js/problems-data.js');

const templatePath = path.join(__dirname, '../pages/problem-template.html');

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

function getCategoryMeta(cat) {
    const metas = {
        'array': { icon: 'fa-table-cells', label: 'Array' },
        'linked-list': { icon: 'fa-link', label: 'Linked List' },
        'tree': { icon: 'fa-network-wired', label: 'Tree' },
        'graph': { icon: 'fa-chart-network', label: 'Graph' },
        'hashmap': { icon: 'fa-hashtag', label: 'HashMap' },
        'stack-queue': { icon: 'fa-layer-group', label: 'Stack/Queue' },
        'fragmentation': { icon: 'fa-boxes-stacked', label: 'Fragmentation' }
    };
    return metas[cat] || { icon: 'fa-code', label: cat.toUpperCase() };
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

            // Assign a slug
            data.slug = slugify(data.title);
            problems.push(data);

            // Generate Static Single Page
            generateProblemPage(data, templateHtml);

        } catch (e) {
            console.error(`Error parsing ${file}:`, e.message);
        }
    }

    // Sort by ID
    problems.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    // Generate JS content
    const jsContent = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Update the JSON files in problems/ instead and run:
// node scripts/build.js

const PROBLEMS = ${JSON.stringify(problems, null, 4)};\n`;

    fs.writeFileSync(outputFile, jsContent, 'utf-8');
    console.log(`Successfully built js/problems-data.js and static HTML pages for ${problems.length} problems.`);
}

function generateProblemPage(p, template) {
    const cat = getCategoryMeta(p.category);

    const examplesHtml = p.examples.map((ex, i) =>
        `<div class="example-block">
            <div class="example-label">Example ${i + 1}</div>
            <code>Input: ${ex.input}\nOutput: ${ex.output}</code>
        </div>`
    ).join('');

    let extLinkHtml = '';
    if (p.externalLink) {
        const platform = p.externalPlatform ? p.externalPlatform.charAt(0).toUpperCase() + p.externalPlatform.slice(1) : 'External';
        extLinkHtml = `
            <div class="drawer-actions" style="margin-top: 2rem;">
                <a href="${p.externalLink}" target="_blank" class="btn btn-secondary external-link-btn" style="display:inline-flex;">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Solve on ${platform}
                </a>
            </div>
        `;
    }

    let pageHtml = template
        .replace(/{{title}}/g, p.title)
        .replace(/{{tagline}}/g, p.tagline || '')
        .replace(/{{difficultyClass}}/g, p.difficulty)
        .replace(/{{difficulty}}/g, p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1))
        .replace(/{{icon}}/g, cat.icon)
        .replace(/{{categoryLabel}}/g, cat.label)
        .replace(/{{realWorld}}/g, p.realWorld)
        .replace(/{{description}}/g, p.description)
        .replace(/{{statement}}/g, p.statement)
        .replace(/{{examplesHtml}}/g, examplesHtml)
        .replace(/{{externalLinkHtml}}/g, extLinkHtml)
        .replace(/{{template}}/g, p.template || '')
        .replace(/{{problemJson}}/g, JSON.stringify(p));

    const outDir = path.join(problemsDir, p.slug);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml, 'utf-8');
}

build();

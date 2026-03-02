const fs = require('fs');
const path = require('path');
const problemsDir = path.join(__dirname, '../problems');
const outputFile = path.join(__dirname, '../js/problems-data.js');

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function build() {
    console.log('Building problems data and static pages...');
    const files = fs.readdirSync(problemsDir).filter(f => f.endsWith('.json'));

    let problems = [];
    for (const file of files) {
        try {
            const content = fs.readFileSync(path.join(problemsDir, file), 'utf-8');
            const data = JSON.parse(content);
            data.slug = slugify(data.title);
            problems.push(data);
        } catch (e) {
            console.error(`Error parsing ${file}:`, e.message);
        }
    }

    problems.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    const jsContent = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Update JSON files in problems/ and run: node scripts/build.js

const PROBLEMS = ${JSON.stringify(problems, null, 4)};\n`;

    fs.writeFileSync(outputFile, jsContent, 'utf-8');
    console.log(`Built js/problems-data.js for ${problems.length} problems.`);
}

build();

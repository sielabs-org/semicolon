const fs = require('fs');
const path = require('path');
const problemsDir = path.join(__dirname, '../problems');
const outputFile = path.join(__dirname, '../js/problems-data.js');

function build() {
    console.log('Building problems data...');
    const files = fs.readdirSync(problemsDir).filter(f => f.endsWith('.json'));

    let problems = [];
    for (const file of files) {
        try {
            const content = fs.readFileSync(path.join(problemsDir, file), 'utf-8');
            const data = JSON.parse(content);
            problems.push(data);
        } catch (e) {
            console.error(`Error parsing ${file}:`, e.message);
        }
    }

    // Sort by ID
    problems.sort((a, b) => a.id - b.id);

    // Generate JS content
    const jsContent = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Update the JSON files in problems/ instead and run:
// node scripts/build.js

const PROBLEMS = ${JSON.stringify(problems, null, 4)};\n`;

    fs.writeFileSync(outputFile, jsContent, 'utf-8');
    console.log(`Successfully built js/problems-data.js with ${problems.length} problems.`);
}

build();

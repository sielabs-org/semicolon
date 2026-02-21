# Contributing to Semicolon Problems

Thank you for contributing to Semicolon! We aim to provide real-world software engineering context to algorithmic problems. 

Our problem database is modular to make contributing as easy as possible. Instead of editing a massive JavaScript file, you simply create a JSON file for your problem and run a build script.

## How to Add a New Problem

1. **Create a JSON file** inside `data/problems/`.
   - Name it chronologically and descriptively (e.g., `25-lfu-cache.json`).
   - If you are adding the 25th problem, make sure the `id` field inside the file is `25`.

2. **Follow the Schema**. Your JSON file should look like this:
   ```json
   {
     "id": 25,
     "title": "LFU Cache",
     "tagline": "Evict the least frequently used item",
     "category": "hashmap",
     "difficulty": "hard",
     "realWorld": "CDNs — Cloudflare caches frequently accessed assets",
     "icon": "fa-solid fa-server",
     "description": "Implement an LFU cache. CDNs use this exact strategy to keep the most popular assets globally distributed.",
     "statement": "Design and implement a data structure for a Least Frequently Used (LFU) cache.",
     "examples": [
       {
         "input": "put(1, 1), put(2, 2), get(1), put(3, 3)",
         "output": "get(2) -> -1 (evicted)"
       }
     ],
     "template": "class LFUCache {\n  constructor(capacity) {\n    // Your code here\n  }\n}",
     "animType": "array",
     "animData": ["1:A", "2:B"],
     "animSteps": [
       { "type": "msg", "text": "Animation steps go here" }
     ],
     "externalLink": "https://leetcode.com/problems/lfu-cache/",
     "externalPlatform": "leetcode"
   }
   ```
   *Note: Categories are dynamically generated. If your problem highlights a specific engineering concept like `"fragmentation"` or `"booting process"`, feel free to use that as the `category`! It will automatically become a filter on the frontend.*

3. **Build the Database**
   Once your JSON file is ready, compile the database by running our build script from the root directory:
   ```bash
   node scripts/build.js
   ```
   This will automatically generate the `js/problems-data.js` file used by the frontend.

4. **Verify Locally**
   Open `pages/problems.html` in your browser (or run a local server) to ensure your problem appears, the category filter works, and the 'Solve on Leetcode/Codeforces' button is rendering properly.

5. **Submit a Pull Request**
   Commit both your new JSON file and the rebuilt `js/problems-data.js` file, then open a PR!

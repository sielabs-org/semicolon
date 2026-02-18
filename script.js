document.addEventListener('DOMContentLoaded', () => {
    // --- Tabs Logic ---
    const buttons = document.querySelectorAll('.challenge-btn');
    const scenarios = document.querySelectorAll('.demo-scenario');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from buttons and scenarios
            buttons.forEach(b => b.classList.remove('active'));
            scenarios.forEach(s => {
                s.style.display = 'none';
                s.classList.remove('active');
            });

            // Add active to clicked button and target scenario
            btn.classList.add('active');
            const targetId = `demo-${btn.dataset.scenario}`;
            const target = document.getElementById(targetId);
            target.style.display = 'block';
            setTimeout(() => target.classList.add('active'), 10); // Fade in

            logMessage(`Switched to scenario: ${btn.textContent}`);
        });
    });

    const outputLog = document.getElementById('output-log');
    function logMessage(msg) {
        const p = document.createElement('p');
        p.textContent = `> ${msg}`;
        outputLog.appendChild(p);
        outputLog.scrollTop = outputLog.scrollHeight;
    }

    // --- Scenario 1: Rate Limiter ---
    const rlSendBtn = document.getElementById('rl-send-btn');
    const rlStatus = document.getElementById('rl-status');
    const rlBucket = document.getElementById('rl-bucket');
    const rlCountSpan = document.getElementById('rl-count');

    let requestCount = 0;
    const MAX_REQUESTS = 5;
    const TIME_WINDOW = 10000; // 10s
    let resetTimer = null;

    rlSendBtn.addEventListener('click', () => {
        if (requestCount >= MAX_REQUESTS) {
            logMessage("Error: 429 Too Many Requests");
            rlStatus.textContent = "BLOCKED";
            rlStatus.className = "status-indicator blocked";
            rlBucket.classList.add('shake');
            setTimeout(() => rlBucket.classList.remove('shake'), 500);
            return;
        }

        requestCount++;
        updateRlViz();

        // Visual Request Token
        const token = document.createElement('div');
        token.className = 'bucket-item';
        rlBucket.appendChild(token);

        logMessage(`Request ${requestCount} accepted. 200 OK.`);

        // Start reset timer if first request
        if (!resetTimer) {
            resetTimer = setTimeout(() => {
                requestCount = 0;
                rlBucket.innerHTML = '';
                rlStatus.textContent = "OK";
                rlStatus.className = "status-indicator ok";
                updateRlViz();
                logMessage("Rate limit window reset. Bucket empty.");
                resetTimer = null;
            }, TIME_WINDOW);
        }
    });

    function updateRlViz() {
        rlCountSpan.textContent = requestCount;
    }

    // --- Scenario 2: Load Balancer ---
    const lbSpikeBtn = document.getElementById('lb-t-spike-btn');
    const servers = [
        document.getElementById('server-1'),
        document.getElementById('server-2'),
        document.getElementById('server-3')
    ];
    let currentServerIndex = 0;

    lbSpikeBtn.addEventListener('click', () => {
        logMessage("Traffic Spike! Distributing 10 requests...");
        distributeTraffic(10);
    });

    function distributeTraffic(amount) {
        let i = 0;
        const interval = setInterval(() => {
            if (i >= amount) {
                clearInterval(interval);
                return;
            }

            // Round Robin
            const server = servers[currentServerIndex];
            server.classList.add('active-server');

            // Simulate processing
            setTimeout(() => server.classList.remove('active-server'), 300);

            currentServerIndex = (currentServerIndex + 1) % servers.length;
            i++;
        }, 200);
    }

    // --- Scenario 3: DB Optimization ---
    const dbScanBtn = document.getElementById('db-scan-btn');
    const dbIndexBtn = document.getElementById('db-index-btn');
    const dbTable = document.getElementById('db-table-visual');
    const dbTime = document.getElementById('db-time');

    // Create DB Grid
    for (let i = 0; i < 50; i++) {
        const cell = document.createElement('div');
        cell.className = 'db-cell';
        dbTable.appendChild(cell);
    }
    const cells = document.querySelectorAll('.db-cell');
    const TARGET_INDEX = 42; // arbitrary

    dbScanBtn.addEventListener('click', () => {
        logMessage("Running Full Table Scan...");
        runQuery(false);
    });

    dbIndexBtn.addEventListener('click', () => {
        logMessage("Running Index Lookup...");
        runQuery(true);
    });

    function runQuery(isIndexed) {
        // Reset
        cells.forEach(c => {
            c.className = 'db-cell';
        });

        if (isIndexed) {
            // Instant lookup
            setTimeout(() => {
                cells[TARGET_INDEX].classList.add('found');
                dbTime.textContent = "0.4ms (O(log n))";
                logMessage("Query finished instantly using Index.");
            }, 500);
        } else {
            // Linear scan animation
            let i = 0;
            const interval = setInterval(() => {
                if (i > TARGET_INDEX) {
                    clearInterval(interval);
                    cells[TARGET_INDEX].classList.add('found');
                    dbTime.textContent = "520ms (O(n))";
                    logMessage("Query finished after full scan.");
                    return;
                }
                cells[i].classList.add('scanned');
                i++;
            }, 30); // Slow scan
        }
    }

    // --- Scenario 4: Disk Defragmentation ---
    const defragRunBtn = document.getElementById('defrag-run-btn');
    const defragResetBtn = document.getElementById('defrag-reset-btn');
    const diskVisual = document.getElementById('disk-visual');
    const defragCode = document.getElementById('defrag-code');
    const defragOps = document.getElementById('defrag-ops');
    const defragStatus = document.getElementById('defrag-status');

    let diskState = [];
    const DISK_SIZE = 50;
    let operationCount = 0;
    let isDefragRunning = false;

    function initDisk() {
        diskState = [];
        diskVisual.innerHTML = '';
        operationCount = 0;
        defragOps.textContent = '0';
        defragStatus.textContent = 'Ready';
        defragStatus.style.color = '#e0e0e0';

        for (let i = 0; i < DISK_SIZE; i++) {
            // Random 0 or 1, biased slightly towards 0 for more fragmentation
            const val = Math.random() > 0.6 ? 1 : 0;
            diskState.push(val);

            const block = document.createElement('div');
            block.className = `disk-block ${val === 1 ? 'occupied' : 'free'}`;
            block.dataset.index = i;
            block.textContent = val;
            diskVisual.appendChild(block);
        }
    }

    // Initialize on load
    initDisk();

    defragResetBtn.addEventListener('click', () => {
        if (isDefragRunning) return;
        initDisk();
        logMessage("Disk reset with new random fragmentation.");
    });

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    defragRunBtn.addEventListener('click', async () => {
        if (isDefragRunning) return;
        isDefragRunning = true;
        defragRunBtn.disabled = true;
        defragResetBtn.disabled = true;
        defragCode.disabled = true;
        defragStatus.textContent = "Running...";
        defragStatus.style.color = "#fbbf24";
        logMessage("Starting Disk Defragmentation...");

        try {
            // Create a proxy to intercept array operations
            const trackedDisk = new Proxy(diskState, {
                get(target, prop, receiver) {
                    const val = Reflect.get(target, prop, receiver);
                    if (!isNaN(prop)) { // Index access
                        highlightBlock(prop, 'read');
                    }
                    return val;
                },
                set(target, prop, value, receiver) {
                    if (!isNaN(prop)) {
                        operationCount++;
                        defragOps.textContent = operationCount;

                        // Update visual
                        const block = diskVisual.children[prop];
                        if (block) {
                            block.className = `disk-block ${value === 1 ? 'occupied' : 'free'} write`;
                            block.textContent = value;
                            setTimeout(() => {
                                block.classList.remove('write');
                            }, 300);
                        }
                    }
                    return Reflect.set(target, prop, value, receiver);
                }
            });

            // highlight function to be used inside the loop for visualization delay
            // We need to inject a pause mechanism. 
            // Since the user code is synchronous, we can't easily pause it without
            // rewriting it or running it in a worker with SharedArrayBuffer (too complex).
            // ALTERNATIVE: We interpret the user's code? No, too hard.
            // ALTERNATIVE: We use a generator? No, users won't write generators.
            // REALISTIC APPROACH for Demo:
            // We can't easily visualize "during" a synchronous loop in the main thread without
            // blocking the UI.
            // However, we can use 'Async Function' constructor if we modify the user code
            // to await a 'tick' function.

            // Let's try to inject 'await tick()' into the user's loop?
            // Or simpler: We just visualize the result? No, that's boring.

            // Better approach for visualization:
            // We can record the operations and then play them back?
            // Yes! That's much safer and allows smooth animation.

            const operations = [];
            const recordingProxy = new Proxy([...diskState], {
                get(target, prop) {
                    if (!isNaN(prop)) {
                        operations.push({ type: 'read', index: prop });
                    }
                    return target[prop];
                },
                set(target, prop, value) {
                    if (!isNaN(prop)) {
                        operations.push({ type: 'write', index: prop, value: value });
                        target[prop] = value;
                    }
                    return true;
                }
            });

            // Execute user code on the recording proxy
            const userCode = defragCode.value;
            // distinct scope
            const f = new Function('disk', userCode + '\nif (typeof defrag === "function") defrag(disk);');
            f(recordingProxy);

            // Now playback operations
            logMessage(`Simulation complete. Replaying ${operations.length} operations...`);

            for (const op of operations) {
                if (op.type === 'read') {
                    highlightBlock(op.index, 'read');
                    // Fast read, no sleep needed usually, or very short
                    await sleep(5);
                } else if (op.type === 'write') {
                    highlightBlock(op.index, 'write');
                    updateBlock(op.index, op.value);
                    operationCount++;
                    defragOps.textContent = operationCount;
                    await sleep(50); // Visible write
                }
            }

            // Validate result
            const isSorted = checkSorted(diskState);
            if (isSorted) {
                defragStatus.textContent = "Success!";
                defragStatus.style.color = "#22c55e";
                logMessage("Defragmentation successful! Blocks compacted.");
            } else {
                defragStatus.textContent = "Failed";
                defragStatus.style.color = "#ef4444";
                logMessage("Defragmentation failed. Blocks are not compacted.");
            }

        } catch (e) {
            logMessage(`Error: ${e.message}`);
            defragStatus.textContent = "Error";
            defragStatus.style.color = "#ef4444";
        } finally {
            isDefragRunning = false;
            defragRunBtn.disabled = false;
            defragResetBtn.disabled = false;
            defragCode.disabled = false;
        }
    });

    function highlightBlock(index, type) {
        const block = diskVisual.children[index];
        if (block) {
            block.classList.add(type);
            setTimeout(() => block.classList.remove(type), 200);
        }
    }

    function updateBlock(index, value) {
        const block = diskVisual.children[index];
        if (block) {
            block.className = `disk-block ${value === 1 ? 'occupied' : 'free'} write`;
            block.textContent = value;
            setTimeout(() => block.classList.remove('write'), 200);

            // Update actual state for consistency
            diskState[index] = value;
        }
    }

    function checkSorted(arr) {
        // Should be all 1s then all 0s
        let seenZero = false;
        for (let x of arr) {
            if (x === 0) seenZero = true;
            if (seenZero && x === 1) return false;
        }
        return true;
    }

    // --- GitHub Star Count ---
    async function fetchGitHubStars() {
        const starCountElement = document.getElementById('github-stars');
        if (!starCountElement) return;

        try {
            const response = await fetch('https://api.github.com/repos/sielabs-org/semicolon');
            if (response.ok) {
                const data = await response.json();
                const stars = data.stargazers_count;
                // Format: 1.2k if > 1000
                const formattedStars = stars >= 1000 ? (stars / 1000).toFixed(1) + 'k' : stars;
                starCountElement.textContent = ` ${formattedStars}`;
            }
        } catch (e) {
            console.error('Failed to fetch GitHub stars:', e);
            // Fallback or leave empty
        }
    }
    fetchGitHubStars();
});

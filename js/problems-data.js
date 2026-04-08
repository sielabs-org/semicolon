// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Update JSON files in problems/ and run: node scripts/build.js

const PROBLEMS = [
    {
        "id": 1,
        "title": "Move Zeroes",
        "tagline": "Defragment memory by moving empty slots",
        "category": "fragmentation",
        "difficulty": "easy",
        "realWorld": "Operating Systems — Memory defragmentation moves empty slots (0s) to the end",
        "icon": "fa-solid fa-memory",
        "description": "Imagine a 10GB disk: you delete two 1GB movies, creating two separate 1GB gaps. Now you download one 2GB movie, so the OS may split it across both gaps. That split storage is fragmentation. Defragmentation compacts active data (non-zeros) to the front so free space is grouped together at the end.",
        "statement": "Move all <strong>0s</strong> to the end of the array in-place, keeping the relative order of non-zero elements.",
        "examples": [
            {
                "input": "[0,1,0,3,12]",
                "output": "[1,3,12,0,0]"
            }
        ],
        "template": "function moveZeroes(nums) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            0,
            1,
            0,
            3,
            12
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Two-pointer approach: writePtr=0"
            },
            {
                "type": "pointer",
                "indices": [
                    0
                ],
                "labels": [
                    "write"
                ],
                "msg": "writePtr at 0"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "Read 1 -> swap with pos 0"
            },
            {
                "type": "swap",
                "indices": [
                    0,
                    1
                ],
                "values": [
                    1,
                    0
                ],
                "msg": "Swap: [1,0,0,3,12]"
            },
            {
                "type": "highlight",
                "indices": [
                    3
                ],
                "msg": "Read 3 -> swap with pos 1"
            },
            {
                "type": "swap",
                "indices": [
                    1,
                    3
                ],
                "values": [
                    3,
                    0
                ],
                "msg": "Swap: [1,3,0,0,12]"
            },
            {
                "type": "highlight",
                "indices": [
                    4
                ],
                "msg": "Read 12 -> swap with pos 2"
            },
            {
                "type": "swap",
                "indices": [
                    2,
                    4
                ],
                "values": [
                    12,
                    0
                ],
                "msg": "Done: [1,3,12,0,0]"
            }
        ],
        "externalLink": "https://leetcode.com/problems/move-zeroes/",
        "externalPlatform": "leetcode",
        "articleSlug": "memory-defragmentation",
        "slug": "move-zeroes"
    },
    {
        "id": 2,
        "title": "Reverse Linked List",
        "tagline": "Reverse pointer directions in a chain",
        "category": "linked-list",
        "difficulty": "easy",
        "realWorld": "Linux kernel uses doubly-linked lists everywhere. When unlinking/removing nodes from task scheduler chains, pointers must be reversed.",
        "icon": "fa-solid fa-link",
        "description": "Reversing a linked list is core to pointer manipulation. Maintain three pointers (prev, current, next) to avoid losing nodes.",
        "statement": "Reverse a singly linked list by changing pointer directions.",
        "examples": [
            {
                "input": "head = [1,2,3,4,5]",
                "output": "[5,4,3,2,1]"
            },
            {
                "input": "head = [1,2]",
                "output": "[2,1]"
            },
            {
                "input": "head = []",
                "output": "[]"
            }
        ],
        "template": "function reverseList(head) {\\n  let prev = null;\\n  let current = head;\\n  while (current) {\\n    // Your code here\\n  }\\n  return prev;\\n}",
        "animType": "linked-list",
        "animData": {
            "nodes": [
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                }
            ],
            "links": [
                {
                    "from": 1,
                    "to": 2
                },
                {
                    "from": 2,
                    "to": 3
                },
                {
                    "from": 3,
                    "to": 4
                },
                {
                    "from": 4,
                    "to": 5
                }
            ]
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "Reverse pointer directions using three pointers"
            },
            {
                "type": "pointer",
                "nodeId": 1,
                "labels": [
                    "current"
                ],
                "msg": "Start at node 1"
            },
            {
                "type": "msg",
                "text": "Key: Save next node, reverse pointer, move forward"
            }
        ],
        "externalLink": "https://leetcode.com/problems/reverse-linked-list/",
        "externalPlatform": "leetcode",
        "slug": "reverse-linked-list"
    },
    {
        "id": 3,
        "title": "Longest Common Prefix",
        "tagline": "Find the shared start of many strings",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Search autocomplete and file-path completion rely on common prefix matching to suggest valid entries.",
        "icon": "fa-solid fa-font",
        "description": "Given a list of strings, find the longest prefix that is common to all of them.",
        "statement": "Return the longest common prefix string among an array of strings. If there is no common prefix, return an empty string.",
        "examples": [
            {
                "input": "[\"apple\", \"application\", \"appstore\", \"apply\"]",
                "output": "\"app\""
            },
            {
                "input": "[\"Docu\", \"Document\", \"Documentation\", \"Doctor\"]",
                "output": "\"Doc\""
            },
            {
                "input": "[]",
                "output": "\"\""
            }
        ],
        "template": "function longestCommonPrefix(strs) {\n  // Your code here\n}",
        "animType": "string",
        "animData": [
            "apple",
            "application",
            "appstore",
            "apply"
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Compare strings character-by-character to keep the common prefix"
            },
            {
                "type": "msg",
                "text": "Example: start with 'apple', reduce while mismatch occurs with next strings"
            }
        ],
        "externalLink": "https://leetcode.com/problems/longest-common-prefix/",
        "externalPlatform": "leetcode",
        "slug": "longest-common-prefix"
    },
    {
        "id": 4,
        "title": "Valid Parentheses",
        "tagline": "Validate nested syntax with a parser stack",
        "category": "stack-queue",
        "difficulty": "easy",
        "realWorld": "Compilers and linters use a stack to verify brackets are properly opened and closed during parsing.",
        "icon": "fa-solid fa-layer-group",
        "description": "When a compiler reads code like `if (a[2] > 0) { return x; }`, every opening symbol must be matched by the correct closing symbol in the right order. A stack models this perfectly: push openings, and when a closing symbol appears, it must match the most recent opening.",
        "statement": "Given a string <strong>s</strong> containing just the characters <strong>()[]{}</strong>, determine if the input string is valid.",
        "examples": [
            {
                "input": "s = \"()\"",
                "output": "true"
            },
            {
                "input": "s = \"()[]{}\"",
                "output": "true"
            },
            {
                "input": "s = \"(]\"",
                "output": "false"
            }
        ],
        "template": "function isValid(s) {\n  const stack = [];\n  const pairs = {\n    ')': '(',\n    ']': '[',\n    '}': '{'\n  };\n\n  for (const ch of s) {\n    // Your code here\n  }\n\n  return stack.length === 0;\n}",
        "animType": "array",
        "animData": [
            "(",
            "[",
            "]",
            ")"
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Use a stack: push opening brackets, match closing brackets"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Read '(' -> push to stack"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "Read '[' -> push to stack"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "Read ']' -> it matches the latest '['"
            },
            {
                "type": "highlight",
                "indices": [
                    3
                ],
                "msg": "Read ')' -> it matches the latest '(' and stack becomes empty"
            }
        ],
        "externalLink": "https://leetcode.com/problems/valid-parentheses/",
        "externalPlatform": "leetcode",
        "slug": "valid-parentheses"
    },
    {
        "id": 5,
        "title": "Excel Sheet Column Title",
        "tagline": "Convert column numbers to Excel-style alphabetical labels",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Column Label Generation During Database Export to Excel\n\nWhen a database runs a SQL query and the user exports the result to Excel (.xlsx) or CSV with headers, the system must assign proper column titles to each column in the output file.\n\nInternally, databases store columns as numbers (Column 1, Column 2, Column 3, …). However, when exporting to Excel, they convert these numbers into Excel-style alphabetical column titles such as A, B, C, ..., Z, AA, AB, ..., ZZ, AAA, etc.",
        "icon": "fa-solid fa-table",
        "description": "Excel columns are labeled A to Z, then AA to AZ, BA to BZ, and so on. This is essentially base-26 numbering where A=1, B=2, ..., Z=26. The challenge is to convert a given integer (column number) to its corresponding Excel column title string.",
        "statement": "Given an integer <strong>columnNumber</strong>, return its corresponding column title as it appears in an Excel sheet.\n\nFor example:\n- 1 -> A\n- 26 -> Z\n- 27 -> AA\n- 28 -> AB",
        "examples": [
            {
                "input": "1",
                "output": "\"A\""
            },
            {
                "input": "26",
                "output": "\"Z\""
            },
            {
                "input": "27",
                "output": "\"AA\""
            },
            {
                "input": "28",
                "output": "\"AB\""
            },
            {
                "input": "701",
                "output": "\"ZY\""
            }
        ],
        "template": "function convertToTitle(columnNumber) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            1
        ],
        "animSteps": [],
        "externalLink": "https://leetcode.com/problems/excel-sheet-column-title/",
        "externalPlatform": "leetcode",
        "slug": "excel-sheet-column-title"
    },
    {
        "id": 6,
        "title": "Task Scheduler",
        "tagline": "Keep the CPU busy while respecting cooldowns",
        "category": "stack-queue",
        "difficulty": "medium",
        "realWorld": "OS schedulers and runtime systems insert other tasks while waiting for cooldowns or I/O, minimizing idle CPU cycles.",
        "icon": "fa-solid fa-microchip",
        "description": "A scheduler must arrange tasks so the same task waits for a cooldown interval before running again. If no eligible task is available, the CPU idles briefly while preserving overall efficiency.",
        "statement": "Given a list of tasks and a cooldown interval n, return the minimum number of time units the CPU needs to finish all tasks. Each task takes one unit of time, and the same task must be separated by at least n units.",
        "examples": [
            {
                "input": "tasks = ['A','A','A','B','B','B'], n = 2",
                "output": "8"
            },
            {
                "input": "tasks = ['A','A','A','B','B','B'], n = 0",
                "output": "6"
            }
        ],
        "template": "function leastInterval(tasks, n) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            "A",
            "A",
            "A",
            "B",
            "B",
            "B"
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Schedule the most frequent tasks first and insert cooldowns when needed."
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Execute task A"
            },
            {
                "type": "highlight",
                "indices": [
                    3
                ],
                "msg": "Execute task B while A cools down"
            },
            {
                "type": "msg",
                "text": "Idle only when no other task can be scheduled."
            }
        ],
        "externalLink": "https://leetcode.com/problems/task-scheduler/",
        "externalPlatform": "leetcode",
        "slug": "task-scheduler"
    },
    {
        "id": 7,
        "title": "Detect Capital",
        "tagline": "Validate word capitalization patterns",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Microsoft Word & Grammarly — Validate and auto-correct capitalization of words while typing",
        "icon": "fa-solid fa-font",
        "description": "Microsoft Word and Grammarly use this logic to validate and auto-correct capitalization of words while the user is typing. When you type a word, these tools instantly check whether the capitalization follows correct English rules: All letters uppercase (e.g., \"USA\", \"HTML\"), All letters lowercase (e.g., \"leetcode\"), Only the first letter uppercase and rest lowercase (e.g., \"Google\", \"LeetCode\"). If the word does not follow any of these three valid patterns, the tool underlines it or automatically corrects it. The \"Detect Capital\" problem implements exactly the same logic that MS Word and Grammarly use to decide whether a word's capitalization is correct or not.",
        "statement": "We define the usage of capitals in a word to be right when one of the following cases holds: <ul><li>All letters in this word are capitals, like \"USA\".</li><li>All letters in this word are not capitals, like \"leetcode\".</li><li>Only the first letter in this word is capital, like \"Google\".</li></ul> Given a string <code>word</code>, return <code>true</code> if the usage of capitals in it is right.",
        "examples": [
            {
                "input": "word = \"USA\"",
                "output": "true"
            },
            {
                "input": "word = \"FlaG\"",
                "output": "false"
            },
            {
                "input": "word = \"leetcode\"",
                "output": "true"
            },
            {
                "input": "word = \"Google\"",
                "output": "true"
            }
        ],
        "template": "function detectCapitalUse(word) {\n  // Your code here\n}",
        "animType": "string",
        "animData": "USA",
        "animSteps": [
            {
                "type": "msg",
                "text": "Check if all uppercase"
            },
            {
                "type": "highlight",
                "indices": [
                    0,
                    1,
                    2
                ],
                "msg": "All letters are uppercase: true"
            },
            {
                "type": "msg",
                "text": "Valid capitalization pattern"
            }
        ],
        "externalLink": "https://leetcode.com/problems/detect-capital/",
        "externalPlatform": "leetcode",
        "slug": "detect-capital"
    },
    {
        "id": 8,
        "title": "Spam Message Detection",
        "tagline": "Detect duplicate messages efficiently using hashing",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Spam Detection in Messaging Applications\n\nUsed in messaging applications to detect spam by identifying repeated or duplicate messages quickly.",
        "icon": "fa-solid fa-message",
        "description": "Given a list of messages, determine if any message appears more than once. This can be efficiently solved using hashing or a set.",
        "statement": "Given an array <strong>messages</strong>, return <strong>true</strong> if any value appears at least twice, otherwise return <strong>false</strong>.\n\nFor example:\n- [\"hi\", \"hello\", \"hi\"] -> true\n- [\"spam\", \"ham\", \"jam\"] -> false",
        "examples": [
            {
                "input": "[\"hi\", \"hello\", \"hi\"]",
                "output": "true"
            },
            {
                "input": "[\"spam\", \"ham\", \"jam\"]",
                "output": "false"
            },
            {
                "input": "[\"offer\", \"deal\", \"offer\", \"deal\"]",
                "output": "true"
            },
            {
                "input": "[\"one\", \"two\", \"three\"]",
                "output": "false"
            }
        ],
        "template": "function containsDuplicate(messages) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            "hi",
            "hello",
            "hi"
        ],
        "animSteps": [],
        "externalLink": "https://leetcode.com/problems/contains-duplicate/",
        "externalPlatform": "leetcode",
        "slug": "spam-message-detection"
    },
    {
        "id": 9,
        "title": "Shopping Cart Total Calculation",
        "tagline": "Compute total price using cumulative sums",
        "category": "array",
        "difficulty": "easy",
        "realWorld": "Shopping Cart Systems in E-commerce\n\nUsed in e-commerce platforms to calculate the total price dynamically as users add items to their shopping cart.",
        "icon": "fa-solid fa-cart-shopping",
        "description": "Given an array of item prices, return the running total at each step. This helps simulate how a shopping cart total updates as items are added.",
        "statement": "Given an array <strong>prices</strong>, return a new array where each element at index <strong>i</strong> represents the sum of elements from index 0 to i (inclusive).\n\nFor example:\n- [1,2,3,4] -> [1,3,6,10]\n- [5,10,15] -> [5,15,30]",
        "examples": [
            {
                "input": "[1,2,3,4]",
                "output": "[1,3,6,10]"
            },
            {
                "input": "[5,10,15]",
                "output": "[5,15,30]"
            },
            {
                "input": "[2,2,2,2]",
                "output": "[2,4,6,8]"
            },
            {
                "input": "[10]",
                "output": "[10]"
            }
        ],
        "template": "function runningTotal(prices) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            1,
            2,
            3,
            4
        ],
        "animSteps": [],
        "externalLink": "https://leetcode.com/problems/running-sum-of-1d-array/",
        "externalPlatform": "leetcode",
        "slug": "shopping-cart-total-calculation"
    },
    {
        "id": 10,
        "title": "Add Binary",
        "tagline": "Add two binary strings bit by bit",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Binary Adder in Digital Circuits / Calculators\n\nIn every computer, mobile phone, and calculator, when you perform any addition (even 5 + 7), the processor actually adds numbers in binary (0s and 1s) internally.\n\nPractical Example:\nImagine you are designing a simple calculator app.\nA user wants to add two binary numbers:\nFirst number: 1011 (which is 11 in decimal)\nSecond number: 1101 (which is 13 in decimal)\nThe app must return the correct binary sum: \"11000\"\nThis is exactly what LeetCode 67 asks you to implement — simulating how a computer’s Arithmetic Logic Unit (ALU) adds two binary numbers bit by bit.\n\nAnother Everyday Example:\nWhen your phone’s battery percentage is calculated\nWhen data packets are transmitted over network (error checking uses binary addition)\nIn digital clocks or electronic devices that perform internal calculations using binary",
        "icon": "fa-solid fa-plus",
        "description": "Given two binary strings a and b, return their sum as a binary string.",
        "statement": "Given two binary strings <strong>a</strong> and <strong>b</strong>, return their sum as a binary string.\n\nFor example:\n- a = \"11\", b = \"1\" -> \"100\"\n- a = \"1010\", b = \"1011\" -> \"10101\"",
        "examples": [
            {
                "input": "a = \"11\", b = \"1\"",
                "output": "\"100\""
            },
            {
                "input": "a = \"1010\", b = \"1011\"",
                "output": "\"10101\""
            },
            {
                "input": "a = \"0\", b = \"0\"",
                "output": "\"0\""
            }
        ],
        "template": "function addBinary(a, b) {\n  // Your code here\n}",
        "animType": "string",
        "animData": [
            "11",
            "1"
        ],
        "animSteps": [],
        "externalLink": "https://leetcode.com/problems/add-binary/",
        "externalPlatform": "leetcode",
        "slug": "add-binary"
    }
];

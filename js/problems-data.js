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
        "id": 4,
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
    }
];

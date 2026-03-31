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
    }
];

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
        "description": "Imagine a 10GB disk: you delete two 1GB movies, creating two separate gaps. Defragmentation compacts data to group free space.",
        "statement": "Move all 0s to the end of the array in-place, keeping order.",
        "externalLink": "https://leetcode.com/problems/move-zeroes/",
        "externalPlatform": "leetcode",
        "slug": "move-zeroes"
    },
    {
        "id": 2,
        "title": "Reverse Linked List",
        "tagline": "Reverse pointer directions in a chain",
        "category": "linked-list",
        "difficulty": "easy",
        "realWorld": "Linux kernel uses linked lists.",
        "icon": "fa-solid fa-link",
        "description": "Reverse linked list using pointers.",
        "statement": "Reverse a singly linked list.",
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
        "title": "Valid Parentheses",
        "tagline": "Validate nested syntax with a stack",
        "category": "stack-queue",
        "difficulty": "easy",
        "realWorld": "Used in compilers for syntax checking.",
        "icon": "fa-solid fa-layer-group",
        "description": "Use stack to match brackets.",
        "statement": "Check if parentheses are valid.",
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
        "realWorld": "OS schedulers manage tasks with cooldowns.",
        "icon": "fa-solid fa-microchip",
        "description": "Arrange tasks to minimize idle time with cooldown constraints.",
        "statement": "Find minimum time to finish all tasks with cooldown.",
        "externalLink": "https://leetcode.com/problems/task-scheduler/",
        "externalPlatform": "leetcode",
        "slug": "task-scheduler"
    },
    {
        "id": 5,
        "title": "Excel Sheet Column Title",
        "tagline": "Convert column numbers to Excel labels",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Used in Excel column naming systems.",
        "icon": "fa-solid fa-table",
        "description": "Convert numbers to Excel column titles using base-26.",
        "statement": "Return Excel column title.",
        "externalLink": "https://leetcode.com/problems/excel-sheet-column-title/",
        "externalPlatform": "leetcode",
        "slug": "excel-sheet-column-title"
    }
];
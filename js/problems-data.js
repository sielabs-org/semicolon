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
        "description": "Imagine a 10GB disk: you delete two 1GB movies, creating two separate 1GB gaps. Now you download one 2GB movie, so the OS may split it across both gaps.",
        "statement": "Move all 0s to the end of the array in-place, keeping the relative order of non-zero elements.",
        "examples": [
            { "input": "[0,1,0,3,12]", "output": "[1,3,12,0,0]" }
        ],
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
        "realWorld": "Linux kernel uses doubly-linked lists everywhere.",
        "icon": "fa-solid fa-link",
        "description": "Reversing a linked list requires changing pointer directions carefully.",
        "statement": "Reverse a singly linked list.",
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
        "realWorld": "Compilers use stack to validate brackets.",
        "icon": "fa-solid fa-layer-group",
        "description": "Use stack to match opening and closing brackets.",
        "statement": "Check if brackets are valid.",
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
        "description": "Arrange tasks with cooldown intervals to minimize idle time.",
        "statement": "Find minimum time to finish tasks with cooldown.",
        "externalLink": "https://leetcode.com/problems/task-scheduler/",
        "externalPlatform": "leetcode",
        "slug": "task-scheduler"
    },
    {
        "id": 5,
        "title": "Detect Capital",
        "tagline": "Validate word capitalization patterns",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Microsoft Word & Grammarly validate capitalization.",
        "icon": "fa-solid fa-font",
        "description": "Check if a word follows valid capitalization rules.",
        "statement": "Return true if capitalization is correct.",
        "externalLink": "https://leetcode.com/problems/detect-capital/",
        "externalPlatform": "leetcode",
        "slug": "detect-capital"
    },
    {
        "id": 6,
        "title": "Excel Sheet Column Title",
        "tagline": "Convert numbers to Excel column labels",
        "category": "string",
        "difficulty": "easy",
        "realWorld": "Used in Excel column naming systems.",
        "icon": "fa-solid fa-table",
        "description": "Convert number to Excel column title using base-26 logic.",
        "statement": "Return Excel column title from number.",
        "externalLink": "https://leetcode.com/problems/excel-sheet-column-title/",
        "externalPlatform": "leetcode",
        "slug": "excel-sheet-column-title"
    }
];
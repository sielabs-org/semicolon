// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Update the JSON files in problems/ instead and run:
// node scripts/build.js

const PROBLEMS = [
    {
        "id": 1,
        "title": "Two Sum",
        "tagline": "Find checkout pair totaling a target",
        "category": "hashmap",
        "difficulty": "easy",
        "realWorld": "Payment gateways — Stripe validates cart totals",
        "icon": "fa-solid fa-cart-shopping",
        "description": "Given an array of prices and a target total, find the two items whose prices add up to the target. This mirrors how payment processors validate itemized receipts.",
        "statement": "Given an array <strong>nums</strong> and an integer <strong>target</strong>, return indices of the two numbers that add up to <strong>target</strong>.",
        "examples": [
            {
                "input": "nums = [2,7,11,15], target = 9",
                "output": "[0, 1]"
            },
            {
                "input": "nums = [3,2,4], target = 6",
                "output": "[1, 2]"
            }
        ],
        "template": "function twoSum(nums, target) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            2,
            7,
            11,
            15
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Target = 9. Checking pairs..."
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Look at nums[0]=2, need 7"
            },
            {
                "type": "highlight",
                "indices": [
                    0,
                    1
                ],
                "msg": "nums[0]+nums[1] = 2+7 = 9 ✓"
            },
            {
                "type": "found",
                "indices": [
                    0,
                    1
                ],
                "msg": "Found! Return [0, 1]"
            }
        ],
        "externalLink": "https://leetcode.com/problems/two-sum/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 2,
        "title": "Move Zeroes",
        "tagline": "Compact active containers to front",
        "category": "fragmentation",
        "difficulty": "easy",
        "realWorld": "Kubernetes — compacts running pods, removes dead ones",
        "icon": "fa-brands fa-docker",
        "description": "Move all non-zero elements to the front while maintaining order. This is how container orchestrators compact active workloads.",
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
                "msg": "Read 1 → swap with pos 0"
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
                "msg": "Read 3 → swap with pos 1"
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
                "msg": "Read 12 → swap with pos 2"
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
        "externalPlatform": "leetcode"
    },
    {
        "id": 3,
        "title": "Best Time to Buy and Sell Stock",
        "tagline": "Maximize trading profit",
        "category": "array",
        "difficulty": "easy",
        "realWorld": "Stock exchanges — Robinhood calculates max profit windows",
        "icon": "fa-solid fa-chart-line",
        "description": "Find the maximum profit from buying low and selling high — the core of any trading algorithm.",
        "statement": "Given <strong>prices[i]</strong> is the price on day i, find the max profit from one buy and one sell.",
        "examples": [
            {
                "input": "[7,1,5,3,6,4]",
                "output": "5 (buy at 1, sell at 6)"
            }
        ],
        "template": "function maxProfit(prices) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            7,
            1,
            5,
            3,
            6,
            4
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Track min price and max profit"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Day 0: price=7, min=7, profit=0"
            },
            {
                "type": "found",
                "indices": [
                    1
                ],
                "msg": "Day 1: price=1, new min! min=1"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "Day 2: price=5, profit=4"
            },
            {
                "type": "highlight",
                "indices": [
                    4
                ],
                "msg": "Day 4: price=6, profit=5 ← MAX"
            },
            {
                "type": "found",
                "indices": [
                    1,
                    4
                ],
                "msg": "Buy day 1, sell day 4 → profit=5"
            }
        ],
        "externalLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 4,
        "title": "Contains Duplicate",
        "tagline": "Detect duplicate log entries",
        "category": "hashmap",
        "difficulty": "easy",
        "realWorld": "Log aggregation — Datadog deduplicates log entries",
        "icon": "fa-solid fa-database",
        "description": "Use a HashSet to detect if any value appears twice — exactly how log deduplication works.",
        "statement": "Return <strong>true</strong> if any value appears at least twice in the array.",
        "examples": [
            {
                "input": "[1,2,3,1]",
                "output": "true"
            },
            {
                "input": "[1,2,3,4]",
                "output": "false"
            }
        ],
        "template": "function containsDuplicate(nums) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            1,
            2,
            3,
            1
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "HashSet approach: track seen values"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "1 → not in set, add it. Set: {1}"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "2 → not in set, add it. Set: {1,2}"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "3 → not in set. Set: {1,2,3}"
            },
            {
                "type": "found",
                "indices": [
                    3
                ],
                "msg": "1 → ALREADY IN SET! Return true"
            }
        ],
        "externalLink": "https://leetcode.com/problems/contains-duplicate/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 5,
        "title": "Reverse Linked List",
        "tagline": "Undo browser history chain",
        "category": "linked-list",
        "difficulty": "easy",
        "realWorld": "Browser back button — Chrome reverses navigation history",
        "icon": "fa-brands fa-chrome",
        "description": "Reverse a singly linked list in-place. This is how browser navigation history gets reversed for the back button.",
        "statement": "Given the <strong>head</strong> of a singly linked list, reverse the list and return the reversed list.",
        "examples": [
            {
                "input": "1→2→3→4→5",
                "output": "5→4→3→2→1"
            }
        ],
        "template": "function reverseList(head) {\n  // Your code here\n}",
        "animType": "linked-list",
        "animData": [
            1,
            2,
            3,
            4,
            5
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "prev=null, curr=1"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Detach 1, point it to null"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "Detach 2, point it to 1"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "Detach 3, point it to 2"
            },
            {
                "type": "highlight",
                "indices": [
                    3
                ],
                "msg": "Detach 4, point it to 3"
            },
            {
                "type": "highlight",
                "indices": [
                    4
                ],
                "msg": "Detach 5, point it to 4"
            },
            {
                "type": "found",
                "indices": [
                    4,
                    3,
                    2,
                    1,
                    0
                ],
                "msg": "Done: 5→4→3→2→1"
            }
        ],
        "externalLink": "https://leetcode.com/problems/reverse-linked-list/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 6,
        "title": "Merge Two Sorted Lists",
        "tagline": "Merge sorted DB result sets",
        "category": "linked-list",
        "difficulty": "easy",
        "realWorld": "Databases — PostgreSQL merges sorted index scans",
        "icon": "fa-solid fa-database",
        "description": "Merge two sorted linked lists into one sorted list — the merge step in merge sort, used in DB query execution.",
        "statement": "Merge two sorted linked lists and return a sorted merged list.",
        "examples": [
            {
                "input": "1→2→4, 1→3→4",
                "output": "1→1→2→3→4→4"
            }
        ],
        "template": "function mergeTwoLists(l1, l2) {\n  // Your code here\n}",
        "animType": "linked-list",
        "animData": [
            1,
            2,
            4
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Compare heads of both lists"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "L1:1 vs L2:1 → take L1:1"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "L2:1 → append"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "L1:2 vs L2:3 → take 2"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "L2:3 → append, then L1:4, L2:4"
            },
            {
                "type": "found",
                "indices": [
                    0,
                    1,
                    2
                ],
                "msg": "Merged: 1→1→2→3→4→4"
            }
        ],
        "externalLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 7,
        "title": "Detect Cycle in Linked List",
        "tagline": "Detect infinite redirect loops",
        "category": "linked-list",
        "difficulty": "medium",
        "realWorld": "Web crawlers — Googlebot detects redirect loops",
        "icon": "fa-brands fa-google",
        "description": "Floyd's cycle detection: use fast and slow pointers to detect loops. Web crawlers use this to avoid infinite URL redirects.",
        "statement": "Given <strong>head</strong>, determine if the linked list has a cycle in it.",
        "examples": [
            {
                "input": "3→2→0→-4→(back to 2)",
                "output": "true"
            }
        ],
        "template": "function hasCycle(head) {\n  // Your code here\n}",
        "animType": "linked-list",
        "animData": [
            3,
            2,
            0,
            -4
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Floyd's: slow moves 1, fast moves 2"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "slow=3, fast=3"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "slow=2, fast=0"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "slow=0, fast=2 (looped!)"
            },
            {
                "type": "found",
                "indices": [
                    1,
                    3
                ],
                "msg": "They meet at node 2 → cycle exists!"
            }
        ],
        "externalLink": "https://leetcode.com/problems/detect-cycle-in-linked-list/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 8,
        "title": "Binary Tree Inorder Traversal",
        "tagline": "Render file system tree",
        "category": "tree",
        "difficulty": "easy",
        "realWorld": "File explorers — VS Code renders directory trees",
        "icon": "fa-solid fa-folder-tree",
        "description": "Traverse a binary tree in-order (left, root, right). File systems use tree traversal to list nested directories.",
        "statement": "Given the <strong>root</strong> of a binary tree, return the inorder traversal.",
        "examples": [
            {
                "input": "root = [1,null,2,3]",
                "output": "[1,3,2]"
            }
        ],
        "template": "function inorderTraversal(root) {\n  // Your code here\n}",
        "animType": "tree",
        "animData": {
            "val": 4,
            "left": {
                "val": 2,
                "left": {
                    "val": 1
                },
                "right": {
                    "val": 3
                }
            },
            "right": {
                "val": 6,
                "left": {
                    "val": 5
                },
                "right": {
                    "val": 7
                }
            }
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "Inorder: Left → Root → Right"
            },
            {
                "type": "visit",
                "node": 1,
                "msg": "Visit leftmost: 1"
            },
            {
                "type": "visit",
                "node": 2,
                "msg": "Visit parent: 2"
            },
            {
                "type": "visit",
                "node": 3,
                "msg": "Visit right: 3"
            },
            {
                "type": "visit",
                "node": 4,
                "msg": "Visit root: 4"
            },
            {
                "type": "visit",
                "node": 5,
                "msg": "Visit left: 5"
            },
            {
                "type": "visit",
                "node": 6,
                "msg": "Visit parent: 6"
            },
            {
                "type": "visit",
                "node": 7,
                "msg": "Visit right: 7"
            },
            {
                "type": "msg",
                "text": "Result: [1, 2, 3, 4, 5, 6, 7]"
            }
        ],
        "externalLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 9,
        "title": "Maximum Depth of Binary Tree",
        "tagline": "Calculate DOM depth",
        "category": "tree",
        "difficulty": "easy",
        "realWorld": "Browsers — Chromium checks DOM nesting depth limits",
        "icon": "fa-brands fa-chrome",
        "description": "Find the maximum depth of a tree — browsers use this to limit deeply nested HTML elements.",
        "statement": "Given a binary tree <strong>root</strong>, return its maximum depth.",
        "examples": [
            {
                "input": "root = [3,9,20,null,null,15,7]",
                "output": "3"
            }
        ],
        "template": "function maxDepth(root) {\n  // Your code here\n}",
        "animType": "tree",
        "animData": {
            "val": 3,
            "left": {
                "val": 9
            },
            "right": {
                "val": 20,
                "left": {
                    "val": 15
                },
                "right": {
                    "val": 7
                }
            }
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "DFS to find max depth"
            },
            {
                "type": "visit",
                "node": 3,
                "msg": "Root depth=1"
            },
            {
                "type": "visit",
                "node": 9,
                "msg": "Left leaf depth=2"
            },
            {
                "type": "visit",
                "node": 20,
                "msg": "Right child depth=2"
            },
            {
                "type": "visit",
                "node": 15,
                "msg": "Depth=3"
            },
            {
                "type": "visit",
                "node": 7,
                "msg": "Depth=3 → max depth = 3"
            },
            {
                "type": "msg",
                "text": "Maximum depth: 3"
            }
        ],
        "externalLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 10,
        "title": "Validate BST",
        "tagline": "Validate database index ordering",
        "category": "tree",
        "difficulty": "medium",
        "realWorld": "MySQL — validates B-Tree index integrity",
        "icon": "fa-solid fa-database",
        "description": "Check if a binary tree satisfies BST property. Databases validate their B-Tree indexes the same way.",
        "statement": "Determine if a binary tree is a valid <strong>binary search tree</strong>.",
        "examples": [
            {
                "input": "root = [5,1,4,null,null,3,6]",
                "output": "false (4 < 5 but is right child)"
            }
        ],
        "template": "function isValidBST(root) {\n  // Your code here\n}",
        "animType": "tree",
        "animData": {
            "val": 5,
            "left": {
                "val": 1
            },
            "right": {
                "val": 4,
                "left": {
                    "val": 3
                },
                "right": {
                    "val": 6
                }
            }
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "Check: left < node < right for all nodes"
            },
            {
                "type": "visit",
                "node": 5,
                "msg": "Root=5, range: (-∞, ∞)"
            },
            {
                "type": "visit",
                "node": 1,
                "msg": "Left=1, range: (-∞, 5) ✓"
            },
            {
                "type": "visit",
                "node": 4,
                "msg": "Right=4, range: (5, ∞) — 4 < 5 ✗!"
            },
            {
                "type": "msg",
                "text": "INVALID BST! Node 4 violates constraint."
            }
        ],
        "externalLink": "https://leetcode.com/problems/validate-bst/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 11,
        "title": "BFS — Level Order Traversal",
        "tagline": "Crawl web pages level by level",
        "category": "tree",
        "difficulty": "medium",
        "realWorld": "Web crawlers — Googlebot uses BFS to crawl links",
        "icon": "fa-brands fa-google",
        "description": "Traverse tree level by level using a queue. Search engines crawl the web using BFS from seed URLs.",
        "statement": "Return the level order traversal of a binary tree (values grouped by level).",
        "examples": [
            {
                "input": "[3,9,20,null,null,15,7]",
                "output": "[[3],[9,20],[15,7]]"
            }
        ],
        "template": "function levelOrder(root) {\n  // Your code here\n}",
        "animType": "tree",
        "animData": {
            "val": 3,
            "left": {
                "val": 9
            },
            "right": {
                "val": 20,
                "left": {
                    "val": 15
                },
                "right": {
                    "val": 7
                }
            }
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "BFS using a queue"
            },
            {
                "type": "visit",
                "node": 3,
                "msg": "Level 0: [3]"
            },
            {
                "type": "visit",
                "node": 9,
                "msg": "Level 1: processing 9"
            },
            {
                "type": "visit",
                "node": 20,
                "msg": "Level 1: [9, 20]"
            },
            {
                "type": "visit",
                "node": 15,
                "msg": "Level 2: processing 15"
            },
            {
                "type": "visit",
                "node": 7,
                "msg": "Level 2: [15, 7]"
            },
            {
                "type": "msg",
                "text": "Result: [[3],[9,20],[15,7]]"
            }
        ],
        "externalLink": "https://leetcode.com/problems/bfs-level-order-traversal/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 12,
        "title": "Number of Islands",
        "tagline": "Detect clusters in a network",
        "category": "graph",
        "difficulty": "medium",
        "realWorld": "AWS — detect isolated VPC network clusters",
        "icon": "fa-brands fa-aws",
        "description": "Count connected components in a 2D grid using DFS/BFS — same as detecting isolated network segments.",
        "statement": "Given a 2D grid of '1' (land) and '0' (water), count the number of islands.",
        "examples": [
            {
                "input": "[\"11110\",\"11010\",\"11000\",\"00000\"]",
                "output": "1"
            }
        ],
        "template": "function numIslands(grid) {\n  // Your code here\n}",
        "animType": "graph",
        "animData": {
            "nodes": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F"
            ],
            "edges": [
                [
                    "A",
                    "B"
                ],
                [
                    "A",
                    "C"
                ],
                [
                    "B",
                    "C"
                ],
                [
                    "D",
                    "E"
                ]
            ]
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "DFS from each unvisited node"
            },
            {
                "type": "visit",
                "node": "A",
                "msg": "Start DFS from A"
            },
            {
                "type": "visit",
                "node": "B",
                "msg": "Visit B (connected to A)"
            },
            {
                "type": "visit",
                "node": "C",
                "msg": "Visit C → Island 1 complete"
            },
            {
                "type": "visit",
                "node": "D",
                "msg": "New DFS from D"
            },
            {
                "type": "visit",
                "node": "E",
                "msg": "Visit E → Island 2 complete"
            },
            {
                "type": "visit",
                "node": "F",
                "msg": "F is alone → Island 3. Total: 3"
            }
        ],
        "externalLink": "https://leetcode.com/problems/number-of-islands/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 13,
        "title": "Course Schedule",
        "tagline": "Resolve package dependencies",
        "category": "graph",
        "difficulty": "medium",
        "realWorld": "npm/pip — topological sort for dependency resolution",
        "icon": "fa-brands fa-npm",
        "description": "Detect cycles in a directed graph. Package managers use topological sort to resolve install order.",
        "statement": "Given <strong>numCourses</strong> and prerequisites, determine if you can finish all courses (no cycles).",
        "examples": [
            {
                "input": "numCourses=2, prereqs=[[1,0]]",
                "output": "true"
            }
        ],
        "template": "function canFinish(numCourses, prerequisites) {\n  // Your code here\n}",
        "animType": "graph",
        "animData": {
            "nodes": [
                "A",
                "B",
                "C",
                "D"
            ],
            "edges": [
                [
                    "A",
                    "B"
                ],
                [
                    "B",
                    "C"
                ],
                [
                    "C",
                    "D"
                ]
            ]
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "Topological sort — detect cycles"
            },
            {
                "type": "visit",
                "node": "A",
                "msg": "Process A (no deps)"
            },
            {
                "type": "visit",
                "node": "B",
                "msg": "Process B (depends on A ✓)"
            },
            {
                "type": "visit",
                "node": "C",
                "msg": "Process C (depends on B ✓)"
            },
            {
                "type": "visit",
                "node": "D",
                "msg": "Process D (depends on C ✓)"
            },
            {
                "type": "msg",
                "text": "No cycle found. Order: A→B→C→D"
            }
        ],
        "externalLink": "https://leetcode.com/problems/course-schedule/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 14,
        "title": "Shortest Path (Dijkstra)",
        "tagline": "Find fastest network route",
        "category": "graph",
        "difficulty": "hard",
        "realWorld": "Google Maps — Dijkstra's for navigation routing",
        "icon": "fa-solid fa-route",
        "description": "Find shortest paths from a source — the core algorithm behind GPS navigation.",
        "statement": "Find the shortest path from source to all nodes in a weighted graph.",
        "examples": [
            {
                "input": "Graph with weighted edges from node 0",
                "output": "Shortest distances array"
            }
        ],
        "template": "function dijkstra(graph, source) {\n  // Your code here\n}",
        "animType": "graph",
        "animData": {
            "nodes": [
                "S",
                "A",
                "B",
                "C",
                "D"
            ],
            "edges": [
                [
                    "S",
                    "A"
                ],
                [
                    "S",
                    "B"
                ],
                [
                    "A",
                    "C"
                ],
                [
                    "B",
                    "C"
                ],
                [
                    "C",
                    "D"
                ]
            ]
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "Dijkstra's algorithm from S"
            },
            {
                "type": "visit",
                "node": "S",
                "msg": "Start: dist[S]=0"
            },
            {
                "type": "visit",
                "node": "A",
                "msg": "Relax S→A, dist=4"
            },
            {
                "type": "visit",
                "node": "B",
                "msg": "Relax S→B, dist=2"
            },
            {
                "type": "visit",
                "node": "C",
                "msg": "Relax B→C, dist=5"
            },
            {
                "type": "visit",
                "node": "D",
                "msg": "Relax C→D, dist=7. Done!"
            }
        ],
        "externalLink": "https://leetcode.com/problems/shortest-path-dijkstra/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 15,
        "title": "Valid Parentheses",
        "tagline": "Validate code syntax brackets",
        "category": "stack-queue",
        "difficulty": "easy",
        "realWorld": "IDEs — VS Code validates bracket matching",
        "icon": "fa-solid fa-code",
        "description": "Use a stack to match opening and closing brackets — exactly how code editors highlight mismatched braces.",
        "statement": "Given a string with '(', ')', '{', '}', '[', ']', determine if the input is valid.",
        "examples": [
            {
                "input": "\"([{}])\"",
                "output": "true"
            },
            {
                "input": "\"(]\"",
                "output": "false"
            }
        ],
        "template": "function isValid(s) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            "(",
            "[",
            "{",
            "}",
            "]",
            ")"
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Stack-based bracket matching"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Push \"(\" → Stack: [\"(\"]"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "Push \"[\" → Stack: [\"(\",\"[\"]"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "Push \"{\" → Stack: [\"(\",\"[\",\"{\"]"
            },
            {
                "type": "found",
                "indices": [
                    3
                ],
                "msg": "\"}\" matches \"{\" → pop. Stack: [\"(\",\"[\"]"
            },
            {
                "type": "found",
                "indices": [
                    4
                ],
                "msg": "\"]\" matches \"[\" → pop. Stack: [\"(\"]"
            },
            {
                "type": "found",
                "indices": [
                    5
                ],
                "msg": "\")\" matches \"(\" → pop. Stack empty ✓"
            }
        ],
        "externalLink": "https://leetcode.com/problems/valid-parentheses/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 16,
        "title": "Min Stack",
        "tagline": "Track min latency in monitoring",
        "category": "stack-queue",
        "difficulty": "medium",
        "realWorld": "Monitoring — Grafana tracks running min/max metrics",
        "icon": "fa-solid fa-gauge",
        "description": "Design a stack that supports getMin in O(1). Monitoring dashboards use similar structures for real-time metrics.",
        "statement": "Design a stack that supports push, pop, top, and retrieving the minimum element in O(1).",
        "examples": [
            {
                "input": "push(-2), push(0), push(-3), getMin()",
                "output": "-3"
            }
        ],
        "template": "class MinStack {\n  constructor() {\n    // Your code here\n  }\n}",
        "animType": "array",
        "animData": [
            -2,
            0,
            -3
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Two stacks: main + min tracker"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Push -2. Min stack: [-2]"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "Push 0. Min stack: [-2] (0 > -2)"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "Push -3. Min stack: [-2, -3]"
            },
            {
                "type": "found",
                "indices": [
                    2
                ],
                "msg": "getMin() → -3 in O(1)!"
            }
        ],
        "externalLink": "https://leetcode.com/problems/min-stack/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 17,
        "title": "LRU Cache",
        "tagline": "Build a Redis-like cache",
        "category": "hashmap",
        "difficulty": "hard",
        "realWorld": "Redis — LRU eviction policy for in-memory cache",
        "icon": "fa-solid fa-memory",
        "description": "Implement a Least Recently Used cache with O(1) get/put. Redis uses this exact eviction strategy.",
        "statement": "Implement an LRU cache with <strong>get(key)</strong> and <strong>put(key, value)</strong>, both in O(1).",
        "examples": [
            {
                "input": "capacity=2, put(1,1), put(2,2), get(1), put(3,3)",
                "output": "get(2) returns -1 (evicted)"
            }
        ],
        "template": "class LRUCache {\n  constructor(capacity) {\n    // Your code here\n  }\n}",
        "animType": "array",
        "animData": [
            "1:A",
            "2:B"
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "HashMap + Doubly Linked List"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "put(1,A) → Cache: [1:A]"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "put(2,B) → Cache: [1:A, 2:B]"
            },
            {
                "type": "found",
                "indices": [
                    0
                ],
                "msg": "get(1) → move to front: [2:B, 1:A]"
            },
            {
                "type": "swap",
                "indices": [
                    0,
                    1
                ],
                "values": [
                    "3:C",
                    "1:A"
                ],
                "msg": "put(3,C) → evict 2:B (LRU)"
            }
        ],
        "externalLink": "https://leetcode.com/problems/lru-cache/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 18,
        "title": "Group Anagrams",
        "tagline": "Cluster similar search queries",
        "category": "hashmap",
        "difficulty": "medium",
        "realWorld": "Search engines — Google clusters similar queries together",
        "icon": "fa-brands fa-google",
        "description": "Group strings that are anagrams of each other using a hash map.",
        "statement": "Given an array of strings, group anagrams together.",
        "examples": [
            {
                "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
                "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]"
            }
        ],
        "template": "function groupAnagrams(strs) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            "eat",
            "tea",
            "tan",
            "ate",
            "nat",
            "bat"
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Sort each word as key, group by key"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "\"eat\" → key \"aet\""
            },
            {
                "type": "found",
                "indices": [
                    1
                ],
                "msg": "\"tea\" → key \"aet\" → same group!"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "\"tan\" → key \"ant\""
            },
            {
                "type": "found",
                "indices": [
                    3
                ],
                "msg": "\"ate\" → key \"aet\" → group 1"
            },
            {
                "type": "found",
                "indices": [
                    4
                ],
                "msg": "\"nat\" → key \"ant\" → group 2"
            },
            {
                "type": "highlight",
                "indices": [
                    5
                ],
                "msg": "\"bat\" → key \"abt\" → group 3"
            }
        ],
        "externalLink": "https://leetcode.com/problems/group-anagrams/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 19,
        "title": "Binary Search",
        "tagline": "Git bisect to find the bad commit",
        "category": "array",
        "difficulty": "easy",
        "realWorld": "Git — 'git bisect' uses binary search to find bugs",
        "icon": "fa-brands fa-git-alt",
        "description": "Search a sorted array in O(log n). Git bisect uses binary search to pinpoint the exact commit that introduced a bug.",
        "statement": "Given a sorted array and a target, return the index or -1.",
        "examples": [
            {
                "input": "[-1,0,3,5,9,12], target=9",
                "output": "4"
            }
        ],
        "template": "function search(nums, target) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            -1,
            0,
            3,
            5,
            9,
            12
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Binary search for target=9"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "mid=3, 3<9 → search right"
            },
            {
                "type": "highlight",
                "indices": [
                    4
                ],
                "msg": "mid=9, 9==9 → FOUND!"
            },
            {
                "type": "found",
                "indices": [
                    4
                ],
                "msg": "Return index 4"
            }
        ],
        "externalLink": "https://leetcode.com/problems/binary-search/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 20,
        "title": "Merge Intervals",
        "tagline": "Merge overlapping calendar events",
        "category": "array",
        "difficulty": "medium",
        "realWorld": "Google Calendar — merges overlapping meetings",
        "icon": "fa-solid fa-calendar",
        "description": "Merge overlapping intervals. Calendar apps use this to consolidate back-to-back meetings.",
        "statement": "Merge all overlapping intervals and return non-overlapping intervals.",
        "examples": [
            {
                "input": "[[1,3],[2,6],[8,10],[15,18]]",
                "output": "[[1,6],[8,10],[15,18]]"
            }
        ],
        "template": "function merge(intervals) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            "1-3",
            "2-6",
            "8-10",
            "15-18"
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Sort by start, merge overlapping"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "[1,3] — start new interval"
            },
            {
                "type": "found",
                "indices": [
                    0,
                    1
                ],
                "msg": "[2,6] overlaps [1,3] → merge to [1,6]"
            },
            {
                "type": "highlight",
                "indices": [
                    2
                ],
                "msg": "[8,10] — no overlap, new interval"
            },
            {
                "type": "highlight",
                "indices": [
                    3
                ],
                "msg": "[15,18] — no overlap. Done: 3 intervals"
            }
        ],
        "externalLink": "https://leetcode.com/problems/merge-intervals/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 21,
        "title": "Implement Queue using Stacks",
        "tagline": "Message queue from LIFO storage",
        "category": "stack-queue",
        "difficulty": "easy",
        "realWorld": "Message queues — building FIFO from LIFO primitives",
        "icon": "fa-solid fa-envelope",
        "description": "Implement a first-in-first-out queue using two stacks.",
        "statement": "Implement a FIFO queue using only two stacks.",
        "examples": [
            {
                "input": "push(1), push(2), peek(), pop()",
                "output": "peek=1, pop=1"
            }
        ],
        "template": "class MyQueue {\n  constructor() {\n    // Your code here\n  }\n}",
        "animType": "array",
        "animData": [
            1,
            2,
            3
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Two stacks: inbox and outbox"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Push 1 to inbox: [1]"
            },
            {
                "type": "highlight",
                "indices": [
                    1
                ],
                "msg": "Push 2 to inbox: [1,2]"
            },
            {
                "type": "swap",
                "indices": [
                    0,
                    1
                ],
                "values": [
                    2,
                    1
                ],
                "msg": "Pop → flip to outbox: [2,1]"
            },
            {
                "type": "found",
                "indices": [
                    1
                ],
                "msg": "Pop from outbox → returns 1 (FIFO)"
            }
        ],
        "externalLink": "https://leetcode.com/problems/implement-queue-using-stacks/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 22,
        "title": "Lowest Common Ancestor",
        "tagline": "Find nearest shared directory",
        "category": "tree",
        "difficulty": "medium",
        "realWorld": "File systems — find nearest shared parent directory",
        "icon": "fa-solid fa-folder-tree",
        "description": "Find the LCA of two nodes in a BST — like finding the closest shared parent folder.",
        "statement": "Find the lowest common ancestor of two given nodes in a BST.",
        "examples": [
            {
                "input": "root=[6,2,8,0,4,7,9], p=2, q=8",
                "output": "6"
            }
        ],
        "template": "function lowestCommonAncestor(root, p, q) {\n  // Your code here\n}",
        "animType": "tree",
        "animData": {
            "val": 6,
            "left": {
                "val": 2,
                "left": {
                    "val": 0
                },
                "right": {
                    "val": 4
                }
            },
            "right": {
                "val": 8,
                "left": {
                    "val": 7
                },
                "right": {
                    "val": 9
                }
            }
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "Find LCA of 2 and 8"
            },
            {
                "type": "visit",
                "node": 6,
                "msg": "Root=6. p=2 is left, q=8 is right"
            },
            {
                "type": "msg",
                "text": "Split! 6 is the LCA since they diverge here"
            },
            {
                "type": "visit",
                "node": 2,
                "msg": "2 is in left subtree"
            },
            {
                "type": "visit",
                "node": 8,
                "msg": "8 is in right subtree"
            },
            {
                "type": "msg",
                "text": "Lowest Common Ancestor = 6"
            }
        ],
        "externalLink": "https://leetcode.com/problems/lowest-common-ancestor/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 23,
        "title": "Clone Graph",
        "tagline": "Deep copy a microservice network",
        "category": "graph",
        "difficulty": "medium",
        "realWorld": "Infrastructure — cloning service dependency graphs for staging",
        "icon": "fa-solid fa-clone",
        "description": "Deep copy a graph — like cloning an entire microservice architecture for a staging environment.",
        "statement": "Given a reference to a node in a connected undirected graph, return a deep copy.",
        "examples": [
            {
                "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
                "output": "Deep copy of graph"
            }
        ],
        "template": "function cloneGraph(node) {\n  // Your code here\n}",
        "animType": "graph",
        "animData": {
            "nodes": [
                "1",
                "2",
                "3",
                "4"
            ],
            "edges": [
                [
                    "1",
                    "2"
                ],
                [
                    "2",
                    "3"
                ],
                [
                    "3",
                    "4"
                ],
                [
                    "4",
                    "1"
                ]
            ]
        },
        "animSteps": [
            {
                "type": "msg",
                "text": "BFS + HashMap to track clones"
            },
            {
                "type": "visit",
                "node": "1",
                "msg": "Clone node 1, add to map"
            },
            {
                "type": "visit",
                "node": "2",
                "msg": "Clone node 2, link to clone-1"
            },
            {
                "type": "visit",
                "node": "3",
                "msg": "Clone node 3, link to clone-2"
            },
            {
                "type": "visit",
                "node": "4",
                "msg": "Clone node 4, link clone-3 & clone-1"
            },
            {
                "type": "msg",
                "text": "Graph fully cloned!"
            }
        ],
        "externalLink": "https://leetcode.com/problems/clone-graph/",
        "externalPlatform": "leetcode"
    },
    {
        "id": 24,
        "title": "Product of Array Except Self",
        "tagline": "Calculate feature importance scores",
        "category": "array",
        "difficulty": "medium",
        "realWorld": "ML pipelines — computing feature importance without self-bias",
        "icon": "fa-solid fa-brain",
        "description": "For each element, calculate the product of all other elements without using division.",
        "statement": "Given integer array <strong>nums</strong>, return array where answer[i] is the product of all elements except nums[i].",
        "examples": [
            {
                "input": "[1,2,3,4]",
                "output": "[24,12,8,6]"
            }
        ],
        "template": "function productExceptSelf(nums) {\n  // Your code here\n}",
        "animType": "array",
        "animData": [
            1,
            2,
            3,
            4
        ],
        "animSteps": [
            {
                "type": "msg",
                "text": "Left pass then right pass"
            },
            {
                "type": "highlight",
                "indices": [
                    0
                ],
                "msg": "Left prefix: [1, 1, 2, 6]"
            },
            {
                "type": "highlight",
                "indices": [
                    3
                ],
                "msg": "Right suffix: [24,12,4,1]"
            },
            {
                "type": "found",
                "indices": [
                    0,
                    1,
                    2,
                    3
                ],
                "msg": "Multiply: [24,12,8,6]"
            }
        ],
        "externalLink": "https://leetcode.com/problems/product-of-array-except-self/",
        "externalPlatform": "leetcode"
    }
];

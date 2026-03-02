// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Update JSON files in problems/ and run: node scripts/build.js

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
        "externalPlatform": "leetcode",
        "slug": "two-sum"
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
        "externalPlatform": "leetcode",
        "slug": "move-zeroes"
    },
];

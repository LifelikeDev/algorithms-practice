// --------------- Challenge 1 -----------------

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive numbers

// ---- Solution ----
const findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let mostCounts = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 0 ? (count = 0) : count++;

    if (count > mostCounts) mostCounts = count;
  }

  return mostCounts;
};

// --------------- Challenge 2 -----------------
// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// ---- Solution ----
const findNumbers = function (nums) {
  let total = 0;

  for (i = 0; i < nums.length; i++) {
    nums[i].toString().length % 2 === 0 ? total++ : total;
  }

  return total;
};

// --------------- Challenge 3 -----------------
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// ---- Solution ----
const sortedSquares = function (nums) {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};

// --------------- Challenge 4 -----------------

// ---- Solution ----

// --------------- Challenge 5 -----------------

// ---- Solution ----

// --------------- Challenge 6 -----------------

// ---- Solution ----

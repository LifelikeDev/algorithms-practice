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
/* Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function. */

/* Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4] */

// ---- Solution ----
function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.length = arr.length - 1;
      arr.splice(i, 0, 0);
      i++;
    }
  }
  return arr;
}

// --------------- Challenge 5 -----------------
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// ---- Solution ----
function merge(nums1, m, nums2, n) {
  // m represents the number of elements in nums1 that has to be merged with n
  // n represents the available space in nums1 that has to filled with nums2; also represents the length of nums2

  // splice nums1, begin writing from index m, deleting n number of elements while spreading the array nums2 in nums1
  nums1.splice(m, n, ...nums2);
  // sort the array into ascending order
  nums1.sort((a, b) => a - b);
}

// --------------- Challenge 6 -----------------

// ---- Solution ----

// --------------- Challenge 7 -----------------

// ---- Solution ----

// --------------- Challenge 8 -----------------

// ---- Solution ----

// --------------- Challenge 9 -----------------

// ---- Solution ----

// --------------- Challenge 10 -----------------

// ---- Solution ----

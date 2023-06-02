/*
Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
  
    let closestSum = Infinity; // Initialize the closest sum with a large value
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === target) {
          return sum; // Exact match found, return the sum
        }
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; // Update closestSum if the current sum is closer to the target
        }
  
        if (sum < target) {
          left++; // Increment left pointer if the sum is less than the target
        } else {
          right--; // Decrement right pointer if the sum is greater than the target
        }
      }
    }
  
    return closestSum;
  }
  
  // Example usage:
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // Output: 2
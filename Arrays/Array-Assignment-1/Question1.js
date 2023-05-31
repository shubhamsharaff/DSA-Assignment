// Two Sum
function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    /*check if the complement exists as a key in the
       numIndices object using the in operator
      */
    if (complement in numIndices) {
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }
  // it will return empty array if elements sum is not equal to target
  return [];
}

// Example Array
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

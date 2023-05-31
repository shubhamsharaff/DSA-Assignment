function containsDuplicate(nums) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    } else {
      numSet.add(nums[i]);
    }
  }

  return false;
}

// Example usage:
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true

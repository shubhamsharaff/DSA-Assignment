function findErrorNums(nums) {
  const n = nums.length;
  let duplicate = -1;
  let missing = -1;

  // Place each number in its correct position
  for (let i = 0; i < n; i++) {
    while (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
      // Swap the number to its correct position
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  // Find the duplicate and missing numbers
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      duplicate = nums[i];
      missing = i + 1;
      break;
    }
  }

  return [duplicate, missing];
}

// Example usage:
const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3]

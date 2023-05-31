function moveZeroes(nums) {
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  while (insertIndex < nums.length) {
    nums[insertIndex] = 0;
    insertIndex++;
  }
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

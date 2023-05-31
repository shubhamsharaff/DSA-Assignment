function plusOne(digits) {
  const n = digits.length;

  // Start from the least significant digit
  for (let i = n - 1; i >= 0; i--) {
    digits[i] += 1;

    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
}

// Example usage:
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]

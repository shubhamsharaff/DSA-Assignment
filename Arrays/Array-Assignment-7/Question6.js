function stringRotation(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const concatenated = s + s;
  
    return concatenated.includes(goal);
  }
  
  // Test case
  console.log(stringRotation("abcde", "cdeab")); // Output: true
  console.log(stringRotation("abcde", "abced")); // Output: false
  console.log(stringRotation("hello", "lohel")); // Output: true
  

  function isStrobogrammatic(num) {
    const map = new Map([
      ['0', '0'],
      ['1', '1'],
      ['6', '9'],
      ['8', '8'],
      ['9', '6']
    ]);
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftChar = num.charAt(left);
      const rightChar = num.charAt(right);
  
      if (!map.has(leftChar) || map.get(leftChar) !== rightChar) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Test case
  console.log(isStrobogrammatic("69")); // Output: true
  console.log(isStrobogrammatic("88")); // Output: true
  console.log(isStrobogrammatic("962")); // Output: false
  
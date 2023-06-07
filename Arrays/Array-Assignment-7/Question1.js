function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  const mappedChars = new Set();

  for (let i = 0; i < s.length; i++) {
    const charS = s.charAt(i);
    const charT = t.charAt(i);

    if (!map.has(charS)) {
      if (mappedChars.has(charT)) {
        return false;
      }
      map.set(charS, charT);
      mappedChars.add(charT);
    } else {
      if (map.get(charS) !== charT) {
        return false;
      }
    }
  }

  return true;
}

// Test cases
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("paper", "title")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false

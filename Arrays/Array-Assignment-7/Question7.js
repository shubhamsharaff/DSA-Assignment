function processBackspaces(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === '#') {
        stack.pop();
      } else {
        stack.push(str.charAt(i));
      }
    }
  
    return stack.join('');
  }
  
  function backspaceCompare(s, t) {
    return processBackspaces(s) === processBackspaces(t);
  }
  
  // Test case
  console.log(backspaceCompare("ab#c", "ad#c")); // Output: true
  console.log(backspaceCompare("ab##", "c#d#")); // Output: true
  console.log(backspaceCompare("a##c", "#a#c")); // Output: true
  console.log(backspaceCompare("a#c", "b")); // Output: false
  
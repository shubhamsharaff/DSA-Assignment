function reverse(s) {
    const words = s.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
  
    return words.join(' ');
  }
  
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  }
  
  // Test case
  console.log(reverse("Let's take LeetCode contest")); // Output: "s'teL ekat edoCteeL tsetnoc"
  console.log(reverse("Hello World")); // Output: "olleH dlroW"
  console.log(reverse("I love JavaScript")); // Output: "I evol tpircSavaJ"
  
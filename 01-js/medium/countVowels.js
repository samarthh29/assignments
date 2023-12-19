/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running

  https://chat.openai.com/share/c6d7681a-51ef-46ea-a992-e6886b55ecca
*/

function countVowels(str) {
      // Array of vowels to check against
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Convert the input string to lowercase to consider both uppercase and lowercase vowels
  const lowerCaseStr = str.toLowerCase();

  // Use Array.from to convert the string into an array of characters,
  // then filter out the vowels and return the count
  const vowelCount = Array.from(lowerCaseStr).filter((char) => vowels.includes(char)).length;

  return vowelCount;

}

module.exports = countVowels;

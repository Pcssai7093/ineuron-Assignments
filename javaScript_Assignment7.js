/* 1) Input a String S, and check its length and if the length is greater than 4,truncate the input String and output the result - */
function truncateString(string) {
  return string.substring(0, 4);
}
console.log(truncateString("Icecream"));

/* 2) Input a String S with multiple words, and remove whitespaces and
output the result - */
function removeWhiteSpaces(string) {
  return "".concat(...string.split(" "));
}
console.log(removeWhiteSpaces("Hii Boy"));

/* 3) Input a String S with two words, and replace first word with second word
and display the result - */

function replaceWords(string) {
  let s1 = string.split(" ")[0];
  let s2 = string.split(" ")[1];
  return s2 + " " + s1;
}
console.log(replaceWords("Hii Boy"));

/* 4) Input a String S with a word, and replace character “a” with “x” and
display the result-*/
function replaceAWithX(string) {
  return string.replace("a", "x");
}
console.log(replaceAWithX("apple"));

/* 5. What string method can be used to convert string into array ? */
// split method can be used to convert string into array

/* 6. What string method can be used to check the occurrence of a specified
text in a string? */
// indexOf method

/* 7. How can you break a string to a newline in Javascript ? */
// using \n escape sequence

/* 8. Write a Javascript function to test whether the first character of a string
is lowercase. */
function isFirstCharLowerCase(string) {
  return string.charAt(0).toLowerCase == string.charAt(0);
}
console.log(isFirstCharLowerCase("Hello"));

/* 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ? */
// i handle them by converting them into same case
function giveVerdict(string) {
  return string.toLowerCase();
}
console.log(giveVerdict("Yes"));

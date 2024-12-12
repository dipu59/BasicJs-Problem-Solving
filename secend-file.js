//Q:1-Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
//Example:
let temperatureInCelsius = 25;
let temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
console.log(temperatureInCelsius + "°C is " + temperatureInFahrenheit + "°F");



//Q:2-Write a function to check if a number is even. The function should take a single argument, which is the number to check.

function isEven(num) {
    return num % 2 === 0;
  }
  // Example usage:
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  

  //Q:3-Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.


  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4));
  console.log(sum(10, 20));


  //Q:-4Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  // Example usage:
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  

  //Q:5-Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

  function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3


  //Q:6-Write a function to get the first element of an array. The function should take a single argument, which is the array.


  function getFirstElement(arr) {
    // Check if the array is not empty
    if (arr.length > 0) {
      return arr[0];
    } else {
      return undefined;
    }
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
  
  
  //Q:7-Write a function to check if an array is empty. The function should take a single argument, which is the array.
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false


  //Q:-8Write a function to return the factorial of a number. The function should take a single argument, which is the number.

  function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040
  
  //Q:9-Write a function to reverse a string. The function should take a single argument, which is the string to reverse.


  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"

  
  //Q:10-Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.


  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"

  

  //Q:11- Write a function to find the length of a string. The function should take a single argument, which is the string.
  function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

  
  //Q:12-   Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

  
  //Q:13- Write a function to get the last element of an array. The function should take a single argument, which is the array.

  function getLastElement(arr) {
    if (arr.length === 0) return undefined;
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  console.log(getLastElement([])); // undefined

  

  //Q:14- Write a function to get the first character of a string. The function should take a single argument, which is the string.

  function getFirstCharacter(str) {
    if (str.length === 0) return undefined;
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  console.log(getFirstCharacter("")); // undefined

  
  //Q:15-  Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
// reverse a string --- O(n^2)

const reverseString = (str) => {
  const splitStr = str.split("");
  let start = 0;
  let end = splitStr.length - 1;

  while (start <= end) {
    // init the starting letter in the array to the template var
    const template = splitStr[start];
    // set the first letter in the array to the last letter (swapping)
    splitStr[start] = splitStr[end];
    // set the last letter to the first letter (swapping)
    splitStr[end] = template;
    // increase the starting index
    start++;
    // decrease the starting index
    end--;
  }

  return splitStr.join("");
};

console.log(reverseString("hello"));
console.log(reverseString("you are the best"));
console.log(reverseString("something... regular"));
console.log(reverseString("This is.. THE.. life."));

// find the intersection of two arrays and return them in an array

arrOne = [2, 3, 4, 5, 7, 9, 11];
arrTwo = [1, 2, 2, 2, 3, 4, 4, 6, 8];

// -------------BUILD UP FUNCTION-----------
// function intersection(one, two) {
//   const matchEl = two.filter((elTwo) => one.includes(elTwo));

//   const finArr = [...matchEl];

//   return finArr;
// }
// console.log(intersection(arrOne, arrTwo));

// console.log([...new Set(arrTwo)]);

const intersection = (one, two) => {
  // form new Set from one
  const setFromOne = new Set(one);

  // filter set two to get matching elements with one, and make a new Set out of it
  const filteredElements = new Set(two.filter((el) => setFromOne.has(el)));

  // return an array of matching elements
  return [...filteredElements];
};

console.log(intersection(arrOne, arrTwo));

// Fizzbuzz
// For a given value of n, generate a string of numbers from 1 to n
// if any given number is a multiple of 3, replace it with (return) fizz
// if any given number is a multiple of 5, replace it with (return) buzz
// if any given number is both a multiple of 3 & a multiple of 5, replace it with (return) fizzbuzz
// if any given number is not any of the above, return the number

const fizzbuzz = (n) => {
  let string = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      string.push("***fizzbuzz***");
    } else if (i % 3 === 0) {
      string.push("|fizz|");
    } else if (i % 5 === 0) {
      string.push("|buzz|");
    } else {
      string.push(i.toString());
    }
  }

  return string.join("");
};

console.log(fizzbuzz(15));
console.log(fizzbuzz(20));
console.log(fizzbuzz(30));
console.log(fizzbuzz(60));

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  // have an empty array to push final nums to
  // 2 dimensional array
  // 2 for loops
  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    let firstLevelArr = arr[i];
    let largest = firstLevelArr[0];

    for (let j = 0; j < firstLevelArr.length; j++) {
      if (firstLevelArr[j] > largest) {
        largest = firstLevelArr[j];
      }
    }

    finalArr.push(largest);
  }

  return finalArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// EXAMPLES....
// truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.

// truncateString("A-", 1) should return the string A....

function truncateString(str, num) {
  const result = str.slice(0, num);

  if (str.slice(-num) === str) {
    return result;
  } else {
    return `${result}...`;
  }
}

// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function findElement(arr, func) {
  const num = arr.find((arrElement) => func(arrElement));

  return num;
}

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// booWho(true) should return true.

// booWho(false) should return true.

// booWho([1, 2, 3]) should return false.

// booWho([].slice) should return false.

// booWho({ "a": 1 }) should return false.

// booWho(1) should return false.

function booWho(bool) {
  return typeof bool === "boolean";
}

// You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.). For example, one input may be:

// 'sea!$hells3'

// Can you reverse only the alphabetical ones?

function reverseOnlyAlphabets(str) {
  const splitStr = str.split("");
  const alphabets = [];

  // loop through the splitStr array
  // push all the alphabets in it to the alphabets array
  for (let char of splitStr) {
    if (/[a-zA-Z]/.test(char)) {
      alphabets.push(char);
    }
  }

  // have a list of reversed alphabets in an array
  // pass the alphabets array into a function that will reverse it
  const reversedAlphabets = reverseAnArray(alphabets);

  let reversedArrayIndex = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (/[a-zA-Z]/.test(splitStr[i])) {
      splitStr[i] = reversedAlphabets[reversedArrayIndex++];
    }
  }

  return splitStr.join("");
}

// function to reverse a given array by swapping
function reverseAnArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

// console.log(reverseOnlyAlphabets("ab@#dcee@hide$5"));

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// titleCase("I'm a little tea pot") should return a string.

// titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.

// titleCase("sHoRt AnD sToUt") should return the string Short And Stout.

// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

function titleCase(str) {
  // capitalize each starting letter of a word in str
  // split str to array by spaces
  // run a for loop
  // capitalize the first letter
  // lowercase - ize the remaining letters of the array

  const splitStr = str.split(" ");
  const newArr = [];

  for (let i = 0; i < splitStr.length; i++) {
    let currWord = splitStr[i];
    let modWord =
      currWord.substr(0, 1).toUpperCase() + currWord.substr(1).toLowerCase();
    newArr.push(modWord);
  }

  return newArr.join(" ");
}

// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

// All elements from the first array should be added to the second array in their original order.

function frankenSplice(arr1, arr2, n) {
  // spread the elements of arr2 into an array
  // use splice method to add the elements of arr1 at index
  // n of arr2
  // NOTE: slice method returns a new array of the altered
  // one
  // be sure to return the old array
  const formerArr = [...arr2];
  const newArr = formerArr.splice(n, 0, ...arr1);
  console.log(newArr);
  return formerArr;
}

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.

// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.

// getIndexToIns([40, 60], 50) should return 1.

// getIndexToIns([3, 10, 5], 3) should return 0.

// getIndexToIns([5, 3, 20, 3], 5) should return 2

function getIndexToIns(arr, num) {
  const sorted = arr.sort((a, b) => a - b);
  let index = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (num === sorted[i] || num === sorted[i + 1]) {
      index = i;
    } else if (num > sorted[i] && num < sorted[i + 1]) {
      index = i + 1;
    } else if (num > sorted[i]) {
      index = i + 1;
    }
  }

  return index;
}

// OR

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

// Is An Anagram
// Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another: such as cinema, formed from iceman.

// We are given two strings like "cinema" and "iceman" as inputs. Can you write a method isAnagram(str1, str2) that will return true or false depending on whether the strings are anagrams of each other?

function isAnAnagram(str1, str2) {
  const newStr1 = str1.toLowerCase().split("").sort().join("");
  const newStr2 = str2.toLowerCase().split("").sort().join("");

  return newStr1 === newStr2;
}

// Validate Palindrome
// Given a string str, can you write a method that will return True if is a palindrome and False if it is not? If you'll recall, a palindrome is defined as "a word, phrase, or sequence that reads the same backward as forward". For now, assume that we will not have input strings that contain special characters or spaces, so the following examples hold:

// let str = 'thisisnotapalindrome';
// isPalindrome(str);
// // false

// str = 'racecar';
// isPalindrome(str);
// // true
// For an extra challenge, try to ignore non-alphanumerical characters. The final solution that we present will handle all edge cases.

function isPalindrome(str) {
  if (!str || str === "") {
    return false;
  } else {
    let start = 0;
    let end = str.length - 1;
    let startChar;
    let endChar;

    while (start < end) {
      startChar = str.charAt(start).toLowerCase();
      endChar = str.charAt(end).toLowerCase();

      if (isAlphanumeric(startChar) && isAlphanumeric(endChar)) {
        // check if both starting and ending characters are true or not
        if (startChar == endChar) {
          start++;
          end--;
        } else {
          return false;
        }
      } else {
        // move to the next character if the current character is not alphanumeric
        if (!isAlphanumeric(startChar)) {
          start++;
        }
        if (!isAlphanumeric(endChar)) {
          end--;
        }
      }
    }

    return true;
  }
}

function isAlphanumeric(char) {
  // check if char is not alphanumeric
  if (/[^a-zA-Z0-9]/.test(char)) {
    return false;
  } else {
    return true;
  }
}

console.log(isPalindrome("Where we are Era ew erehw"));

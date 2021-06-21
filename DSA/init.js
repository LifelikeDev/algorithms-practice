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
  const filteredElements = new Set(two.filter((tw) => setFromOne.has(tw)));

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

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

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

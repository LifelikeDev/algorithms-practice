# Solutions to CodeWars JavaScript Algorithms

### Challenge 1

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) \* F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) \* F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) \* F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) \* F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), # since F(8) = 21, F(9) = 34 and 714 = 21 \* 34

productFib(800) # should return (34, 55, false), # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 _ 34 < 800 < 34 _ 55

---

productFib(714) # should return [21, 34, true],
productFib(800) # should return [34, 55, false],

---

productFib(714) # should return {21, 34, 1},
productFib(800) # should return {34, 55, 0},

---

productFib(714) # should return {21, 34, true},
productFib(800) # should return {34, 55, false},

### Solution

function productFib(prod){
let firstNum = 0;
let secondNum = 1;

while (firstNum \* secondNum < prod) {
firstNum = secondNum - firstNum;
secondNum = firstNum + secondNum;
}

return [firstNum, secondNum, firstNum * secondNum === prod ];

}

### Challenge 2

### Solution

const flip = (d, a) => {

// d can be R - Right or L - Left
// if (d === "R") {
// return a.sort((x, y) => x -y);
// } else if (d === "L") {
// return a.sort((x, y) => y - x);
// }

return d === "R" ? (a.sort((x, y) => x - y)) : (a.sort((x, y) => y - x))

}

### Challenge 3

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

### Solution

function bmi(weight, height) {

let bmiReading = +(weight / Math.pow(height, 2)).toFixed(2);

switch (true) {
case (bmiReading <= 18.5):
return "Underweight";
break;
case (bmiReading > 18.5 && bmiReading =< 25):
return "Normal";
break;
case (bmiReading > 25 && bmiReading <= 30):
return "Overweight";
break;
default:
return "Obese";  
 }

}

### Challenge 4

Write function RemoveExclamationMarks which removes all exclamation marks from a given string

### Solution

const removeExclamationMarks = s => s.replace(/!/g, "");

### Challenge 5

Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

### Solution

function firstNonConsecutive (arr) {

for (let i = 0; i < arr.length - 1; i++) {
const current = arr[i];
const next = arr[i + 1];

    if ( next !== current + 1 ) {
      return next;
    }

    }

return null;

}

### Challenge 6

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

### Solution

function spinWords(string){

return string
.split(" ")
.map(str => str.length > 4 ? str.split("").reverse().join("") : str)
.join(" ");

}

### Challenge 7

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

### Solution

function countSmileys(arr) {

const smileyReg = /[:;][-~]?[D)]/g;
let total = 0;

for (let i=0; i < arr.length; i++) {
if (arr[i].match(smileyReg)) {
total++;
}
}

return total;

}

### Challenge 8

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

### Solution

function solution(str, ending){
return ending === "" ? true : str.slice(-ending.length) === ending;
}

### OR

function solution(str, ending){
return str.endsWith(ending);
}

### Challenge 9

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

### Solution

function oddOrEven(array) {
const newArr = array.length > 1 ? array.reduce((acc, curr) => acc += curr) : array.length === 1 ? array[0] : 0;

return newArr % 2 === 0 ? "even" : "odd";
}

### Challenge 10

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

### Solution

function repeatStr (n, s) {
return s.repeat(n);
}

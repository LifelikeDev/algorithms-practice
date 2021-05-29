function solution(str, ending) {
  console.log(str.slice(-2) === ending);
  return str.slice(-2) === ending;
}

solution("abc", "bc"); // returns true
solution("abc", "d"); // returns false

let some = "shdfakdfnaf";
let st = "";
console.log(some.slice(-st.length));

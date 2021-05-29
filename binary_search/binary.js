// Implementing the binary search algorith with JS

function binaryFunc(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midpoint = (first + last) / 2;

    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return null;
}

binaryFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 8);

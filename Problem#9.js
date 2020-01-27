// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?
// O(n) & O(n)
// const solution = array => {
//   let copy = array.slice();
//   copy[1] = Math.max(array[0], array[1]);

//   for (let index = 2; index < array.length; index++) {
//     copy[index] = Math.max(copy[index - 1], copy[index - 2] + array[index]);
//   }
//   return copy[copy.length - 1];
// };
// O(n) & O(1)
const solution = array => {
  let first = Math.max(array[0], array[1]);
  let second = array[0];

  for (let index = 2; index < array.length; index++) {
    let current = Math.max(first, second + array[index]);
    second = first;
    first = current;
  }
  return first;
};

console.log(solution([2, 4, 6, 2, 5])); // 13
console.log(solution([5, 1, 1, 5])); // 10

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2

const solution = n => {
  if (n <= 1) return 1;
  let ways = [1, 1];

  for (let index = 2; index <= n; index++) {
    ways[index] = ways[index - 2] + ways[index - 1];
  }
  return ways[n];
};

console.log(solution(5));

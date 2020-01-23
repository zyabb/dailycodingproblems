// Good morning! Here's your coding interview problem for today.
// This problem was asked by Jane Street.
// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
// Given this implementation of cons:
// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr

const cons = (a, b) => {
  let pair = f => {
    return f(a, b);
  };
  return pair;
};

const car = pair => {
  return pair((a, b) => {
    return a;
  });
};

const cdr = pair => {
  return pair((a, b) => {
    return b;
  });
};
console.log(cons(3, 4)); //[Function: pair]

console.log(car(cons(3, 4))); //3

console.log(cdr(cons(3, 4))); // 4

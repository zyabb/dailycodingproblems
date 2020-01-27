// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

const debounce = (fn = () => {}, wait = 1000) => (...args) => {
  const delayed = () => fn.apply(this, args);
  return setTimeout(delayed, wait);
};

const setScheduler = (ms, fn) => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(fn());
    }, ms);
  });
};

const rx = require('rxjs');

// Task 1.1.10
// Create Observable that generates a Fibonacci sequence with 20 iterations depth

// Version 1
const fibonacci = (count) => {
  let num1 = 0,
    num2 = 1,
    nextTerm;

  const res = [num1, num2];
  for (let i = 1; i <= count; i++) {
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
    res.push(nextTerm);
  }
  return res;
};

const fibonacciObservable = rx.from(fibonacci(19)).subscribe({
  next: (val) => console.log('Fibonacci Observable v1: ', val),
});

// Version 2
let prevNum;
const fibonacciIterator = (curNum) => {
  let nextTerm;
  nextTerm = prevNum + curNum;
  prevNum = curNum;
  curNum = nextTerm;
  if (nextTerm === 0) {
    prevNum++;
    return prevNum;
  }
  return nextTerm;
};

prevNum = 0;
const fibonacciObservable2 = rx.generate({
  initialState: 0,
  condition: (x) => x < 6766,
  iterate: fibonacciIterator,
  fibonacciObservable2Selector: (x) => x,
});

const sequenceArray = [];
fibonacciObservable2.subscribe((x) => sequenceArray.push(x));
console.log('Fibonacci Observable v2: ', sequenceArray);

module.exports = {
  fibonacciObservable,
  fibonacciObservable2,
};

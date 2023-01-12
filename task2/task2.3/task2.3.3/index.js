const rx = require('rxjs');
const fs = require('fs');

// Task 2.3.3
// Concat all numbers into a String that fall in the same window
// Use window().

const source = rx.interval(400).pipe(
  rx.take(20),
  rx.window(rx.interval(1000)),
  rx.map((win) => win.pipe(rx.take(2)))
);

const result = source.pipe(
  rx.mergeMap((el) => el.pipe(rx.reduce((acc, cur) => acc + ' ' + cur, '')))
);
result.subscribe((val) => console.log(`Observable 2.3.3: ` + val));

module.exports = {
  result,
};

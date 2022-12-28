const rx = require('rxjs');

// Task 2.1.6
// Gather elements from two sources so every element is combined with a corresponding one from the neighbor stream
// Use .zip

const number = rx.from([1, 2, 3]);
const letter = rx.from(['A', 'B', 'C']);

const zipObservable = rx
  .zip(number, letter)
  .pipe(rx.map(([number, letter]) => ({ number, letter })));
zipObservable.subscribe((x) =>
  console.log('Observable 2.1.6: ' + JSON.stringify(x))
);

module.exports = {
  zipObservable,
};

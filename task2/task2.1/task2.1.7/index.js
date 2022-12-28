const rx = require('rxjs');

// Task 2.1.7
// Combine elements from Observables similarly to .zip but in the way to combine
// every new element with the latest observed from the neighbors
// Use .combineLatest

const number = rx.interval(1000);
const letter = rx.from(['A', 'B', 'C']);

// Will combine last emitted values
const combineObservable = number.pipe(
  rx.combineLatestWith(letter),
  rx.map(([number, letter]) => ({ number, letter })),
  rx.take(5)
);
combineObservable.subscribe((x) =>
  console.log('Observable 2.1.7: ' + JSON.stringify(x))
);

module.exports = {
  combineObservable,
};

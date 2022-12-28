const rx = require('rxjs');

// Task 2.1.1
// Merge several sources into a single Observable
// Use .merge

const timer = rx.interval(1000).pipe(rx.take(5));
const array = rx.from([1, 2, 3]);
const merged = rx.merge(timer, array);

// Array will work first, then the interval values
merged.subscribe((x) => console.log('Observable 2.1.1: ' + x));

module.exports = {
  merged,
};

const rx = require('rxjs');

// Task 2.1.2
// Merge all streams into a single Observable in the way the order of all elements
// are corresponding to the order in which Observers are merged.
// Use .concat

// Same as next, 'cause there's no mergeSequential in RxJS

const timer = rx.interval(1000).pipe(rx.take(3));
const array = rx.from([1, 2, 3]);
const merged = rx.concat(timer, array);

// Interval will work first, then array
merged.subscribe((x) => console.log('Observable 2.1.2: ' + x));

module.exports = {
  merged,
};

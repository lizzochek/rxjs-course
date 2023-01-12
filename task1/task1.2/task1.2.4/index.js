const rx = require('rxjs');

// Task 1.2.4
// Take only two last elements of Observable
// Use takeLast

const manyObservable = rx.range(1, 100);
const lastTwo = manyObservable.pipe(rx.takeLast(2));
lastTwo.subscribe((x) => console.log('Observer 1.2.4 ' + x));

module.exports = {
  lastTwo,
};

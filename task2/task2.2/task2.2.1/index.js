const rx = require('rxjs');
const fs = require('fs');

// Task 2.2.1
// Move elements processing to another Thread.
// Use .observeOn for that purpose.
// observeOn() simply changes the thread of all operators further Downstream

const a = rx.from([1, 2, 3]).pipe(rx.observeOn(rx.asyncScheduler));
const b = rx.from([4, 5, 6]);

const parallelObservable = rx.merge(a, b);

console.log('Observable 2.2.1: begin');
parallelObservable.subscribe((x) => console.log('Observable 2.2.1: ' + x));
console.log('Observable 2.2.1: end');

module.exports = {
  parallelObservable,
};

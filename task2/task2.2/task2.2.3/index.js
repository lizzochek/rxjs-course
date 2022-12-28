const rx = require('rxjs');
const fs = require('fs');

// todo

// Task 2.2.3
// Parallel execution on several Threads
// Use parallel. Pay attention, in order to perform processing on the several Threads,
// the parallel operator should be combined with ParallelFlux#runOn

// Not correct code
const a = rx.from([1, 2, 3]).pipe(rx.subscribeOn(rx.asyncScheduler));
const b = rx.from([4, 5, 6]);

const subscribeOnObservable = rx.merge(a, b);

console.log('Observable 2.2.3: begin');
subscribeOnObservable.subscribe((x) => console.log('Observable 2.2.3: ' + x));
console.log('Observable 2.2.3: end');

module.exports = {
  subscribeOnObservable,
};

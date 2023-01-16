const rx = require('rxjs');
const fs = require('fs');

// Task 2.2.4
// Modify code so that stream's subscription happens on the Scheduler.single.
// Modify the pipeline so that only work2 happens on the different Thread
// Use .subscribeOn() + .observeOn()

// If we just put observeOn, it will be enough, because it changes the thread only for the
// observables coming after it

const work1 = (x) => rx.of(x + 10);
const work2 = (x) => rx.of(x + 20);

const b = rx.from([4, 5, 6]);
const a = rx.from([1, 2, 3]).pipe(
  rx.mergeMap(work1),
  rx.observeOn(rx.asyncScheduler),
  rx.mergeMap(work2)
  // rx.subscribeOn(rx.asyncScheduler),
);

const subscribeOnObservable = rx.merge(a, b);

console.log('Observable 2.2.4: begin');
subscribeOnObservable.subscribe((x) => console.log('Observable 2.2.4: ' + x));
console.log('Observable 2.2.4: end');

module.exports = {
  subscribeOnObservable,
};

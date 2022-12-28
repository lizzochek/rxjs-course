const rx = require('rxjs');
const fs = require('fs');

// Task 2.2.2
// Move Callable execution on the separate Thread
// Use subscribeOn
// subscribeOn() only influences the thread which is going to be used when
// Observable is going to get subscribed to and it will stay on it downstream.

// SubscribeOn указывает Scheduler, на котором будет работать Observable.
// ObserveOn указывает Scheduler, на котором Observer будет наблюдать за этим Observable.

const a = rx.from([1, 2, 3]).pipe(rx.subscribeOn(rx.asyncScheduler));
const b = rx.from([4, 5, 6]);

const subscribeOnObservable = rx.merge(a, b);

console.log('Observable 2.2.2: begin');
subscribeOnObservable.subscribe((x) => console.log('Observable 2.2.2: ' + x));
console.log('Observable 2.2.2: end');

module.exports = {
  subscribeOnObservable,
};

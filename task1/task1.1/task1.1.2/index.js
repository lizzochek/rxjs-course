const rx = require('rxjs');

// Task 1.1.2
// Create an Observable that emits one event and then completes.

const observable = new rx.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.complete();
  // Will not be emitted
  subscriber.next(2);
});

observable.subscribe({
  next(x) {
    console.log('Observable 1.2: value ' + x);
  },
  complete() {
    console.log('Observable 1.2 done');
  },
});

module.exports = {
  observable,
};

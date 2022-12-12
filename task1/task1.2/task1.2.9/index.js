const rx = require('rxjs');

// Task 1.2.9
// Ignore all elements from Observable and then propagate onComplete only

// Use ignoreElements

const observable = new rx.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.complete();
});

const result = observable.pipe(rx.ignoreElements()).subscribe({
  next: (x) => console.log(x),
  complete: () => console.log('Observable 1.2.9: completed'),
});

module.exports = {
  observable,
};

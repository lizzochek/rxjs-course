const rx = require('rxjs');

// Task 1.2.8
// Collect all elements in Observable into array

// Use toArray

const observable = new rx.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.complete();
});

const result = observable
  .pipe(rx.toArray())
  .subscribe((x) => console.log('Observer 1.2.8: ' + x));

module.exports = {
  observable,
};

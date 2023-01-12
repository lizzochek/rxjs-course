const rx = require('rxjs');

// Task 1.2.10
// Wait for the last element in the Observable

// Use last

const observable = new rx.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.complete();
});

const result = observable.pipe(rx.last());

result.subscribe((x) => console.log('Observable 1.2.9: ' + x));

module.exports = {
  result,
};

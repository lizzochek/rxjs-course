const rx = require('rxjs');

// Task 1.2.6
// Sum all elements in Observable

// Use reduce

const observable = new rx.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  // We have to complete, because reduce emits only on completion!
  subscriber.complete();
});

const result = observable.pipe(rx.reduce((acc, curr) => acc + curr, 0));

result.subscribe((x) => console.log('Observer 1.2.6: ' + x));

module.exports = {
  result,
};

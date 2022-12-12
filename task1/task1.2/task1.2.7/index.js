const rx = require('rxjs');

// Task 1.2.7
// Transform Observable emitting multiple values to emitting one, by taking the first element

// Use first

const observable = new rx.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.complete();
});

const result = observable
  .pipe(rx.first())
  .subscribe((x) => console.log('Observer 1.2.7: ' + x));

module.exports = {
  observable,
};

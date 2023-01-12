const rx = require('rxjs');

// Task 1.2.3
// Transform Observer which returns strings into Observable of chars.

// Use mergeMap or concatMap Use String.split("") to split word string into string of a single letter

const observable = new rx.Observable((subscriber) => {
  subscriber.next('abc');
  subscriber.next('def');
});

const result = observable.pipe(rx.mergeMap((x) => rx.pipe(x)));
result.subscribe((x) => console.log(`Observer 1.2.3: ` + x));

module.exports = {
  observable,
  result,
};

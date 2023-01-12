const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.5
// Make sure that Obbservable is executed faster than a 1 second.
// Otherwise cancel execution and return a fallback.
// Make sure Obbservable is not going to block central pipeline
// Use subscribeOn in order to isolate blocking execution
// so timeout will work out

const subscribeOnObservable = rx.interval(1000).pipe(
  rx.subscribeOn(rx.asyncScheduler),
  // can use timeoutWith
  rx.timeout({
    each: 1000,
    with: () => rx.throwError(() => new Error('Too slow!')),
  }),
  rx.catchError((err) => {
    console.log('Observable 2.5.5: Moving to something faster');
    return rx.from([1, 2, 3]);
  })
);

console.log('Observable 2.5.5: begin');
subscribeOnObservable.subscribe((x) => console.log('Observable 2.5.5: ' + x));
console.log('Observable 2.5.5: end');

module.exports = {
  subscribeOnObservable,
};

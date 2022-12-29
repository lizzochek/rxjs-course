const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.4
// Make sure that Observable executes no longer that a second.
// Otherwise return a fallback
// timeout()

const slow = rx.interval(1000);
const fast = rx.interval(500).pipe(rx.take(10));

slow
  .pipe(
    // Can use timeoutWith and add a callback there, but the logging would be worse
    rx.timeout({
      each: 1000,
      with: () => rx.throwError(() => new Error('Interval too slow!')),
    }),
    rx.catchError((err) => {
      console.log('Observable 2.5.4: Moving to faster interval');
      return fast;
    })
  )
  .subscribe((x) => console.log(`Observable 2.5.4: ` + x));

const rx = require('rxjs');
const fs = require('fs');

// Task 2.3.1
// Make sure your subscriber is not going to be overwhelmed by elements.
// Drop all unrequested elements. Release dropped elements.
// As RxJs doesn't have a method mentioned in an original task, we will use throttling

// We can also use pausable Observsable, debounce (to start getting values after some time)
// or something else depending on what elements we need

var source = rx.interval(500).pipe(rx.take(12));

// Let's suppose we don't need odd numbers
const subscription = source
  .pipe(rx.throttle(() => rx.interval(700)))
  .subscribe({
    next: (x) => console.log(`Observable 2.3.1: ` + x),
  });

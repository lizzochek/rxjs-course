const rx = require('rxjs');

// Task 1.2.11
// Solve a FizzBuzz problem using Observable
// Use the IndexedWord utility class; Use a chain of map in order to make it fully functional

rx.range(1, 50)
  .pipe(
    rx.map((x) => (x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x)),
    rx.map((x) => (x % 3 === 0 ? 'Fizz' : x)),
    rx.map((x) => (x % 5 === 0 ? 'Buzz' : x))
  )
  .subscribe((x) => console.log(x));

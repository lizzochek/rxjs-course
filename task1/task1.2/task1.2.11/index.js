const rx = require('rxjs');

// Task 1.2.11
// Solve a FizzBuzz problem using Observable
// Use the IndexedWord utility class; Use a chain of map in order to make it fully functional

const fizzBuzz = (i) => {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
};

rx.range(1, 50).pipe(rx.map(fizzBuzz)).subscribe();

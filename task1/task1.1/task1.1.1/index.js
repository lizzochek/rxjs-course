const rx = require('rxjs');

// Task 1.1.1
// Create an observable that emits numbers in range from 0 to 20

const numbersObservable = rx.range(0, 21);

numbersObservable.subscribe({
  next: (val) => console.log('Observable 1.1: ', val),
});

module.exports = {
  numbersObservable,
};

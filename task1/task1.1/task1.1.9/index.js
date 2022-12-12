const rx = require('rxjs');

// Task 1.1.9
// Create Observable that is empty and sends onComplete only

const emptyObservable = rx.EMPTY;

emptyObservable.subscribe({
  next: () => console.log('Observer 1.9: next'),
  complete: () => console.log('Observer 1.9: complete'),
});

// Create Observable that emits no signals and never completes
const info = () => console.log('Will never be called');

const neverObservable = rx.NEVER;
neverObservable.subscribe({
  next: (x) => console.log(x),
  error: info,
  complete: info,
});

module.exports = {
  emptyObservable,
  neverObservable,
};

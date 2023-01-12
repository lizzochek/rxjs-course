const rx = require('rxjs');

// Task 1.1.9
// Create Observable that is empty and sends onComplete only

const emptyObservable = rx.EMPTY;

emptyObservable.subscribe({
  complete: () => console.log('Observer 1.9: complete'),
});

// Create Observable that emits no signals and never completes
const neverObservable = rx.NEVER;
// Comment before running a test
// neverObservable.subscribe({
//   error: () => console.log('Will never be called'),
//   complete: () => console.log('Will never be called'),
// });

module.exports = {
  emptyObservable,
  neverObservable,
};

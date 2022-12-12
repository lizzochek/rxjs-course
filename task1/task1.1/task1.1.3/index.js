const rx = require('rxjs');

// Task 1.1.3
// Create observable from an array

const arrayObservable = rx.from([1, 2, 3, 4, 5]);
const subscribe = arrayObservable.subscribe((el) =>
  console.log('Observable 1.3: ', el)
);

module.exports = {
  arrayObservable,
};

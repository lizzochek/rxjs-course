const rx = require('rxjs');

// Task 1.1.8
// Generate a Promise which returns a given value only in case the value is in bounds [min, max]
// In case the value is out of bounds return a rejected Promise.

const rangePromise = (val, range) =>
  new Promise((resolve, reject) => {
    // console.log(val, range[1], range[0], val <= range[0], val >= range[0]);
    if (val <= range[1] && val >= range[0]) {
      resolve('Range Promise resolved');
    } else {
      reject(new Error('Range Promise error'));
    }
  });

const rangePromiseObservable = rx.from(rangePromise(2, [1, 5]));
rangePromiseObservable.subscribe((x) =>
  console.log('Observable 1.8 resolved: ', x)
);

const rangeErrorPromiseObservable = rx.from(rangePromise(2, [3, 10]));
rangeErrorPromiseObservable.subscribe({
  error: (err) => console.log('Observable 1.8 error catched'),
});

module.exports = {
  rangeErrorPromiseObservable,
  rangePromiseObservable,
};

const rx = require('rxjs');

// Task 1.1.7
// Create an Observable from Promise

const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Promise Resolved'), 1000);
});

const promiseObservable = rx.from(myPromise);
promiseObservable.subscribe((x) => console.log('Observable 1.7: ', x));

module.exports = {
  promiseObservable,
};

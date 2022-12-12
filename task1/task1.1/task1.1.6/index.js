const rx = require('rxjs');

// Task 1.1.6
// Create an Observable that emits numbers from 0 to 4 in an interval of 1 sec
const numbers = rx.interval(1000);

const intervalObservable = numbers.pipe(rx.take(5));

intervalObservable.subscribe((x) => console.log('Observable 1.6: ', x));

module.exports = {
  intervalObservable,
};

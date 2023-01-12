const rx = require('rxjs');
const fs = require('fs');

// Task 2.3.2
// Keep rate of elements at one batch per second
// Use bufferTime().

var source = rx.interval(600).pipe(rx.take(5)).pipe(rx.bufferTime(1000));

source.subscribe((x) => console.log(`Observable 2.3.2: ` + x));

module.exports = {
  source,
};

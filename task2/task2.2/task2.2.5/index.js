const rx = require('rxjs');
const fs = require('fs');

// Task 2.2.5
// There is a stream of blocking calls.
// Ensure every call is executed in non-blocking (means moving call on another Thread)
// way and will not block other executions. Ensure that pool is not going over 256
// created Threads
// Use subscribeOn()

// subscribeOn asynnc scheduler will allow asynchronous behaviour which will not
// block execution

const a = rx.from([1, 2, 3]).pipe(rx.subscribeOn(rx.asyncScheduler));
const b = rx.from([4, 5, 6]);

const subscribeOnObservable = rx.merge(a, b);

console.log('Observable 2.2.2: begin');
subscribeOnObservable.subscribe((x) => console.log('Observable 2.2.2: ' + x));
console.log('Observable 2.2.2: end');

module.exports = {
  subscribeOnObservable,
};

const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.1
// Provide a fallback in case the given Observable is empty.
// Use defaultIfEmpty

const example = rx.empty().pipe(rx.defaultIfEmpty('Observable 2.5.1: Empty!'));
const subscribe = example.subscribe((val) => console.log(val));

module.exports = {
  example,
};

const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.9
// Make sure that Observable timeouts in case first elements only is not delivered on time
// timeout({first: ...})

const slow = rx.interval(1000).pipe(rx.take(10));

const result = slow.pipe(rx.timeout({ first: 800 }));
result.subscribe({
  error: (err) => console.log('Observable 2.5.9: ' + err.message),
});

module.exports = {
  result,
};

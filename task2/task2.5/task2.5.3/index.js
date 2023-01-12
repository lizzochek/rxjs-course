const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.3
// Retry operation in case of error
// Use .retry with the delay option. Pay attention - retryWhen will soon be deprecated

const result = rx.interval(1000).pipe(
  rx.map((value) => {
    if (value > 5) {
      throw value;
    }
    return value;
  }),
  rx.retry({
    count: 2,
    delay: 2000,
  })
  // rx.retryWhen((errors) =>
  //   errors.pipe(
  //     rx.tap((value) => console.log(`Value ${value} was too high!`))
  //     // restart in 6 seconds
  //     rx.delayWhen((value) => rx.timer(value * 1000))
  //   )
  // )
);
result.subscribe({
  next: (value) => console.log(`Observable 2.5.3: ` + value),
  error: (err) => console.log(`Observable 2.5.3: retried 2 times then quit!`),
});

module.exports = {
  result,
};

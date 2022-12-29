const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.8
// Retry with exponential backoff strategy with min delay = 100ms, max delay = 1600ms
// when Flux receives errors. Note, retryable errors are the one which starts with [Retry] message
// Use retryWhen(Retry.backoff(...))

const maxInterval = 1600;

rx.interval(300)
  .pipe(
    rx.map((value) => {
      if (value > 2) {
        throw value;
      }
      return value;
    }),
    rx.retryWhen((errors) =>
      errors.pipe(
        rx.mergeMap((error, i) => {
          const waitms = Math.pow(2, i) * 300;
          if (waitms > maxInterval) {
            return throwError(error);
          } else {
            console.log(`Attempt: retrying in ${waitms}ms`);
            return rx.timer(waitms);
          }
        })
      )
    )
  )
  .subscribe({
    next: (value) => console.log(`Observable 2.5.8: ` + value),
    error: (err) => console.log(`Observable 2.5.8: retried then quit!`),
  });

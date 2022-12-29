const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.2
// Return a fallback if Observable errors
// Use .catchError.

rx.from([1, 2, 3, 4, 5])
  .pipe(
    rx.map((n) => {
      if (n === 4) {
        throw new Error('FOUR!');
      }
      return n;
    }),
    rx.catchError((err) => rx.from(['IV', 'V']))
  )
  .subscribe((x) => console.log(`Observable 2.5.2: ` + x));

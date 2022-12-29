const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.7
// In case mapping function throws an exception, catch it and skip error value.
// In that case use no additional strategies.
// Use handle with try-catch

const stuff = rx
  .of('Spaghetti', 42, 'Meatballs')
  .pipe(
    rx.map((x) => {
      try {
        return x.toLowerCase();
      } catch (error) {
        return undefined;
      }
    }),
    rx.filter((el) => el !== undefined)
  )
  .subscribe((x) => console.log(`Observable 2.5.7: ` + x));

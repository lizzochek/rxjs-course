const rx = require('rxjs');
const fs = require('fs');

// Task 2.5.6
// Continue stream in case of exception in .map
// There is no explicit onErrorContinue method. So we will use a combination of
// disposable stream and catchError

const stuff = rx.of('Spaghetti', 42, 'Meatballs');

const lowercaseStuff = stuff.pipe(
  rx.switchMap((x) =>
    // disposable stream
    rx.of(x).pipe(
      rx.map((x) => x.toLowerCase()),
      rx.catchError((error) => rx.of(undefined))
    )
  )
);

lowercaseStuff.subscribe((x) => console.log(`Observable 2.5.6: ` + x));

module.exports = {
  lowercaseStuff,
};

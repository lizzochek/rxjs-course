const rx = require('rxjs');

// Task 2.1.8
// Depends on the clientPreferences Observable , switch
// between vanillaIceCreamStream and chocolateIceCreamStream
// Use .switchMap

const clientPreferences = rx.from([
  { name: 'Jane', likesVanilla: true },
  { name: 'Anna', likesVanilla: false },
  { name: 'Markus', likesVanilla: true },
]);

const switchObservable = clientPreferences.pipe(
  rx.switchMap((x) =>
    x.likesVanilla
      ? rx.of(`${x.name} likes vanilla`)
      : rx.of(`${x.name} likes chocolate`)
  )
);

switchObservable.subscribe((x) =>
  console.log('Observable 2.1.8: ' + JSON.stringify(x))
);

module.exports = {
  switchObservable,
};

const rx = require('rxjs');

// Task 2.1.4
// Having several information sources (a.k.a Publisher) you need to subscribe to all of them and consume the whole stream only from the one which answered earlier than others
// Use .race

const timer = rx.interval(1000).pipe(rx.take(5));
const array = rx.from([1, 2, 3]);
const raceObservable = rx.race(timer, array);

// Only array values will work
raceObservable.subscribe((x) => console.log('Observable 2.1.4: ' + x));

module.exports = {
  raceObservable,
};

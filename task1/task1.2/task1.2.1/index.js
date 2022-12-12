const rx = require('rxjs');

// Task 1.2.1
// Turn an Observer which returns any type of data
// to the Observer with a string (use .from and .map)

const stringify = (value) => {
  switch (typeof value) {
    case 'string':
    case 'object':
      return JSON.stringify(value);
    default:
      return String(value);
  }
};

const observable = new rx.Observable((subscriber) => {
  subscriber.next('a');
  subscriber.next(12);
  subscriber.next({ name: 'Liza', surname: 'Dolhova' });
  subscriber.next([1, 2, 3, 4, 5]);
})
  .pipe(rx.map((x) => stringify(x)))
  .subscribe((x) =>
    console.log(`Observer 1.2.1: ` + x + ' of type ' + typeof x)
  );

module.exports = {
  observable,
};

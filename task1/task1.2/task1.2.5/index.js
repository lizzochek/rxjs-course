const rx = require('rxjs');

// Task 1.2.5
// Transform Observable using high-order functions validate and doBusinessLogic in the following order:

// - `validate`
// - `doBusinessLogic`
const observable = new rx.Observable((subscriber) => {
  subscriber.next('abc');
  subscriber.next(12);
  subscriber.next('cde');
});

const validate = rx.filter((x) => {
  if (typeof x === 'string') return true;
  else return false;
});

const doBusinessLogic = rx.map((x) => {
  return x.toUpperCase();
});

const tranformObservable = observable
  .pipe(validate, doBusinessLogic)
  .subscribe((x) => console.log('Observable 1.2.5: ' + x));

module.exports = {
  observable,
};

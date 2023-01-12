const rx = require('rxjs');
const fs = require('fs');

// Task 2.2.1
// Move elements processing to another Thread.
// Use .observeOn for that purpose.
// observeOn() simply changes the thread of all operators further Downstream

// В отличие от subscribeOn(), имеет значение, куда в цепочку вы помещаете функцию observeOn(),
// так как этот оператор только изменяет поток, который используется observables, которые следуют ниже.

const a = rx.from([1, 2, 3]).pipe(rx.observeOn(rx.asyncScheduler));
const b = rx.from([4, 5, 6]);

const parallelObservable = rx.merge(a, b);

console.log('Observable 2.2.1: begin');
parallelObservable.subscribe((x) => console.log('Observable 2.2.1: ' + x));
console.log('Observable 2.2.1: end');

module.exports = {
  parallelObservable,
};

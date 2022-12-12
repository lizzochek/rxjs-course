const rx = require('rxjs');

// Task 1.2.2
// Create Observer which returns strings of length > 3
// Use .filter

const observable = new rx.Observable((subscriber) => {
  subscriber.next('a');
  subscriber.next('aaa');
  subscriber.next('aaaaa');
  subscriber.next('aaaaaaaaa');
})
  .pipe(rx.filter((x) => x.length > 3))
  .subscribe((x) => console.log(`Observer 1.2.2: ` + x));

module.exports = {
  observable,
};

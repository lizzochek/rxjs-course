const rx = require('rxjs');

// Task 1.1.5
// Create an Observable that emits only one event from a callback
const someFunction = (value, callback) => {
  callback(value);
};
const bindedCallback = rx.bindCallback(someFunction);
const callbackObservable = bindedCallback(1);
callbackObservable.subscribe({
  next: (val) => console.log('Observable 1.5: ', val),
});

module.exports = {
  callbackObservable,
};

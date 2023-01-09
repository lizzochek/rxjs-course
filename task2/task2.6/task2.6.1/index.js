const rx = require('rxjs');
const fs = require('fs');

// Task 2.6.1
// Share Observable in such a way so backpressure will be controlled by all the subscribers.
// Also, it should connect to the main Observable when the total number of subscriber reach number 3.
// In case all the subscribers has been disconnected, it should cancel the subscription.

const source = rx.interval(1000).pipe(
  rx.tap((x) => console.log('Processing: ', x)),
  rx.map((x) => x * x),
  rx.take(4),
  rx.publish(),
  rx.refCount(3)
);

source.subscribe((x) => console.log('subscription 1: ', x));
source.subscribe((x) => console.log('subscription 2: ', x));
source.subscribe((x) => console.log('subscription 3: ', x));

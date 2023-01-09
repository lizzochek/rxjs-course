const rx = require('rxjs');
const fs = require('fs');

// Task 2.6.3
// Convert stream to shared stream but with no backpressure support

const example = rx.publish()(rx.interval(500).pipe(rx.take(12)));

const subscribe = example.subscribe((val) =>
  console.log(`Observable 2.6.3: sub 1: ${val}`)
);
const subscribeTwo = example.subscribe((val) =>
  console.log(`Observable 2.6.3: sub 2: ${val}`)
);

setTimeout(() => {
  example.connect();
}, 2000);

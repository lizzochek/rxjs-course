const rx = require('rxjs');
const fs = require('fs');

// Task 2.3.5
// Provide your own implementation of Subscriber which implements the following backpressure rules:
// The first request should be equal to 1
// Every next request should be twice more than previous
// The request must be performed only in case the previous was fulfilled

const source = rx.from([1, 2, 3]);

const subsciber = {
  next: (v) => (v = v * 2),
  error: (e) => console.error(e),
  complete: () => console.info('complete'),
};

source.subscribe(subsciber);

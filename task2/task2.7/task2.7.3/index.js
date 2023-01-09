const rx = require('rxjs');
const fs = require('fs');

// todo

// Task 2.7.3
// Enable metrics for your flux. Name your flux as "MyFlux"
// Use Flux#metrics

const source = rx.interval(1000).pipe(
  rx.tap((x) => console.log('Processing: ', x)),
  rx.map((x) => x * x),
  rx.take(4),
  rx.tap((x) => console.log('Processed: ', x))
);

source.subscribe((x) => console.log('Observable 2.7.2: subscription 1: ', x));

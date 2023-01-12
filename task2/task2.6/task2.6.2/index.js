const rx = require('rxjs');
const fs = require('fs');

// Task 2.6.2
// Convert stream to replayable stream. Note, replay provides stream sharing
// Use shareReplay

const shared = rx.interval(1000).pipe(rx.take(6), rx.shareReplay(3));

shared.subscribe((x) => console.log('Observable 2.6.2: sub A: ', x));
shared.subscribe((y) => console.log('Observable 2.6.2: sub B: ', y));

setTimeout(() => {
  shared.subscribe((y) => console.log('Observable 2.6.2: sub C: ', y));
}, 5000);

module.exports = {
  shared,
};

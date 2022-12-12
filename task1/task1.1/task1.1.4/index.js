const rx = require('rxjs');
const { createReadStream } = require('fs');

// Task 1.1.4
// Create an Observable from a Readable stream

const readStream = createReadStream('task1/task1.1/task1.1.4/text.txt', {
  encoding: 'utf-8',
});
const streamObservable = rx.from(readStream);
streamObservable.subscribe((x) => console.log('Observable 1.4:   ', x));

module.exports = {
  readStream,
  streamObservable,
};

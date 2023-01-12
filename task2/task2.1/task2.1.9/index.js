const readline = require('readline');
const fs = require('fs');
const path = require('path');
const rx = require('rxjs');
const stream = require('stream');

// Task 2.1.9
// Using Observable API do the following:

// Open File safely
// Asynchronously read all the lines
// Close opened resource on terminal operation
// Use fs.readFile - it opens the file, reads it and closes
// Use .using

const getReadLine = (fileName) => {
  const input = fs.createReadStream(
    path.resolve('./task2/task2.1/task2.1.9/', fileName)
  );
  const output = new stream.PassThrough({ objectMode: true });
  const rl = readline.createInterface({ input });

  rl.on('line', (line) => {
    output.write(line);
  });

  rl.on('close', () => {
    output.push(null);
  });

  return output;
};

const readFile = (fileName) => {
  return rx.using(
    () => getReadLine(fileName),
    (output) => rx.from(output)
  );
};

console.log('Observable 2.1.9: reading file');
const res = readFile('text.txt');
res.subscribe({ next: console.log });

module.exports = {
  readFile,
};

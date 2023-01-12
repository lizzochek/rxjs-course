const rx = require('rxjs');
const { Client } = require('./client');
const { UploadService } = require('./uploadService');

// You are working with a service which limits you in the number of invocations per second, and the content size you can send at once.
// Given that limitations, you have to transform input Observable in that way, so the required limitations are followed properly as well.

const client = new Client();
const uploadService = new UploadService(client);
const result = uploadService.upload(rx.from([...Array(12).keys()]));

result.subscribe({
  next: (x) => console.log('Task 3.1.4: ' + x),
});

module.exports = {
  result,
};

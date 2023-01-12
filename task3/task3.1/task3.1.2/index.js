const { MediaServer } = require('./mediaServer');
const { ServersCatalog } = require('./serversCatalog');

// Task 3.1.2
// Using the given set of content servers, perform a search on all of them and "download" a result from the fastest

const catalogue = new ServersCatalog();
const server = new MediaServer(catalogue);

const result = server.findVideo('video');
result.subscribe((x) => console.log('Observable 3.1.2: ' + JSON.stringify(x)));

module.exports = {
  result,
};

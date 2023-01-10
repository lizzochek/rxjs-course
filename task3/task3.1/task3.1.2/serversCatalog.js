const { Server } = require('./server.js');

class ServersCatalog {
  serversList = [
    new Server('http://a.com'),
    new Server('http://b.com'),
    new Server('http://c.com'),
    new Server('http://d.com'),
    new Server('http://e.com'),
    new Server('http://f.com'),
  ];
}

module.exports = {
  ServersCatalog,
};

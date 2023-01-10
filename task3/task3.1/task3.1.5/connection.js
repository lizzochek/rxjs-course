const rx = require('rxjs');

class Connection {
  close = () => rx.of('Connection closed');
  rollback = () => rx.of('Transaction rolled back');
  write = (data) => rx.of(`Data is written`);
}

module.exports = {
  Connection,
};

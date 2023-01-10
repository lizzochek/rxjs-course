const rx = require('rxjs');

class DB {
  constructor(name) {
    this.name = name;
  }

  open = () => rx.of('Database opened');
  // To test failed connection
  // open = () => new Error();
  rollbackTransaction = (id) => rx.of(`Rolled back ${id}`);
}

module.exports = {
  DB,
};

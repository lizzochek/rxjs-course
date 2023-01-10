const rx = require('rxjs');
const { Video } = require('./video');

class Server {
  constructor(address) {
    this.address = address;
  }
  search = (name) => {
    const doubled = Math.random() > 0.5 ? true : false;
    return rx
      .of(new Video(name, this.address, 'Some description'))
      .pipe(rx.delay(doubled ? 6000 : 3000));
  };
}

module.exports = {
  Server,
};

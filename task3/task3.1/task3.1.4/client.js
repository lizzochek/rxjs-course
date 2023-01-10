const rx = require('rxjs');

class Client {
  send = (value) => {
    return rx.of(value);
    // to imitate request taking too long:
    // .pipe(rx.delay(1200));
  };
}

module.exports = {
  Client,
};

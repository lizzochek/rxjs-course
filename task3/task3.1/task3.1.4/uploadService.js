const rx = require('rxjs');

class UploadService {
  constructor(client) {
    this.client = client;
  }

  upload = (input) => {
    return input.pipe(
      // MAX amount of sent buffers MUST be less or equals to 50 per request
      // for easier testing we will take lower number
      rx.bufferCount(5),
      rx.concatMap((el) => {
        // send data to a server using the given client
        return this.client.send(el).pipe(
          // in case if send operation take more than 1 second it MUST be considered as hanged and be restarted
          rx.timeout(1000),
          rx.retry({
            count: 2,
          }),
          // frequency of send invocation MUST be not oftener than once per 500 Milliseconds
          rx.delay(500)
        );
      })
    );
  };
}

module.exports = {
  UploadService,
};

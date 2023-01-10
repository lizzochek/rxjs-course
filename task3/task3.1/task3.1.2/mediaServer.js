const rx = require('rxjs');

class MediaServer {
  constructor(catalogue) {
    this.catalogue = catalogue;
  }

  findVideo = (videoName) => {
    return rx.from(this.catalogue.serversList).pipe(
      rx.mergeMap((s) => s.search(videoName)),
      rx.first()
    );
  };
}

module.exports = {
  MediaServer,
};

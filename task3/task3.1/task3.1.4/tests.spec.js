const { result } = require('./index');
const { Client } = require('./client');
const { UploadService } = require('./uploadService');

const rx = require('rxjs');

jest.setTimeout(10000);

describe('Task 3.1.4', () => {
  it('Returns values', (done) => {
    const res = [];

    result.subscribe((x) => res.push(x));

    const clientRes = [];
    const client = new Client();
    client.send = () => rx.throwError('Too long!');
    const service = new UploadService(client);
    const serviceRes = service.upload(rx.from([...Array(12).keys()]));
    serviceRes.subscribe({
      next: (x) => clientRes.push(x),
      error: (err) => clientRes.push('Too long!'),
    });

    setTimeout(() => {
      expect(res).toEqual([
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11],
      ]);
      expect(clientRes).toEqual(['Too long!']);
      done();
    }, 8010);
  });
});

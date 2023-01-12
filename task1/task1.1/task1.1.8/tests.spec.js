const {
  rangeErrorPromiseObservable,
  rangePromiseObservable,
} = require('./index');

describe('Task 1.1.8', () => {
  it('Returns values', (done) => {
    let rangePromiseRes;
    let errMsg;
    rangePromiseObservable.subscribe((x) => (rangePromiseRes = x));
    rangeErrorPromiseObservable.subscribe({
      error: (err) => (errMsg = err.message),
    });

    setTimeout(() => {
      expect(rangePromiseRes).toEqual('Range Promise resolved');
      expect(errMsg).toEqual('Range Promise error');
      done();
    }, 1010);
  });
});

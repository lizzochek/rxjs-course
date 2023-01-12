const { promiseObservable } = require('./index');

describe('Task 1.1.7', () => {
  it('Returns values', (done) => {
    let res;
    promiseObservable.subscribe((x) => (res = x));

    setTimeout(() => {
      expect(res).toEqual('Promise Resolved');
      done();
    }, 2010);
  });
});

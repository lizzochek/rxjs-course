const { result } = require('./index');

describe('Task 1.2.6', () => {
  it('Returns values', (done) => {
    let res;
    result.subscribe((x) => (res = x));

    setTimeout(() => {
      expect(res).toEqual(10);
      done();
    }, 1010);
  });
});

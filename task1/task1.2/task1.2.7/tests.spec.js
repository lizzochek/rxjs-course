const { result } = require('./index');

describe('Task 1.2.7', () => {
  it('Returns values', (done) => {
    let res;
    result.subscribe((x) => (res = x));

    setTimeout(() => {
      expect(res).toEqual(1);
      done();
    }, 1010);
  });
});

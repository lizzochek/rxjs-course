const { result } = require('./index');

describe('Task 3.1.2', () => {
  it('Returns values', (done) => {
    let res;

    result.subscribe((x) => (res = x));
    setTimeout(() => {
      expect(res == undefined).toBe(false);
      done();
    }, 4010);
  });
});

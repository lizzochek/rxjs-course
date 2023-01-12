const { example } = require('./index');

describe('Task 2.5.1', () => {
  it('Returns values', (done) => {
    let res;
    example.subscribe((x) => (res = x));

    setTimeout(() => {
      expect(res).toEqual('Observable 2.5.1: Empty!');
      done();
    }, 1010);
  });
});

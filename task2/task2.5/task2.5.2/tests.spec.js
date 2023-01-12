const { result } = require('./index');

describe('Task 2.5.2', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([1, 2, 3, 'IV', 'V']);
      done();
    }, 1010);
  });
});

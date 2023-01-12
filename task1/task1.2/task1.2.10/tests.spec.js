const { result } = require('./index');

describe('Task 1.2.10', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe({
      next: (x) => res.push(x),
    });

    setTimeout(() => {
      expect(res).toEqual([4]);
      done();
    }, 1010);
  });
});

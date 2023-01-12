const { parallelObservable } = require('./index');

describe('Task 2.2.1', () => {
  it('Returns values', (done) => {
    const res = [];
    parallelObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([4, 5, 6, 1, 2, 3]);
      done();
    }, 1010);
  });
});

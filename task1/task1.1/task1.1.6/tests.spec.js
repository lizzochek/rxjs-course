const { intervalObservable } = require('./index');

describe('Task 1.1.6', () => {
  it('Returns values', () => {
    const res = [];
    intervalObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([0, 1, 2, 3, 4, 5]);
      done();
    }, 5010);
  });
});

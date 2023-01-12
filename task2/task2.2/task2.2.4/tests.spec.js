const { subscribeOnObservable } = require('./index');

describe('Task 2.2.4', () => {
  it('Returns values', (done) => {
    const res = [];
    subscribeOnObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([4, 5, 6, 31, 32, 33]);
      done();
    }, 1010);
  });
});

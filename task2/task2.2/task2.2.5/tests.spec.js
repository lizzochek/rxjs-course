const { subscribeOnObservable } = require('./index');

describe('Task 2.2.4', () => {
  it('Returns values', (done) => {
    const res = [];
    subscribeOnObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([4, 5, 6, 1, 2, 3]);
      done();
    }, 1010);
  });
});

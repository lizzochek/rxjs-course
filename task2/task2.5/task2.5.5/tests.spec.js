const { subscribeOnObservable } = require('./index');

describe('Task 2.5.5', () => {
  it('Returns values', (done) => {
    const res = [];
    subscribeOnObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([1, 2, 3]);
      done();
    }, 2010);
  });
});

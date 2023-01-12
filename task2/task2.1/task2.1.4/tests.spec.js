const { raceObservable } = require('./index');

describe('Task 2.1.4', () => {
  it('Returns values', (done) => {
    const res = [];
    raceObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([1, 2, 3]);
      done();
    }, 1010);
  });
});

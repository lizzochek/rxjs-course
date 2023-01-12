const { combineObservable } = require('./index');

describe('Task 2.1.7', () => {
  it('Returns values', (done) => {
    const res = [];
    combineObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        {
          number: 0,
          letter: 'C',
        },
        {
          number: 1,
          letter: 'C',
        },
      ]);
      done();
    }, 2500);
  });
});

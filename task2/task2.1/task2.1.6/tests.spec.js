const { zipObservable } = require('./index');

describe('Task 2.1.6', () => {
  it('Returns values', (done) => {
    const res = [];
    zipObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        {
          number: 1,
          letter: 'A',
        },
        {
          number: 2,
          letter: 'B',
        },
        {
          number: 3,
          letter: 'C',
        },
      ]);
      done();
    }, 1010);
  });
});

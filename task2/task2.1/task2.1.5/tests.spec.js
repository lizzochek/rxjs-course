const { result } = require('./index');

describe('Task 2.1.5', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        {
          count: 4,
          letter: 'A',
        },
        {
          count: 2,
          letter: 'B',
        },
        {
          count: 2,
          letter: 'C',
        },
      ]);
      done();
    }, 1010);
  });
});

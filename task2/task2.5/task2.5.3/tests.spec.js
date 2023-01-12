const { result } = require('./index');

jest.setTimeout(40000);

describe('Task 2.5.3', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe({
      next: (value) => res.push(value),
      error: (err) => res.push(`Observable 2.5.3: retried 2 times then quit!`),
    });

    setTimeout(() => {
      expect(res).toEqual([
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        0,
        1,
        2,
        3,
        4,
        5,
        `Observable 2.5.3: retried 2 times then quit!`,
      ]);
      done();
    }, 39010);
  });
});

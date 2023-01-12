const { result } = require('./index');

jest.setTimeout(10000);

describe('Task 2.5.8', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe({
      next: (value) => res.push(value),
      error: (err) => res.push('Retried, now quit!'),
    });

    setTimeout(() => {
      expect(res).toEqual([
        0,
        1,
        2,
        0,
        1,
        2,
        0,
        1,
        2,
        0,
        1,
        2,
        'Retried, now quit!',
      ]);
      done();
    }, 7010);
  });
});

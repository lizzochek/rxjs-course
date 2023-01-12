const { result } = require('./index');

describe('Task 2.5.9', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe({
      next: (value) => res.push(value),
      error: (err) => res.push(err.message),
    });

    setTimeout(() => {
      expect(res).toEqual(['Timeout has occurred']);
      done();
    }, 1010);
  });
});

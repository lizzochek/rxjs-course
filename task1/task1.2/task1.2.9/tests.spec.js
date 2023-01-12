const { result } = require('./index');

describe('Task 1.2.9', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe({
      next: (x) => res.push(x),
      complete: () => res.push('completed'),
    });

    setTimeout(() => {
      expect(res).toEqual(['completed']);
      done();
    }, 1010);
  });
});

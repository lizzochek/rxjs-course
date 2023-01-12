const { emptyObservable, neverObservable } = require('./index');

describe('Task 1.1.9', () => {
  it('Returns values', (done) => {
    let emptyRes = [];
    let neverRes = [];
    emptyObservable.subscribe({
      next: () => emptyRes.push('next'),
      complete: () => emptyRes.push('complete'),
    });

    neverObservable.subscribe({
      next: (x) => neverRes.push(x),
      error: (err) => neverRes.push('On error'),
      complete: () => neverRes.push('On complete'),
    });

    setTimeout(() => {
      expect(emptyRes).toEqual(['complete']);
      expect(neverRes).toEqual([]);
      done();
    }, 1010);
  });
});

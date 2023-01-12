const { merged } = require('./index');

describe('Task 2.1.1', () => {
  it('Returns values', (done) => {
    const res = [];
    merged.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([1, 2, 3, 0, 1, 2]);
      done();
    }, 4010);
  });
});

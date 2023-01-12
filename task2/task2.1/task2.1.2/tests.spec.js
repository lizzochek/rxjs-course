const { merged } = require('./index');

describe('Task 2.1.2', () => {
  it('Returns values', (done) => {
    const res = [];
    merged.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([0, 1, 2, 1, 2, 3]);
      done();
    }, 4010);
  });
});

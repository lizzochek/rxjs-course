const { lastTwo } = require('./index');

describe('Task 1.2.4', () => {
  it('Returns values', (done) => {
    const res = [];
    lastTwo.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([99, 100]);
      done();
    }, 1010);
  });
});

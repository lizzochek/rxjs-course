const { source } = require('./index');

jest.setTimeout(12000);

describe('Task 2.3.2', () => {
  it('Returns values', (done) => {
    const res = [];
    source.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res.length).toBeGreaterThan(0);
      done();
    }, 11000);
  });
});

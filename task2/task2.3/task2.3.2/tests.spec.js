const { source } = require('./index');

jest.setTimeout(12000);

describe('Task 2.3.2', () => {
  it('Returns values', (done) => {
    const res = [];
    source.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([[0], [1, 2], [3, 4]]);
      done();
    }, 11000);
  });
});

const { source } = require('./index');

jest.setTimeout(7000);

describe('Task 2.7.2', () => {
  it('Returns values', (done) => {
    const res = [];
    source.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([0, 1, 4, 9]);
      done();
    }, 5010);
  });
});

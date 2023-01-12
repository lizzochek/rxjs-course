const { result } = require('./index');

jest.setTimeout(10000);

describe('Task 2.3.1', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([0, 2, 4, 6, 8, 10]);
      done();
    }, 8010);
  });
});

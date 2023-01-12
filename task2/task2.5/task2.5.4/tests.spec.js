const { result } = require('./index');

jest.setTimeout(10000);

describe('Task 2.5.4', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      done();
    }, 9010);
  });
});

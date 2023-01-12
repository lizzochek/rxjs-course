const { source } = require('./index');

jest.setTimeout(12000);

describe('Task 2.3.2', () => {
  it('Returns values', (done) => {
    const res = [];
    source.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
      ]);
      done();
    }, 10010);
  });
});

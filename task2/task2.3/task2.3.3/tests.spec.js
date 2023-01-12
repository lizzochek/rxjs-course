const { result } = require('./index');

jest.setTimeout(12000);

describe('Task 2.3.3', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        ' 0 1',
        ' 2 3',
        ' 4 5',
        ' 7 8',
        ' 9 10',
        ' 12 13',
        ' 14 15',
        ' 17 18',
        ' 19',
      ]);
      done();
    }, 10010);
  });
});

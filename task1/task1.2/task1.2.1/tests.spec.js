const { observable } = require('./index');

describe('Task 1.2.1', () => {
  it('Returns values', (done) => {
    const res = [];
    observable.subscribe((x) => res.push(x));
    setTimeout(() => {
      expect(res).toEqual([
        JSON.stringify('a'),
        '12',
        JSON.stringify({ name: 'Liza', surname: 'Dolhova' }),
        JSON.stringify([1, 2, 3, 4, 5]),
      ]);
      done();
    }, 1010);
  });
});

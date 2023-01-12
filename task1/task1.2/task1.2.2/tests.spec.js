const { observable } = require('./index');

describe('Task 1.2.2', () => {
  it('Returns values', (done) => {
    const res = [];
    observable.subscribe((x) => res.push(x));
    setTimeout(() => {
      expect(res).toEqual(['aaaaa', 'aaaaaaaaa']);
      done();
    }, 1010);
  });
});

const { stuff } = require('./index');

describe('Task 2.5.7', () => {
  it('Returns values', (done) => {
    const res = [];
    stuff.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual(['spaghetti', 'meatballs']);
      done();
    }, 1010);
  });
});

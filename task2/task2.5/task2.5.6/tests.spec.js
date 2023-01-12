const { lowercaseStuff } = require('./index');

describe('Task 2.5.6', () => {
  it('Returns values', (done) => {
    const res = [];
    lowercaseStuff.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual(['spaghetti', undefined, 'meatballs']);
      done();
    }, 1010);
  });
});

const { tranformObservable } = require('./index');

describe('Task 1.2.5', () => {
  it('Returns values', (done) => {
    const res = [];
    tranformObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual(['ABC', 'CDE']);
      done();
    }, 1010);
  });
});

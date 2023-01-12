const { result, observable } = require('./index');

describe('Task 1.2.3', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe((x) => res.push(x));

    const observableRes = [];
    observable.subscribe((x) => observableRes.push(x));

    setTimeout(() => {
      expect(res).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
      expect(observableRes).toEqual(['abc', 'def']);
      done();
    }, 1010);
  });
});

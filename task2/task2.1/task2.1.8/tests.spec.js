const { switchObservable } = require('./index');

describe('Task 2.1.8', () => {
  it('Returns values', (done) => {
    const res = [];
    switchObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        'Jane likes vanilla',
        'Anna likes chocolate',
        'Markus likes vanilla',
      ]);
      done();
    }, 1010);
  });
});

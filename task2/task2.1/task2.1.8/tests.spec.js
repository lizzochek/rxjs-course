const { switchObservable } = require('./index');

describe('Task 2.1.8', () => {
  it('Returns values', (done) => {
    const res = [];
    switchObservable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        {
          flavour: 'Vanilla',
          name: 'Jane',
        },
        {
          flavour: 'Chocolate',
          name: 'Anna',
        },
        {
          flavour: 'Vanilla',
          name: 'Markus',
        },
      ]);
      done();
    }, 1010);
  });
});

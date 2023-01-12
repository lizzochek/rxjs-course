const { fibonacciObservable, fibonacciObservable2 } = require('./index');

describe('Task 1.1.9', () => {
  it('Returns values', (done) => {
    const sequenceOne = [];
    fibonacciObservable.subscribe((x) => sequenceOne.push(x));
    const sequenceTwo = [0];
    fibonacciObservable2.subscribe((x) => sequenceTwo.push(x));

    setTimeout(() => {
      const expected = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
        2584, 4181, 6765,
      ];
      expect(sequenceOne).toEqual(expected);
      expect(sequenceTwo).toEqual(expected);
      done();
    }, 1010);
  });
});

const { numbersObservable } = require('./index.js');

describe('Task 1.1.1', () => {
  it('Returns a range of values', () => {
    let last = 0;
    numbersObservable.subscribe((data) => {
      expect(data).toBe(last);
      last++;
    });
  });
});

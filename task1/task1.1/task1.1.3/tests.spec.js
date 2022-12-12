const { arrayObservable } = require('./index.js');

describe('Task 1.1.1', () => {
  it('Returns array values', () => {
    let last = 1;
    arrayObservable.subscribe({
      next: (val) => {
        expect(val).toBe(last);
        last += 1;
      },
    });
  });
});

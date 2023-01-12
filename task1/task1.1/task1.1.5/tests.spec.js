const { callbackObservable } = require('./index.js');

describe('Task 1.1.5', () => {
  it('Returns array values', () => {
    callbackObservable.subscribe({
      next: (val) => {
        expect(val).toBe(1);
      },
    });
  });
});

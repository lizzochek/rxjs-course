const { observable } = require('./index.js');

describe('Task 1.1.1', () => {
  it('Returns the right value when subscribed and then completes', (done) => {
    observable.subscribe({
      next: (data) => {
        expect(data).toBe(1);
        expect(data).not.toBe(2);
      },
      complete: () => done(),
    });
  });
});

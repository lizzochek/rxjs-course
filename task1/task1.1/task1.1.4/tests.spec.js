const { streamObservable } = require('./index.js');

describe('Task 1.1.4', () => {
  it('Should create a stream', () => {});

  it('Returns array values', () => {
    streamObservable.subscribe({
      next: (val) => {
        expect(val).toBe('This is a test text');
      },
    });
  });
});

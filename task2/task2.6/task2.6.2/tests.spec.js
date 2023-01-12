const { shared } = require('./index');

jest.setTimeout(7000);

describe('Task 2.6.2', () => {
  it('Returns values', (done) => {
    const sub1 = [];
    const sub2 = [];
    const sub3 = [];

    shared.subscribe((x) => sub1.push(x));
    shared.subscribe((x) => sub2.push(x));
    setTimeout(() => {
      shared.subscribe((x) => sub3.push(x));
    }, 5000);

    setTimeout(() => {
      expect(sub1).toEqual([0, 1, 2, 3, 4, 5]);
      expect(sub2).toEqual([0, 1, 2, 3, 4, 5]);
      expect(sub3).toEqual([1, 2, 3, 4, 5]);
      done();
    }, 6010);
  });
});

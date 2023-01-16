const { shared } = require('./index');

jest.setTimeout(10000);

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
      expect(sub1.length).toBeGreaterThan(4);
      expect(sub2.length).toBeGreaterThan(4);
      expect(sub3.length).toBeGreaterThan(3);
      done();
    }, 7010);
  });
});

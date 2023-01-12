const { source } = require('./index');

describe('Task 2.6.1', () => {
  it('Returns values', (done) => {
    const sub1 = [];
    const sub2 = [];
    const sub3 = [];

    source.subscribe((x) => sub1.push(x));
    source.subscribe((x) => sub2.push(x));
    source.subscribe((x) => sub3.push(x));

    setTimeout(() => {
      expect(sub1).toEqual([0, 1, 4, 9]);
      expect(sub2).toEqual([0, 1, 4, 9]);
      expect(sub3).toEqual([0, 1, 4, 9]);
      done();
    }, 4010);
  });
});

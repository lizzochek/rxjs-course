const { result } = require('./index');

describe('Task 3.1.2', () => {
  it('Returns values', (done) => {
    let res;

    result.subscribe((x) => (res = x));
    setTimeout(() => {
      const equalsExpected =
        JSON.stringify(res) ==
          JSON.stringify({
            name: 'video',
            location: 'http://a.com',
            description: 'Some description',
          }) ||
        JSON.stringify(res) ==
          JSON.stringify({
            name: 'video',
            location: 'http://b.com',
            description: 'Some description',
          });
      expect(equalsExpected).toBe(true);
      done();
    }, 4010);
  });
});

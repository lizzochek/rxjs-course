const { readFile } = require('./index');

describe('Task 2.1.9', () => {
  it('Returns values', (done) => {
    const res = [];
    const observable = readFile('text.txt');
    observable.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        'Lorem ipsum dolor sit amet, ',
        'consectetur adipiscing elit, ',
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ',
        'nisi ut aliquip ex ea commodo consequat. ',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse ',
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ',
        'cupidatat non proident, sunt in culpa qui officia deserunt mollit ',
        'anim id est laborum.',
      ]);
      done();
    }, 1010);
  });
});

const { result } = require('./index');

describe('Task 1.2.11', () => {
  it('Returns values', (done) => {
    const res = [];
    result.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
        17,
        'Fizz',
        19,
        'Buzz',
        'Fizz',
        22,
        23,
        'Fizz',
        'Buzz',
        26,
        'Fizz',
        28,
        29,
        'FizzBuzz',
        31,
        32,
        'Fizz',
        34,
        'Buzz',
        'Fizz',
        37,
        38,
        'Fizz',
        'Buzz',
        41,
        'Fizz',
        43,
        44,
        'FizzBuzz',
        46,
        47,
        'Fizz',
        49,
        'Buzz',
      ]);
      done();
    }, 1010);
  });
});

const { numbersObservable } = require('./index.js');

describe('Task 1.1.1', () => {
  it('Returns a range of values', () => {
    let last = 0;
    numbersObservable.subscribe((data) => {
      expect(data).toBe(last);
      last++;
    });
  });
});

// const { numbersObservable } = require('./index.js');
// const { TestScheduler } = require('rxjs/testing');

// describe('Task 1.1.1', () => {
//   let testScheduler;
//   beforeEach(() => {
//     testScheduler = new TestScheduler((actual, expected) => {
//       return expect(actual).toEqual(expected);
//     });
//   });

//   it('returns simple value', () => {
//     testScheduler.run(({ expectObservable }) => {
//       const expectedMarble = 'a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u';
//       const expectedValues = {
//         a: 0,
//         b: 1,
//         c: 2,
//         d: 3,
//         e: 4,
//         f: 5,
//         g: 6,
//         h: 7,
//         i: 8,
//         j: 9,
//         k: 10,
//         l: 11,
//         m: 12,
//         n: 13,
//         o: 14,
//         p: 15,
//         q: 16,
//         r: 17,
//         s: 18,
//         t: 19,
//         u: 20,
//       };
//       expectObservable(numbersObservable).toBe(expectedMarble, expectedValues);
//     });
//   });
// });

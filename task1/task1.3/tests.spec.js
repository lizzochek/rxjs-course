const rx = require('rxjs');
const { randomGenObservable, observableFunc } = require('./index');

describe('RxJS', () => {
  // Task 1
  // Test an Observable that returns 10 random elements
  it('Should randomGenObservable return 10 random numbers', () => {
    const res = randomGenObservable();
    res
      .pipe(rx.count())
      .subscribe((totalEmissions) => expect(totalEmissions).toEqual(10));
    res.subscribe((value) => expect(typeof value).toBe('number'));
    res.subscribe((value) => expect(value).toBeGreaterThanOrEqual(0));
    res.subscribe((value) => expect(value).toBeLessThan(9000));
  });

  // Task 2
  // Test the given Observable in such a way so execution takes less than a second
  it('should fire', (done) => {
    const myObservable = rx.timer(0, 1000);
    myObservable.subscribe((data) => {
      done();
    });
  }, 1000);

  // Task 3
  // Unit-Test the given function which accepts and produces an Observable. Manually supply required elements
  it('should correctly execute', () => {
    const res = observableFunc(
      rx.from([1, 'abc', [2, 3], { name: 'Anna' }, 4, 5])
    );
    let final = [];
    res.subscribe((x) => final.push(x));
    expect(res).toBeInstanceOf(rx.Observable);
    expect(final).toEqual([2, 'ABC', [2, 3], { name: 'Anna' }, 8, 10]);
  });
});

const rx = require('rxjs');

// Task 1

function* generateTen(min, max) {
  for (let i = 0; i < 10; i++) {
    yield Math.ceil(Math.random() * (max - min) + min);
  }
}

const randomGenObservable = () => rx.from(generateTen(0, 9000));

// Task 3

const mapFunc = (x) => {
  if (typeof x === 'string') return x.toUpperCase();
  if (typeof x === 'number') return x * 2;
  else return x;
};

const observableFunc = (observable) => {
  const res = [];
  observable.pipe(rx.map((x) => mapFunc(x))).subscribe((x) => res.push(x));
  return rx.from(res);
};

module.exports = {
  randomGenObservable,
  observableFunc,
};

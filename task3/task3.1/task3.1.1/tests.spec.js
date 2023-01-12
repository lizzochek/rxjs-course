const { res, totalPrice } = require('./index');
const { Order } = require('./order');

describe('Task 3.1.1', () => {
  it('Returns values', (done) => {
    const order = new Order();
    const result = [];
    let price;
    res.subscribe((x) => result.push(x));
    totalPrice.subscribe((x) => (price = x));

    setTimeout(() => {
      expect(result).toEqual([
        {
          id: 30,
          name: 'XBox',
          price: 30000,
        },
      ]);
      expect(price).toEqual(60000);
      done();
    }, 1010);
  });
});

const rx = require('rxjs');
const { Order } = require('./order');
const { ProductsCatalog } = require('./productsCatalog');

// Task 3.1.1
// Implement business logic UserActivityUtils in such a way,
// so it provides you with the most expensive product in the given order

const catalog = new ProductsCatalog();
const order = new Order(1, 2, [10, 20, 30], catalog);

const userActivityUtils = (productsCatalog, order) => {
  return rx.from(order.productsIds).pipe(
    rx.map(productsCatalog.findById),
    rx.tap((x) => console.log(x)),
    rx.reduce((product, product2) =>
      product.price > product2.price ? product : product2
    )
  );
};

const res = userActivityUtils(catalog, order);

res.subscribe((x) =>
  console.log('Observable 3.1.1: the most expensive ' + JSON.stringify(x))
);

const totalPrice = order.getTotalPrice();
totalPrice.subscribe((x) =>
  console.log('Observable 3.1.1: total price ' + JSON.stringify(x))
);

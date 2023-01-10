const rx = require('rxjs');

// Edit method Order .getTotalPrice so it calculates total order price
// (sum all the costs for all the products in order)

class Order {
  constructor(id, userId, productsIds = [], productCatalog = {}) {
    this.id = id;
    this.userId = userId;
    this.productsIds = productsIds;
    this.productCatalog = productCatalog;
  }

  getTotalPrice = () => {
    return rx.from(this.productsIds).pipe(
      rx.map(this.productCatalog.findById),
      rx.tap((x) => console.log(x)),
      rx.reduce((sum, prod2) => sum + prod2.price, 0)
    );
  };
}

module.exports = {
  Order,
};

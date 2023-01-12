const { Product } = require('./product');

class ProductsCatalog {
  productNames = [
    'Phone',
    'TV',
    'SonyPlayStation',
    'XBox',
    'Battery',
    'Lamp',
    'Toaster',
  ];

  findById = (id) => {
    return new Product(
      id,
      // to test, we will set exact values to price and name
      this.productNames[id / 10],
      // this.productNames[Math.floor(Math.random() * this.productNames.length)],

      id * 1000
      // Math.floor(Math.random() * 10000)
    );
  };
}

module.exports = {
  ProductsCatalog,
};

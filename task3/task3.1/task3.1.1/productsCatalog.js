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
      this.productNames[Math.floor(Math.random() * this.productNames.length)],
      Math.floor(Math.random() * 10000)
    );
  };
}

module.exports = {
  ProductsCatalog,
};

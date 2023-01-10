class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  //  equals(Object o) {
  //     if (this == o) return true;
  //     if (o == null || getClass() != o.getClass()) return false;

  //     Product product = (Product) o;

  //     if (price != product.price) return false;
  //     if (id != null ? !id.equals(product.id) : product.id != null) return false;
  //     return name != null ? name.equals(product.name) : product.name == null;
  // }

  // @Override
  // public int hashCode() {
  //     int result = id != null ? id.hashCode() : 0;
  //     result = 31 * result + (name != null ? name.hashCode() : 0);
  //     result = 31 * result + (int) (price ^ (price >>> 32));
  //     return result;
  // }
}
module.exports = {
  Product,
};

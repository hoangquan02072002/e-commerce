class queryProducts {
  products = [];
  query = {};

  constructor(products, query) {
    this.products = products;
    this.query = query;
  }

  categoryQuery = () => {
    this.products = this.query.category
      ? this.products.filter((c) => c.category === this.query.category)
      : this.products;
    return this;
  };

  ratingQuery = () => {
    this.products = this.query.rating
      ? this.products.filter(
          (c) =>
            parseInt(this.query.rating) <= c.rating &&
            c.rating < parseInt(this.query.rating) + 1
        )
      : this.products;
    return this;
  };

  searchQuery = () => {
    this.products = this.query.searchValue
      ? this.products.filter(
          (p) =>
            p.name.toUpperCase().indexOf(this.query.searchValue.toUpperCase()) >
            -1
        )
      : this.products;
    return this;
  };

  priceQuery = () => {
    const lowPrice = this.query.low || this.query.lowPrice;
    const highPrice = this.query.high || this.query.highPrice;

    if (lowPrice && highPrice) {
      this.products = this.products.filter(
        (p) =>
          p.price >= parseFloat(lowPrice) && p.price <= parseFloat(highPrice)
      );
    }
    return this;
  };

  sortByPrice = () => {
    if (this.query.sortPrice) {
      if (this.query.sortPrice === "low-to-high") {
        this.products = this.products.sort((a, b) => a.price - b.price);
      } else {
        this.products = this.products.sort((a, b) => b.price - a.price);
      }
    }
    return this;
  };

  skip = () => {
    const pageNumber = parseInt(this.query.pageNumber) || 1;
    const parPage = parseInt(this.query.parPage) || 12;
    const skipPage = (pageNumber - 1) * parPage;

    if (skipPage > 0 && skipPage < this.products.length) {
      this.products = this.products.slice(skipPage);
    } else if (skipPage >= this.products.length) {
      this.products = [];
    }
    return this;
  };

  limit = () => {
    const parPage = parseInt(this.query.parPage) || 12;
    this.products = this.products.slice(0, parPage);
    return this;
  };

  getProducts = () => {
    return this.products;
  };

  countProducts = () => {
    return this.products.length;
  };
}

module.exports = queryProducts;

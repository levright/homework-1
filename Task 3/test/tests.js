const expect = require("chai").expect;
const { Product, searchProduct } = require("../main");

console.log(typeof Product);

describe("Задание 3", function () {
  describe("new Product()", function () {
    it("Экземпляр класса создаётся корректно", function() {
      expect(new Product()).to.be.instanceof(Product);
    });
  });

  describe("searchProduct()", function () {
    let products = [];
    products.push(new Product("Name with TEST in name 1", 3.50, 3, "Description 1"));
    products.push(new Product("TEST starts name", 4, 5, "Description TEST include"));
    products.push(new Product("Name ends TEST", 4.50, 7, "TEST starts description"));
    products.push(new Product("Name 1", 5, 9, "Description ends TEST"));


    it("Пустой поиск, возвращает весь список", function() {
      let query = "";
      expect(searchProduct(query, products)).to.be.eql(products);
    });

    it("Поиск по одному параметру", function() {
      let query = "price-=4";
      let output = [ products[1] ];

      expect(searchProduct(query, products)).to.be.eql(output);
    });

    it("Поиск по двум параметрам", function() {
      let query = "price->4&quantity-<10";
      let output = [ products[2], products[3] ];

      expect(searchProduct(query, products)).to.be.eql(output);
    });

    it("Поиск по трём параметрам", function() {
      let query = "price->4&quantity->2&name-ends-test";
      let output = [ products[2] ];

      expect(searchProduct(query, products)).to.be.eql(output);
    });

    it("Поиск по четырём параметрам", function() {
      let query = "description-contains-test&price->=4&quantity-<=6&name-starts-test";
      let output = [ products[1] ];

      expect(searchProduct(query, products)).to.be.eql(output);
    });

  });
});
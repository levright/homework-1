class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }

  checkStrParam(param, method, str) {
    return this.#strMethods[method](param, str);
  }

  checkNumParam(param, method, value) {
    return this.#numMethods[method](param, value);
  }

  #strMethods = {
    "contains": (param, str) => this[param].toLowerCase().includes(str),
    "starts": (param, str) => this[param].toLowerCase().startsWith(str),
    "ends": (param, str) => this[param].toLowerCase().endsWith(str),
  }

  #numMethods = {
    "=" : (param, value) => this[param] == value,
    ">" : (param, value) => this[param] > value,
    "<" : (param, value) => this[param] < value,
    "<=" : (param, value) => this[param] <= value,
    ">=" : (param, value) => this[param] >= value,
  }
}

// Функция фильтрации товаров из списка
// Принимает запрос типа string и список товаров класса Product
function searchProduct(query, products) {
  // Если запрос пустой возвращаем список со всеми товарами
  if (query.length == 0) return products;

  // Разбиваем строку запроса на элементы по симвлоу '&'
  let splitQuery = query.split("&");

  // Создаем пустой список для подходящих товаров
  let founds = [];

  // Запускаем цикл по всем товарам
  productLoop:
  for (let item of products) {
    // Для каждого товара запускаем цикл по критериям из запроса
    for (let check of splitQuery) {
      // Устанавливаем проверяемый параметр
      let param = check.split("-")[0];

      // Проверяем строковые параметры по критериям.
      // Если проходит - продолжаем цикл, если нет - переходим к следующему товару
      if (param == "name" || param == "description") {
        let [ , method, str ] = check.split("-");

        if (item.checkStrParam(param, method, str)) continue 
        else continue productLoop;
      }

      // Проверяем числовые параметры по критериям.
      // Если проходит - продолжаем цикл, если нет - переходим к следующему товару
      if (param == "price" || param == "quantity") {
        let opWithValue = check.split("-")[1];
        let [ op, value ] = ( isNaN(opWithValue[1]) ) ? 
          [ opWithValue.slice(0, 2), +opWithValue.slice(2) ] : 
          [ opWithValue.slice(0, 1), +opWithValue.slice(1) ];

        if (item.checkNumParam(param, op, value)) continue 
        else continue productLoop;
      }
    }
    // Если товар подходит по всем параметрам добавляем его в массив output
    founds.push(item);
  }
  // Возвращаем массив подходящих товаров
  return founds;
}

let products = [];
products.push(new Product("Name with TEST in name 1", 3.50, 3, "Description 1"));
products.push(new Product("TEST starts name", 4, 5, "Description TEST include"));
products.push(new Product("Name ends TEST", 4.50, 7, "TEST starts description"));
products.push(new Product("Name 1", 5, 9, "Description ends TEST"));

let testQuery = "name-contains-fd&price-=2&quantity->5&description-ends-abc";

let output = searchProduct(testQuery, products);

item = products[2]


module.exports = { Product, searchProduct};
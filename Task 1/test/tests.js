const expect = require("chai").expect;
const {capitalize, removeExtraSpaces, countWords, uniqWords} = require("../main");

describe('Задание 1', function () {
  describe('capitalize()', function () {
    let input = "rAnDom TEST text";
    let output = "Random test text";

    it("Преобразование строки к нижнему регистру, но первая буква большая", () => {
      expect(capitalize(input)).to.equal(output);
    });
  });

  describe('removeExtraSpaces()', function () {
    let input = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
    let output = "Вот пример строки, в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.";

    it("Преобразование строки с целью правильно расстановки пробелов.", () => {
      expect(removeExtraSpaces(input)).to.equal(output);
    });
  });

  describe('countWords()', function () {
    let input = "Волшебная строка из пяти слов";
    let output = 5;

    it("Подсчитывает количество слов в строке", () => {
      expect(countWords(input)).to.equal(output);
    });
  });

  describe('uniqWords()', function () {
    let input = "Текст, в котором слово текст несколько раз встречается и слово тоже";
    let output = new Map();
    output
      .set('слово', 2)
      .set('текст', 2)
      .set('в', 1)
      .set('встречается', 1)
      .set('и', 1)
      .set('котором', 1)
      .set('несколько', 1)
      .set('раз', 1)
      .set('тоже', 1)

    it("Подсчитывает количество каждого слова в строке", () => {
      expect(uniqWords(input)).to.eql(output);
    });
  });
});

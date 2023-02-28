// Возвращает строку где первая буква в верхнем регистре, остальные в нижнем
function capitalize(str) {
  return (str.length) ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str;
}

// Возвращает строку, убирает лишние пробелы и добавляет пробелы после знаков препинания
function removeExtraSpaces(str) {
  return str.replace(/\s+/g, " ")
    .replace(/\s?\,+\s?/g, ", ")
    .replace(/\s?\.+\s?/g, ". ")
    .trim();
}

// Возвращает количество слов в строке
function countWords(str) {
  return str.split(" ").length;
}

/*
Возвращает объект map где ключ это слово в строке, а значение - сколько раз это 
слово встречается в строке. Map отсортирован два раза - по алфавиту и по количеству 
*/
function uniqWords(str) {
  let words = new Map();

  for (let word of str.replace(/[^а-яА-Я\w+]+/g, " ").trim().split(" ")) {
    word = word.toLowerCase()
    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    } else {
      words.set(word, 1);
    }
  }

  return new Map(Array.from(words).sort().sort((a, b) => b[1] - a[1]));
}

module.exports = {capitalize, removeExtraSpaces, countWords, uniqWords};
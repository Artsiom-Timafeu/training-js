'use strict'

// Написать функцию toMachineName(name, separator), где name - это строка, которая должна быть преобразована в kebab-case строку, а separator - это символ разделитель. Результатом работы функции должна быть строка в нижнем регистре, состоящая из букв латинского алфавита или цифр (не может быть в первой позиции) без дубликатов символов сепаратора.
// Примеры (в качестве разделителя выбран “-”):
// 1. “Hello, my name is Andrew” -> “hello-my-name-is-andrew”
// 2. “Lorem ipsum sit DOLOR” -> “lorem-ipsum-sit-dolor”
// 3. “3 basics and 1 advance” -> “basics-and-1-advance”

function toMachineName (name, separator) {
  const kebabString = name
    .replace(/\s/g, separator)
    .toLowerCase()
    .replace(/[,]/g, '')
  return kebabString
};

console.log(toMachineName('Hello, my name is Andrew', '-'))
console.log(toMachineName('Lorem ipsum sit DOLOR', '-'))
console.log(toMachineName('3 basics and 1 advance', '-'))

// Написать функцию formatCurrency(amount), которая будет преобразовывать число (или строковое представление числа) в следующий формат: тысячи, миллионы, миллиарды разделяются запятой, дробная часть отделяется точкой, причем она округляется до сотых долей в меньшую сторону. Примеры:
// 1. 2546.2562 -> “2,546.25”
// 2. “1500.342626” -> “1,500.34”
// 3. 100.2134 -> “100.21”

function formatCurrency (amount) {
  const incomingAmounts = Math.floor((amount) * 100) / 100
  const money = incomingAmounts
    .toLocaleString()
    .replace(/,/g, '.')
    .replace(/\s/g, ',')
  console.log(money)
};

formatCurrency(2546.2562)
formatCurrency(1500.342626)
formatCurrency(100.2134)

// Написать функцию alphabetized(text), сортирующую строку в алфавитном порядке. Пробелы и символы пунктуации должны быть исключены. Примеры:
// 1. “The Holy Bible.” -> “BbeehHilloTy”
// 2. “Hello!!!!!!!!!!!!!!!!!!!!!!” -> “eHllo”

// function alphabetized (text) {
//   const str = text.split('').sort(sortLetter).join('').replace(/(\.|!|\s)/g, '')
//   function sortLetter (a, b) {
//     if (a.toLowerCase() > b.toLowerCase()) { return 1 }
//     if (a.toLowerCase() < b.toLowerCase()) { return -1 } else { return 0 }
//   };

//   console.log(str)
// }

function alphabetized (text) {
  const str = text
    .replace(/\.|,|!|\s/g, '')
    .split('')
    .sort()
  console.log(str)
}

alphabetized('The Holy Bible.')
alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!!')

// Написать функцию countDuplicates(text), которая будет возвращать количество символов, имеющих дубликаты (не чувствительна к регистру). Примеры: 1. “abcde” -> 0
// 2. “aabbcde” -> 2 (“a” имеет дубликат, “b” тоже имеет дубликат)
// 3. “aabBcde” -> 2 (так как функция не чувствительна к регистру и “b” и “B” для нее один и тот же символ)
// 4. “indivisibility” -> 1 (так как “i” повторяется 7 раз)
// 5. “aA11” -> 2 (“1” - тоже символ, который имеет дубликат)

// function countDuplicates (text) {
//   const x = text.toLowerCase().split('').sort().join('')
//   for (let i = 0; i < text.length; i++) {
//     // eslint-disable-next-line no-self-compare
//     if (x = / /) {
//       console.log(x)
//     }
//   }
// }
// countDuplicates('aabbcde')
// countDuplicates('aabBcde')
// countDuplicates('indivisibility')
// countDuplicates('aA11')

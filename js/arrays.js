/* eslint-disable no-return-assign */
/* eslint-disable no-tabs */
'use strict'

function sumAverage (arr) {
  const averagesBox = []
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i].reduce((a, b) => a + b)
    const avg = sum / arr[i].length
    averagesBox.push(avg)
  }
  return averagesBox.reduce((a, b) => a + b)
};

console.log(sumAverage([[1, 2, 2, 1], [2, 2, 2, 1], [2, 7, 8, 1]]))

// 1. Вычислить среднее арифметическое каждого массива
// 2. Сложить все средние арифметические
// 3. Округлить в меньшую сторону

// ---

function maxTripletSum (arr) {
  const max = arr
    .sort()
    .filter((number, index) => arr
      .indexOf(number) === index)
  return max
    .slice(-3)
    .reduce((a, b) => a + b)
};

console.log(maxTripletSum([3, 2, 6, 8, 8, 2, 3, 8]))

// 1. Найти три максимальных элемента (дубликаты игнорируются), в данном примере это 6, 8 и 3
// 2. Вычислить их сумму

// ---

// Написать функцию flattenAndSort(arr), которая принимает в качестве аргумент двумерный массив, состоящих из чисел. Функция возвращает отсортированный сведенный одномерный массив. Пример:
// [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

function flattenAndSort (arr) {
  const result = []
  arr.forEach(loop1 => {
    loop1.forEach(loop2 => {
      result.push(loop2)
    })
  })
  return result.sort()
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

const array = [
  [5, 9, 1, 0],
  [8, 7, 2, 3],
  [1, 4, 1, 9],
  [2, 3, 8, 2]
]

function diagonalSum () {
  return array.reduce((acc, value, index) => {
    acc += value[index]
    return acc
  }, 0)
}
console.log(diagonalSum(array))

// Написать функцию replaceWithAlphPositions, которая заменяет буквы на их позиции в алфавите (“a” = 1, “b” = 2 и так далее). Все остальные символы игнорируются. Примеры:
// 1. “The sunset sets at twelve o’clock.” -> “20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11”

function replaceWithAlphPositions (text) {
  const indexBox = []
  const alhabet = '-abcdefghijklmnopqrstuvwxyz'
  const alhabetModifi = alhabet
    .toUpperCase()
    .split('')
  const textModifi = text
    .replace(/\s|’|\./g, '')
    .toUpperCase()
    .split('')
    textModifi.forEach(el => {
    if (textModifi[''] === alhabetModifi['']) {
      const modifi = alhabetModifi.indexOf(el)
      indexBox.push(modifi)
    }
  })
  return indexBox
}

console.log(replaceWithAlphPositions('The sunset sets at twelve o’clock.'))

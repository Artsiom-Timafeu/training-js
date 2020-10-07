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
  const max = arr.sort().filter((number, index) => arr.indexOf(number) === index)
  return max.slice(-3).reduce((a, b) => a + b)
};
console.log(maxTripletSum([3, 2, 6, 8, 8, 2, 3, 8]))

// 1. Найти три максимальных элемента (дубликаты игнорируются), в данном примере это 6, 8 и 3
// 2. Вычислить их сумму

// ---

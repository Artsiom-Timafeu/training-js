// Давай, еще одно сравнение сделаешь и скажешь результаты. Задание будет частично на поиск. С помощью console можно, на самом деле, замерить время. Твоя задача узнать, сколько времени нужно на перебор массива через for и через forEach. Длина массива должна быть определенная: тест на 1000, 10000, 100000 и 1000000 элементов

// В цикле нужно обратиться к элементу, например:
// for (let i = 0; i < array.length; i += 1) {
//   array[i];
// }

// Жду от тебя результатов, сколько займет обработка массива каждой длины через for и forEach

const arr1000 = new Array(1000)
const arr10000 = new Array(10000)
const arr100000 = new Array(100000)
const arr1000000 = new Array(1000000)

function testTimeFor (arr) {
  for (let i = 0; i < arr.length; i++) {
  }
}

console.time('time for')
testTimeFor(arr1000)
console.timeEnd('time for')

console.time('time for')
testTimeFor(arr10000)
console.timeEnd('time for')

console.time('time for')
testTimeFor(arr100000)
console.timeEnd('time for')

console.time('time for')
testTimeFor(arr1000000)
console.timeEnd('time for')

function testTimeForEach (arr) {
  arr.forEach(element => {
  })
}

console.time('time ForEach')
testTimeForEach(arr1000)
console.timeEnd('time ForEach')

console.time('time ForEach')
testTimeForEach(arr10000)
console.timeEnd('time ForEach')

console.time('time ForEach')
testTimeForEach(arr100000)
console.timeEnd('time ForEach')

console.time('time ForEach')
testTimeForEach(arr1000000)
console.timeEnd('time ForEach')

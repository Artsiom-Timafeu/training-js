"use strict";

// function sumAverage(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		const average = arr[i].reduce((total, number, index, array) => (total + number) / array.lenght); // почему так не работает ?
// 		console.log(average);
// 	}
// };

// function sumAverage(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		const average = arr[i].reduce((total, number, index, array) => {
// 			total += number;
// 			if (index === array.length - 1) {
// 				return total / array.length;
// 			} else {
// 				return total;
// 			}
// 		})
// 		console.log(average); // как обратиться к каждому результату из цикла что бы их сложить?
// 	}
// };

function sumAverage(arr) {
	const average0 = arr[0].reduce((total, number, index, array) => {
		total += number;
		if (index === array.length - 1) {
			return total / array.length;
		} else {
			return total;
		}
	});

	const average1 = arr[1].reduce((total, number, index, array) => {
		total += number;
		if (index === array.length - 1) {
			return total / array.length;
		} else {
			return total;
		}
	});

	console.log(average0);
	console.log(average1);

	console.log(Math.floor(average0 + average1));
};

sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);

// 1. Вычислить среднее арифметическое каждого массива 
// 2. Сложить все средние арифметические 
// 3. Округлить в меньшую сторону 


//---

function maxTripletSum(arr) {

	let max = arr.sort();
	const num1 = max.pop();
	const num2 = max.pop();
	const num3 = max.pop();
	console.log(num1 + num2 + num3);
	// если массив больше не нужен
};

maxTripletSum([3, 2, 6, 8, 2, 3]);

// 1. Найти три максимальных элемента (дубликаты игнорируются), в данном примере это 6, 8 и 3 
// 2. Вычислить их сумму


//---

function biggest(nums) {
	const firstNum = nums.sort(() => Math.max());
	console.log(firstNum.join('').toString());
	console.log(firstNum.join('') + '');
};

biggest([1, 2, 3]);
biggest([3, 30, 34, 5, 9]);

// Написать функцию biggest(nums), которая принимает в качестве аргумента массив чисел и возвращает строковое значение максимально возможной комбинации: 
// 1. [1, 2, 3] -> “321” 
// 2. [3, 30, 34, 5, 9] -> “9534330”


//---


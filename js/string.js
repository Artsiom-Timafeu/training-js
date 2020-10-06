'use strict';

// Написать функцию toMachineName(name, separator), где name - это строка, которая должна быть преобразована в kebab-case строку, а separator - это символ разделитель. Результатом работы функции должна быть строка в нижнем регистре, состоящая из букв латинского алфавита или цифр (не может быть в первой позиции) без дубликатов символов сепаратора. 
// Примеры (в качестве разделителя выбран “-”): 
// 1. “Hello, my name is Andrew” -> “hello-my-name-is-andrew” 
// 2. “Lorem ipsum sit DOLOR” -> “lorem-ipsum-sit-dolor” 
// 3. “3 basics and 1 advance” -> “basics-and-1-advance” 


function toMachineName(name, separator) {
	let kebabString = name.replace(/\s/g, separator).toLowerCase().replace(/[,]/g, '');
	console.log(kebabString);
};

toMachineName('Hello, my name is Andrew', '-');
toMachineName('Lorem ipsum sit DOLOR', '-');
toMachineName('3 basics and 1 advance', '-');

// Написать функцию formatCurrency(amount), которая будет преобразовывать число (или строковое представление числа) в следующий формат: тысячи, миллионы, миллиарды разделяются запятой, дробная часть отделяется точкой, причем она округляется до сотых долей в меньшую сторону. Примеры: 
// 1. 2546.2562 -> “2,546.25” 
// 2. “1500.342626” -> “1,500.34” 
// 3. 100.2134 -> “100.21”

function formatCurrency(amount) {
	let x = Math.floor((amount) * 100) / 100;
	let money = x.toLocaleString().replace(/,/g, '.').replace(/\s/g, ',');
	console.log(money);
};

formatCurrency(2546.2562);
formatCurrency(1500.342626);
formatCurrency(100.2134);

// Написать функцию alphabetized(text), сортирующую строку в алфавитном порядке. Пробелы и символы пунктуации должны быть исключены. Примеры: 
// 1. “The Holy Bible.” -> “BbeehHilloTy” 
// 2. “Hello!!!!!!!!!!!!!!!!!!!!!!” -> “eHllo”

function alphabetized(text) {
	let str = text.split('').sort(sortLetter).join('').replace(/(\.|!|\s)/g, '');
	function sortLetter(a, b) {
		if (a.toLowerCase() > b.toLowerCase())
			return 1;
		if (a.toLowerCase() < b.toLowerCase())
			return -1;
		else
			return 0;
	};

	console.log(str);
}
alphabetized('The Holy Bible.');
alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!!');
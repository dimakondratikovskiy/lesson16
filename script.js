document.write('---- Задание1 ----' + '<br>');
let s = 'aaa@bbb@ccc';
document.write(s.replace(/@/g, '!'));

document.write('<br>' + '---- Задание2 ----' + '<br>');
let date = '2025-12-31';
document.write(date.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));

document.write('<br>' + '---- Задание3 ----' + '<br>');
let str = 'Я учу javascript!';
document.write(str.substring(2, 16) + '\n');
document.write(str.substr(2, 14) + '\n');
document.write(2, 16);

document.write('<br>' + '---- Задание4 ----' + '<br>');
let array = [4, 2, 5, 19, 13, 0, 10],
	 sum = 0;
for (let i = 0; i < array.length; i++) {
	array[i] = Math.pow(array[i], 3);
	sum += array[i];
}
document.write('Квадратный корень из суммы кубов элементов массиваб' + Math.sqrt(sum));

document.write('<br>' + '---- Задание5 ----' + '<br>');
let a = prompt('5задание. Введите переменную а:'),
	 b = prompt('5задание. Введите переменную b:'),
	 c = a - b;
alert('5 задание. Переменная с: ' + Math.abs(c));

document.write('<br>' + '---- Задание6 ----' + '<br>');
function date_now(n) {
	if (n > 0 && n < 10) {
		return '0' + n;
	} else {
		return n;
	}
}
let datenow = new Date();
document.write(datenow.getHours() + ':' + datenow.getMinutes() + ':' + datenow.getSeconds() + ' ' + date_now(datenow.getDate()) + '.' + date_now(datenow.getMonth() + 1) + '.' + date_now(datenow.getFullYear()));

document.write('<br>' + '---- Задание7 ----' + '<br>');
let str2 = 'aa aba abba abbba abca abea';
console.log(str2.match(/ab+a/g));

document.write('<br>' + '---- Задание8 ----' + '<br>');
function phone(namber) {
	let regexp = /\+?\s?\d{2,3}\s?[-(]?\d{2}\s?[-)]?\s?\d{3}[-]?\d{2}[-]?\d{2}[-]?/gi;
	if (regexp.test(namber) == false) {
		return false;
	} else {
		return true;
	}
}
console.log('8задание. Введите номер телефона:');

document.write('<br>' + '---- Задание9 ----' + '<br>');
function getemail(email) {
	let regexp = /^([a-z]+[\d-_\.]*){3,}@[a-z]+\.[a-z]{2,11}$/gi;
	if (regexp.test(email) == false) {
		return false;
	} else {
		return true;
	}
}
console.log(getemail(prompt('9задание. Введите email:')));

document.write('<br>' + '---- Задание10 ----' + '<br>');
function adr(a) {
	let regexp = /(^[a-z:\/]*[a-z\.?]+\.[a-z]{2,4})([\w-\/]*)([\?\=\&\w-\/]*)([\#\w]*)/i;
	arr = a.match(regexp);
	for (let i = 1; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
let arr = [];
adr('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');





































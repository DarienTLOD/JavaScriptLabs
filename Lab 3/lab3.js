'use strict'
//1
////Создайте объект lab3, у которого есть следующие свойства:
////id -- номер вашей бригады
////students -- массив из строк, содержит фамилии и имена студентов выполнявших задание. 
//////количество строк -- количество человек в бригаде
////teacher - полное ФИО преподавателя.

var lab3 = {
	id: 4,
	students: ["Соболь Елена", "Игнатюк Вероника"],
	teacher: "Безручко Алексей Николаевич"
}


//2
////Разработайте функцию checkProp, которая принимает в качестве параметров
////объект и название свойства
////если объект содержит указанное свойство, то функция возвращает значение этого свойства
////в противном случае функция возвращает false

function checkProp(obj, propertyName){
if (obj[propertyName]!== undefined){
		return obj[propertyName];
	}
	return false;
}


// !!!! НЕ СДЕЛАЛА :(
//3
////Добавьте в объект lab3 метод getAllProperties
////который принимает объект
////и возвращает строку, которая содержит имена всех свойств этого
////объекта записанные через ', ' в алфавитном порядке
/*
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

lab3.getAllProperties = function(obj){
	var result = "";
	for (var i in obj) {
		
					var mass = [i];
			result += ', ' + i;
		//	lab3.sort(compareNumeric);
		
	}
	
	
	return result;
}
*/

lab3.getAllProperties = function(obj){
    var properties = [];
    
    for (var prop in obj) {
        properties.push(prop);
    }
    properties.sort();
    
    return properties.join(", ");
}


//4
////Добавьте в объект lab3 метод clone object
////который принимает объект
////и возвращает его клона.

lab3['clone object'] = function(obj){
	var clone = {}; // новый пустой объект
	// скопируем в него все свойства obj
	for (var key in obj) {
	   clone[key] = obj[key];
	}
	return clone;
	}

//5
////Разработайте функцию addToBeginingOfArray которая принимает два аргумента. второй аргумент массив.
////функция добавляет первый аргумент в начало массива, переданного во втором аргументе.
////если массив не указан, то функция создает новый пустой массив и добавляет в него элемент.
////функция возвращает полученный массив.

function addToBeginingOfArray(arg, array){
	if (typeof array == 'undefined'){
		var array = [];
	}
	array.unshift(arg);
	return array;
}


//6
////Разработайте функцию getLastElement которая принимает массив.
////функция возвращает последний элемент, удаляя его из массива

function getLastElement(arr){
	if (typeof arr != 'undefined') 
	return arr.pop();
}


//7
////Разработайте функцию getFirstElement которая принимает массив.
////функция возвращает первый элемент, удаляя его из массива

function getFirstElement(arr){
	if (arr !== undefined) 
	return arr.shift();
}



//8
////Разработайте функцию addToEndOfArray которая принимает любое количество аргументов.
////если первый аргумент массив, то все остальные аргументы добавляются в конец этого массива.
////Если первый аргумент не массив, то все аргументы функции добавляются в новый массив
////функция возвращает полученный массив.

function addToEndOfArray(){
	var i = 0;
	var array = [];
		if  (typeof arguments[0] == 'object'){
			i = 1; 
			array = arguments[0];
		}

		for (i; i < arguments.length; i++) {
			array.push(arguments[i]);
		}
		return  array;
}

	/*
	if  (typeof arguments[0] == 'object'){
		 for (var i = 1; i < arguments.length; i++) {
			 arguments[0].push(arguments[i]);
		 }
		 return  arguments[0];
	}
		var array = [];
		for (var i = 0; i < arguments.length; i++) {
		array.push(arguments[i]);
	}
		return  array;
		
		*/

//9
////Разработайте функцию setSize, которая принимает массив в качеств первого аргумента
////если вторым аргументом передано положительное число, которое меньше чем длина массива,
////то функция укорачивает массив до указанной длины.
////В проитвном случае функция возвращает длину массива

function setSize(arr, num){
	if (parseInt(num) >= 0 && parseInt(num) < arr.length){
		return arr.length = num;
	}
	return arr.length;
}


//10
////Разработайте функцию remove3, которая принимает строку
//// и удаляет из этой строки 3 слова,
////которые занимают 3-5 места при сортировке слов по алфавиту
////иставшиеся слова возвращаются в отсортированном по алфавиту массиве.
////слова в строке разделяются пробелом.

function remove3(string){
	var array = string.split(' ');
	array.sort();
	array.splice(2,3);
	return array;
}


//11
////Разработайте функцию sortCars, которая принимает массив объектов car 
////с тремя полями brand - марка автомобиля, model - модель, year - год выпуска
////функция должна отсортировать автомобили по марке(по алфавиту), 
////если марки одинаковые, то по модели (по алфавиту),
////Если модели совпадают, то по убавынию года выпуска 
////функция sort у массива должна быть вызвана только один раз
function sortCars(arr) {
    arr.sort(function(a, b) {
        return (a.brand > b.brand) - (b.brand > a.brand) || (a.model > b.model) - (b.model > a.model) || (a.year > b.year) - (b.year > a.year);
    });
}

//12
////Разработайте функцию updateCase, которая принимает массив объектов car 
////с тремя полями brand - марка автомобиля, model - модель, year - год выпуска
////не используя операторов цикла функция заменяет регистр всех строковых полей на верхний
 
 function updateCase(array){
	array.forEach(function (element) {
		element.brand = element.brand.toUpperCase();
		element.model = element.model.toUpperCase();
	});
 }
 

//13
////Разработайте функцию getCarsMadeAfter, которая принимает массив объектов car 
////с тремя полями brand - марка автомобиля, model - модель, year - год выпуска
////и число -- минимальный год выпуска.
////Не используя операторов цикла функция возвращает массив, который содержит только марки 
////автомобилей, которые были выпущены позже указанного года.
////Элементы в итоговом массиве не повторяются
////Массив отсортирован по алфавиту
function getCarsNewerThan(arr, yearmin) {
    var brands = [];
    arr.forEach(function(car) {
       if(car.year > yearmin && brands.indexOf(car.brand) < 0) {           
           brands.push(car.brand);
       }         
    });
    return brands.sort();    
}

//14
////Разработайте функцию checkSort, которая принимает массив строк 
////и не используя циклы проверяет отсортирован массив по алфавиту или нет
////если отсортирован функция возвращает true, иначе false

function checkSort(arr){
	var result = true;
	var temp = "";
	arr.forEach(function(element) {
		if (temp > element){
			result = false;
		}
		temp = element;
	});

	return result;
}

/*for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
        return false;
       
    }
}

	return true;*/

//15
////Разработайте функцию contain, которая принимает массив объектов car 
////с тремя полями brand - марка автомобиля, model - модель, year - год выпуска
////и еще один объект car в качестве второго параметра
////функция возвращает true массив содержит объект с такими полями как у второго аргумента
////иначе false
////функция не использует циклы

function contain(arr, car){
	var result = false;
	arr.forEach(function(element){
		if(car.brand === element.brand && car.model ===element.model && car.year === element.year) {
			result = true;
		}
	});
		
	return result;
}


//???????????????????????
//16
////Разработайте функцию getAvgAge, которая принимает массив объектов car 
////с тремя полями brand - марка автомобиля, model - модель, year - год выпуска
////и не используя циклов возвращает средний возраст автомобиля.
////для получения текущего года использовать конструкцию:
////(new Date()).getFullYear()

function getAvgAge(arr){
	var sum = 0;
	//var avg = 0;
	var count = 0;
	arr.forEach(function(element) {
		sum += (new Date()).getFullYear() - element.year;
		count++;
	});
	return parseInt(sum/count);
	//avg = parseInt(sum/count);
	//return avg;
}












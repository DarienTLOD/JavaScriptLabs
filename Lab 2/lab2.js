'use strict'
//1
////Разработайте функцию getType, которая принимает единственный параметр
////и возвращает тип этого параметра

function getType(operand) {
    if (operand === null) return "null";
    else return typeof operand;
}

//2
////Разработайте функцию askForAge которая запрашивает у пользователя его возраст 
////и в зависимости от возраста возвращает возрастную категорию
////до 18 , от 18 до 25, от 25 до 50, от 50 и старше
////в случае если пользователь не указал свой возраст функция возвращает "Возраст не определен"

function askForAge() {
    var age = prompt("Введите ваш возраст");

    age = parseFloat(age);

    if (age < 18)
        return "до 18";
    else if (age >= 18 && age < 25)
        return "от 18 до 25";
    else if (age >= 25 && age < 50)
        return "от 25 до 50";
    else if (age >= 50)
        return "от 50 и старше";
    else
        return "Возраст не определен";
}

//3
////Разработайте функцию doubleFactorial для расчета двойного факториала числа
////В случае невозможности расчета функиция возвращает null
////Двойной факториал n!!=n*(n-2)*(n-4)*...*2 (или 1)
////функция принимает один параметр

function doubleFactorial(x) {
    if (isNaN(x)) {
        return null;
    }
    var answer = 1;
    for (var i = 2 + (x & 1); i <= x; i += 2) {
        answer *= i;
    }
    return answer;
}

//4
////Разработайте функцию getCharCount которая принимает символ и строку
////и возвращает количество таких символов в строке
////если вместо символа передана строка, то в качестве символа используется первый символ этой строки.
////регистр значения не имеет

function calcuateCharCount(char, str) {
    var count = 0;
    var pos = str.toUpperCase().indexOf(char[0].toUpperCase());
    while (pos != -1) {
        count++;
        pos = str.toUpperCase().indexOf(char[0].toUpperCase(), pos + 1);
    }
    return count;
}

function getCharCount(char, str) {
    if (char === "") return 0;
    return calcuateCharCount(char, str);
}

//5
////разработайте функцию askForNumber, которая просит пользователя ввести число больше 10
////если пользователь ввел меньшее число, то функция просит повторно ввести число.
////если число больше 10, то выводится сообщение (alert) "Вы ввели {число}}"
//// Например: "Вы ввели 11"

function askForNumber() {
    var number = prompt("Введите число больше 10");

    while (number <= 10 || isNaN(number) || !isFinite(number)) {
        number = prompt("Вы ввели число меньше 10. Введите число больше 10");
    }
    alert("Вы ввели " + number);
}

//6
////разработайте функцию isNumeric которая принимает один аргумент n.
////если n действительное число, то возвращает true
////иначе функция возвращает false

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//7 
////Разработайте функцию toHex которая принимает аргумент
////если аргумент действительное число, то возвращает строку соответстующую этому числу в 16-риченой системе
////в остальных случаях возвращает строковое предствление аргумента

function toHex(n) {
    if (!isNumeric(n)) {
        return n + "";
    }
    return n.toString(16);
}

//8
////Разработайте функцию getDecimal которая принимает 1 параметр - число плавающей точкой (например 1.25)
////и возвращает его дробную часть getDecimal(1.25)=0.25

function getDecimal(num) {
    var str = "" + num;
    var zeroPos = str.indexOf(".");

    if (zeroPos == -1) return 0;
    str = str.slice(zeroPos);

    return +str;
}

//9
////fibonachi которая принимает число и возвращает ряд фибоначчи до этого числа в виде строки
////например для числа 10  результат "1,1,2,3,5,8"

function fibonachi(n) {
    var a = 1;
    var b = 1;
    var result = "";

    var i = 3;
    while (i < n) {
        var c = a + b;
        a = b;
        i = b = c;

        if (result.length == 0)
            result = "1" + "," + a;
        else
            result += "," + a;
    }

    return result;
}

//10
////Разработайте функцию changeCase, которая принимает 1 аргумени 
////если аргумент не строка, то преобразует его в строку.
////в полученной строке заменяем регистр у каждого из символов
////Например changeCase("Строка") -- "сТРОКА"

function changeCase(param) {
    var sourceStr = param + "";
    var result = "";

    var len = sourceStr.length;
    for (var i = 0; i < len; i++) {
        if (sourceStr[i] == sourceStr[i].toLowerCase())
            result += sourceStr[i].toUpperCase();
        else
            result += sourceStr[i].toLowerCase();
    }

    return result;
}


//11
////Разработайте функцию round, которая позволяет округлять число 
////до указанного количества знаков знаков после запятой
////функция принимает 2 параметра
////перевый параметр -- число
////второй количество знаков после запятой (может быть отрицательным) 

function round(number, precision) {
    var powerAbsPrecision = Math.pow(10, Math.abs(precision));
    if (precision < 0) {
        return Math.round(number / powerAbsPrecision) * powerAbsPrecision;
    }
    return Math.round(number * powerAbsPrecision) / powerAbsPrecision;
}

//12
////Разработайте функцию contains, которая принимает 2 строки в качестве аргументов
////функция возвращает true, если втророй аргумент является подстрокой первого аргумента
////null если один или оба аргумента -- пустые строки
////иначе false

function contains(str, subStr) {
    if (str === "" || subStr === "") return null;
    return Boolean(str.indexOf(subStr) + 1);
}

//13
////Разработайте функцию substringCount, которая принимает 2 строки в качестве аргументов
////функция возвращает количество вхождений второй строки в первую
////если одна из строк пустая то 0

function substringCount(str, subStr) {
    if (str === "" || subStr === "") return 0;
    var pos = str.indexOf(subStr[0]);
    var count = 0;
    while (pos != -1) {
        count++;
        pos = str.indexOf(subStr[0], pos + 1);
    }
    return count;
}

//14
////Разработайте функцию Compare, которая производит сравнение строк с учетом или без учета регистра
////параметры 1 и 2 - это сравниваемые строки. Параметр 3 логический флаг
////true -- регистр учитывается, false -- нет

function compare(firstStr, secondStr, flag) {
    if (!flag) {
        return firstStr.toLowerCase() === secondStr.toLowerCase();
    } else {
        return firstStr === secondStr;
    }
}

//15
////Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, 
////и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
////Результатом функции должна быть (при необходимости) усечённая строка.
////например
////truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
////truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    } else {
        var slicedStr = str.slice(0, maxlength - 3);
        return slicedStr + "...";
    }
}
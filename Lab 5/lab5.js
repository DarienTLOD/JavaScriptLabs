'use strict'
//1
////Необходимо создать модуль, который используя функциональный стиль описывает класс CustomArray
////Конструктор может принимать неограниченное количество параметров, которые будут добавлены как элементы созданного псевдомассива
////Класс используется для создания объектов аналогичных стандартным массивам.
////Класс должен реализовывать следующие возможности массивов:
//// доступ к элементам по индексу
//// свойство length
//// методы push/pop, shift/unshift, slice, splice,  sort, indexOf/lastIndexOf, includes, join, concat
//// перебирающие методы forEach, reduce
//// Сигнатуры с действия методов аналогичны методам стандартных массивов
//// Стандартные массивы использовать ЗАПРЕЩАЕТСЯ

//разработайте пример использования

function CustomArray() {
    this.length = 0;
    for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
    this.length = i;
    var self = this;

    this.addRange = function() {
        for (var i = self.length, j = 0; j < arguments[0].length; i++, j++) self[j] = arguments[0][i];
        self.length = j;
    };


    function insertItems(startIndex) {
        var count = arguments[1].length;
        var items = arguments[1];
        var newLength = self.length + count;
        var countToMove = 0;
        var i, j;

        if (startIndex <= self.length - 1) {
            countToMove = self.length - startIndex;
        }

        for (i = countToMove, j = 0; i > 0; j++, i--) {
            self[newLength - 1 - j] = self[self.length - 1 - j];
        }

        for (i = 0; i < count; i++) {
            self[startIndex + i] = items[i];
        }

        self.length = newLength;
    }

    function deleteItems(startIndex, count) {
        var result = new CustomArray();
        var i, j;
        count = Math.abs(count);

        if (startIndex < 0) {
            for (i = 0, j = count - 1; i < count; i++, j--)
                result[j] = self[(self.length + startIndex) - i];
            rewriteIndexes((self.length + startIndex) - i, count);
        } else if (startIndex >= 0) {
            for (i = count, j = 0; i !== 0; i--, j++)
                result[j] = self[startIndex + j];
            rewriteIndexes(startIndex - 1, count);

        }

        for (var n = 0; n < count; n++) {
            self.length--;
            delete self[self.length];
        }
        result.length += count;
        return result;
    }

    function rewriteIndexes(startIndex, count) {
        for (var m = startIndex; m < self.length - (count - 1); m++) {
            self[m + 1] = self[m + count + 1];
        }
    }

    this.pop = function() {
        var result = self[self.length]
        delete self[self.length];
        self.length++;
        return result;
    };

    this.push = function() {
        self[self.length] = arguments[0];
        self.length++;
        return self.length;
    };

    this.shift = function() {
        insertItems(0, arguments);
    }

    this.unshift = function() {
        return deleteItems(0, 1);
    };

    this.indexOf = function(value) {
        var i;

        for (i = 0; this.length > i; i++) {
            if (this[i] === value) return i;
        }

        return -1;
    };

    this.lastIndexOf = function(value) {
        var i;

        for (i = this.length; i !== -1; i--) {
            if (this[i] === value) return i;
        }

        return -1;
    };

    this.includes = function(value) {
        var i;

        for (i = 0; this.length > i; i++) {
            if (this[i] === value) return true;
        }

        return false;
    };

    this.concat = function() {
        var i, j;

        var newArray = new CustomArray();
        for (i = 0; i < self.length; i++) {
            newArray.push(self[i]);
        }

        var argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
            if (arguments[i].length !== 0 & typeof(arguments[i]) !== String) {
                var argItems = arguments[i];
                var argItemsLen = arguments[i].length;
                for (j = 0; j < argItemsLen; j++) {
                    newArray.push(argItems[j]);
                }
            } else {
                newArray.push(arguments[i]);
            }
        }

        return newArray;
    };

    this.sort = function() {
        if (self.length === 0) return self;
        var count = self.length - 1;
        for (var i = 0; i < count; i++)
            for (var j = 0; j < count - i; j++)
                if (typeof arguments[0] === 'function') {
                    if (!arguments[0](self[j], self[j + 1])) {
                        var max = self[j];
                        self[j] = self[j + 1];
                        self[j + 1] = max;
                    }
                } else {
                    if (self[j] > self[j + 1]) {
                        var max = self[j];
                        self[j] = self[j + 1];
                        self[j + 1] = max;
                    }
                }
        return self;
    };

    this.slice = function() {
        var startIndex;
        var endIndex;
        var result = new CustomArray();
        var i, j;

        if (arguments[0] !== undefined && isNumeric(arguments[0])) startIndex = arguments[0];
        else startIndex = 0;
        if (arguments[1] !== undefined && isNumeric(arguments[1])) endIndex = arguments[1] - 1;
        else endIndex = self.length;
        if (startIndex < 0)
            for (i = (self.length + startIndex), j = 0; i < self.length; i++, j++) {
                result[j] = self[i];
                result.length++;
            }
        if (startIndex >= 0)
            for (i = startIndex, j = 0; i < endIndex; i++, j++) {
                result[j] = self[i];
                result.length++;
            }
        return result;
    };

    this.splice = function() {
        if (!isNumeric(arguments[0]) || !isNumeric(arguments[1])) {
            throw "Invalid argument!";
        }
        var result = deleteItems(arguments[0], arguments[1]);

        var temp = new CustomArray();

        for (var i = 2; i < arguments.length; i++) temp.push(arguments[i]);

        if (arguments[0] < 0) insertItems((self.length + arguments[0]) + 1, temp);
        else insertItems(arguments[0], temp);
        return result;
    };

    function isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
}

//2
////Необходимо создать модуль, который используя функциональный стиль описывает класс TypedArray
////Класс является наследником от класса CustomArray, и используется для создания псевдомассивов, клоторые содержат только элементы определенного типа.
////В качестве первого параметра конструктора. Остальные параметры конструктора -- элементы псевдомассива
////В качестве типа могут выступать примитивные типы: number, string, boolean, тип object, либо класс, например Date
////Класс должен реализовывать следующие возможности массивов:
//// доступ к элементам по индексу
//// свойство length
//// методы push/pop, shift/unshift, slice, splice,  sort, indexOf/lastIndexOf, includes, join, concat
//// перебирающие методы forEach, reduce
//// Сигнатуры с действия методов аналогичны методам стандартных массивов
//// При попытке добавления в псевдо массив элементов с другим типом должно срабатывать исключение.
//// Стандартные массивы использовать ЗАПРЕЩАЕТСЯ

//3
////Необходимо создать модуль, который используя функциональный стиль описывает класс SortedList
////Класс является наследником от класса TypedArray, и используется для создания псевдомассивов, элементы в которых отсортированы.
////Порядок сортировки задается через функцию compareFunction(a, b), которая задается через первый параметр конструктора.
////compareFunction аналогична compareFunction для метода sort класса Array. Если функция не задана, то объекты не сортируются
////второй параметр конструктора -- тип элементов псевдомассива. остальные -- элементы псевдомассива
////Класс должен реализовывать следующие возможности:
//// свойство length и методы  indexOf/lastIndexOf, includes, join -- аналогичные методам класса CustomArray
//// метод add(elem) -- добавляет элемент  в отсортированный псевдомассив. метод должен сам определять место и аставлять туда элемент.
//// (Вставка в конец и сортировка после этого -- плохой подход)
//// метод addRange() может принимать от одного и болоее аргументов. Если аргумент не массив то добавляет его в текущий псевдомассив.
//// если моссив то добавляет в псевдомассив все элементы массива
//// remove(elem) - удаляет элемент из псевдомассива, элементы сдвигаются
//// remove(pisition) - удаляет элемент из указанной позиции псевдомассива, элементы сдвигаются
//// removeRange(begin, count) -- удаляет count элементов начиная с begin позиции, элементы сдвигаются
//// elementAt(position) -- возвращает элемент с указанной позицией
//// toArray() -- возвращает массив содержащий все элементы псевдомассива
//// sort(compareFunction(a, b)) изменяет порядок элементов в псевдомассиве.
//// перебирающие методы forEach, reduce

//4
////Выполните задание 1 в прототипном стиле

//5 
////Выполните задание 2 в прототипном стиле

//6
////Выполните задание 3 в прототипном стиле

//7
////Необходимо создать модуль, в описана библиотека JArray. Сокращенно $A.
////библиотека работает по принципу JQuery. Добавляет различные свойства и методы к массивам и псевдомассивам если такиз свойств там нет.
////библиотека добавляет к псевдомассивам методы forEach, map, filter, every, some, reduce/reduceRight
////свойство actualLength которое хранит текущее количество элементов а не номар последнего+1
////пример использования
//function(){
//	JArray.map(arguments, function(item,i, array){})
//	JArray(arguments).map(function(item,i, array){})
//	$A.map(arguments, function(item,i, array){})
//	$A(arguments).map(function(item,i, array){})
//}
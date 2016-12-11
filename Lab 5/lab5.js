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
    for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
    this.length = i;
    var self = this;

    function deleteItems(startIndex, count) {
        var result = new CustomArray();
        var i, j;

        if (startIndex < 0) {
            for (i = Math.abs(count); i !== 0; i--) {
                result[i] = self[self.length + startIndex];
                delete self[self.length + startIndex];
                self.length--;
                result.length++;
            }
        } else if (startIndex >= 0) {
            for (i = count, j = 0; i !== 0; i--, j++) {
                result[j] = self[startIndex + j];
                delete self[startIndex + j];
                self.length--;
                result.length++;
            }
        }
        return result;
    }

    this.pop = function() {
        return deleteItems(-1, 1);
    };

    this.unshift = function() {
        return deleteItems(0, 1);
    };

    this.push = function() {
        for (var i = 0; i < arguments.length; i++) {
            this[this.length + 1] = arguments[i];
            this.length++;
        }
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

    this.sort = function() {
        if (this.length === 0) return this;
        var a = new CustomArray(),
            b = new CustomArray(),
            p = this[0];
        for (var i = 1; i < this.length; i++) {
            if (this[i] < p) a[a.length] = this[i];
            else b[b.length] = this[i];
        }
        return this.QuickSort(a).concat(p, this.QuickSort(b));

    };

    // this.splice = function() {
    //     if (!isNumeric(arguments[0]) || !isNumeric(arguments[1]) {
    //             alert()
    //         }
    //         var result = this[this.length - 1]; delete this[this.length - 1]; this.length--;
    //         return result;
    //     };

    //     function isNumeric(number) {
    //         return !isNaN(parseFloat(number)) && isFinite(number);
    //     }
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
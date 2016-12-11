"use strict"
//1
////напишите функцию накопитель store, которая принимает параметр 
////и возвращает сумму всех параметров, переданных ей при всех вызовах.
////store(5)=5;
////store(8)=13; (в предыдущем вызове передали 5)
////изменить сумму аргументов не вызывая функции невозможно
var store = createStore();

//2
////Разработайте функцию createStore, которая которая позволяет создавать несколько 
////экземпляров хранишищ из первого задания
function createStore() {

    var storeHolder = 0;

    function store(arg) {
        if (!isNaN(parseFloat(arg)) && isFinite(arg)) {
            storeHolder += arg;

            return storeHolder;
        }
        return storeHolder;
    }

    return store;
}

//3
////Разработайте класс Car для создания объектов, которые описывают автомобили на стоянке.
////конструктор принимает строку формата "brand-model-id-driver:Ф И О-owner:Ф И O"
////либо "brand-model-id-driver:Ф И О" если водитель и собственник это один человек
////Объект содержит следующие ствойства:
////brand -- марка (строка) (доступно для чтения и записи)
////model -- модель (строка) (доступно для чтения и записи)
////id -- гос номер (строка) (доступно для чтения и записи)
////owner -- владелец автомобиля (Объект) (доступно для чтения и записи)
////driver -- водитель (Объект) (доступно для чтения и записи)
////поля owner и driver - это объекты с полями\
////surname -- фамилия (доступно для чтения и записи)
////name -- имя (доступно для чтения и записи)
////patronymic -- отчество (доступно для чтения и записи) (может отсутствовать)
////fullName -- полное имя, например Петров Иван Иванович (доступно для чтения и записи)
////shortName -- фамилия и инициалы , например Петров И. И.
function Person(surnameHolder, nameHolder, patronymicHolder) {

    Object.defineProperty(this, "surname", {

        get: function() {
            return surnameHolder;
        },

        set: function(value) {
            value[0].toUpperCase();

            if (value.length >= 2) {
                surnameHolder = value;
            } else {
                alert("Invalid argument!!!");
            }
        }
    });

    Object.defineProperty(this, "name", {

        get: function() {
            return nameHolder;
        },

        set: function(value) {
            value[0].toUpperCase();

            if (value.length >= 2) {
                nameHolder = value;
            } else {
                alert("Invalid argument!!!");
            }
        }
    });

    Object.defineProperty(this, "patronymic", {

        get: function() {
            return patronymicHolder;
        },

        set: function(value) {
            value[0].toUpperCase();

            if (value.length >= 2) {
                patronymicHolder = value;
            } else {
                alert("Invalid argument!!!");
            }
        }
    });

    Object.defineProperty(this, "fullName", {

        get: function() {
            var result = [surnameHolder, nameHolder].join(" ");
            if (patronymicHolder !== undefined) {
                result += " " + patronymicHolder;
            }
            return result;
        },

        set: function(value) {
            var argsList = this.newFullName.split(" ");
            var isArgsValid = argsList.every(function(item) {
                return item.length >= 2 && isUpperCase(item[0]);
            });

            if (isArgsValid && argsList.length >= 2 && argsList.length <= 3) {
                surnameHolder = argsList[0];
                nameHolder = argsList[1];
                patronymicHolder = argsList[2];
            } else {
                alert("Invalid argument!!!");
            }
        }
    });

    Object.defineProperty(this, "shortName", {

        get: function() {
            var shortName = surnameHolder + " " + nameHolder[0] + ".";
            if (patronymicHolder !== undefined) {
                shortName += " " + patronymicHolder[0] + ".";
            }
            return shortName;
        }
    });

    this.clone = function() {
        return new Person(this.surname, this.name, this.patronymic);
    };
}

var isUpperCase = function(character) {
    return character == character.toUpperCase();
};

//Volkswagen-Passat B5-1234 AE1-Иванов Иван Иванович-Петров Иван Денисович
//Volkswagen-Passat B5-1234 AE1-Иванов Иван Иванович
function Car(argumentString) {
    var brand = "";
    var model = "";
    var id = "";
    var driver = {};
    var owner = {};

    // constructor
    var argumentList = argumentString.split("-");
    brand = argumentList[0];
    model = argumentList[1];
    id = argumentList[2];

    var driverArgs = argumentList[3].split(" ");
    driver = new Person(driverArgs[0], driverArgs[1], driverArgs[2]);

    if (argumentList.length < 5) {
        owner = driver;
    } else {
        var ownerArgs = argumentList[4].split(" ");
        owner = new Person(ownerArgs[0], ownerArgs[1], ownerArgs[2]);
    }

    Object.defineProperty(this, "brand", {

        get: function() {
            return brand;
        },

        set: function(value) {
            brand = value;
        }
    });

    Object.defineProperty(this, "model", {

        get: function() {
            return model;
        },

        set: function(value) {
            model = value;
        }
    });

    Object.defineProperty(this, "id", {

        get: function() {
            return id;
        },

        set: function(value) {
            id = value;
        }
    });

    Object.defineProperty(this, "driver", {

        get: function() {
            return driver;
        },

        set: function(value) {
            driver = value;
        }
    });

    Object.defineProperty(this, "owner", {

        get: function() {
            return owner;
        },

        set: function(value) {
            owner = value;
        }
    });
}

//4 Разработайте класс Parking для создания объектов описывающих автостоянки.  
////Автостояна содержит следующие поля:
////id -- уникальный номер ( только для чтения, указывается при создании стоянки)
////address --адрес ( только для чтения, указывается при создании стоянки)
////maxCount -- количество мест
////rate -- тариф за час
////carCount -- количество авто на стоянке (только для чтения)
////freePlaces -- количество свободных мест (только для чтения)
////Автостояна содержит следующие методы:
////addCar -- добавляет авто на стоянку. К автомобилю добавляется время въезда и номер местаю метод возвращает номер места
////removeCar -- убрать автомобиль со стоянки. Освобождает место, возвращает полную стоимость стоянки время в часах*тариф
////getInfo -- возвращает объект который содержит статистику по стоянке
////carCount -- количество авто на стоянке
////freePlaces -- количество свободных мест
////maxTime -- максимальное время на стоянке среди автомобилей, которые сейчас на стоянке 
////minTime -- минимальное время на стоянке среди автомобилей, которые сейчас на стоянке 
////avgTime -- среднее время на стоянке среди автомобилей, которые сейчас на стоянке 
function ParkingInfo(idParam, adressParam, maxCountParam, rateParam, carCountParam, freePlacesParam) {
    this.id = idParam;
    this.adress = adressParam;
    this.maxCount = maxCountParam;
    this.rate = rateParam;
    this.carCount = carCountParam;
    this.freePlaces = freePlacesParam;
}

function ParkingPlace(carParam, placeNumberParam) {
    this.car = carParam;
    this.placeNumber = placeNumberParam;
    this.time = new Date();
}

function Parking(id, address, maxCount, rate) {
    var places = [];

    Object.defineProperty(this, "id", {

        get: function() {
            return id;
        },

        set: function(value) {
            id = value;
        }
    });

    Object.defineProperty(this, "address", {

        get: function() {
            return address;
        },

        set: function(value) {
            address = value;
        }
    });

    Object.defineProperty(this, "maxCount", {

        get: function() {
            return maxCount;
        },

        set: function(value) {
            if (isNumeric(value) && value > 0) {
                maxCount = value;
            } else {
                alert("Error in setMaxCount(value): Wrong argument!!!");
            }
        }
    });

    Object.defineProperty(this, "rate", {

        get: function() {
            return rate;
        },

        set: function(value) {
            if (isNumeric(value) && value >= 0) {
                rate = value;
            } else {
                alert("Error in setRate(value): Wrong argument!!!");
            }
        }
    });

    Object.defineProperty(this, "places", {

        get: function() {
            return places;
        },

        set: function(value) {
            places = value;
        }
    });

    this.carCount = function() {
        return places.reduce(function(result, item) {
            return item === undefined ? result : result + 1;
        }, 0);
    };

    this.freePlaces = function() {
        return maxCount - this.carCount();
    };

    this.addCar = function(car) {
        if (this.freePlaces() === 0) {
            alert("No free places!!!");
            return;
        }

        var freePlace = getFreePlace();
        places[freePlace] = new ParkingPlace(car, freePlace + 1);
        return freePlace + 1;
    };

    this.removeCar = function(placeNumber) {
        if (!isNumeric(placeNumber)) {
            alert("Error in Parking.removeCar(placeNumber): Invalid argument!!!");
            return;
        }
        if (places[placeNumber - 1] === undefined) {
            alert("This place is free!");
            return;
        }
        if (placeNumber < 1 || placeNumber > maxCount) {
            alert("Your place number not in range. Must be from " + 1 + " to " + maxCount + ".");
            return;
        }

        var placeInfo = places[placeNumber - 1];
        places[placeNumber - 1] = undefined;
        var finishTime = new Date();
        var spendTime = finishTime - placeInfo.time;
        var cost = rate * (spendTime / 3600000);

        return Math.round(cost * 100) / 100;
    };

    this.getInfo = function() {
        return new ParkingInfo(id, address, maxCount, rate, this.carCount(), this.freePlaces());
    };

    this.maxTime = function() {
        var timeValues = getDetentionTime();
        timeValues.sort(function(o1, o2) {
            return -(o1 - o2);
        });

        var maxValue = timeValues[0] / 60000;

        return formatTime(Math.round(maxValue));
    };

    this.minTime = function() {
        var timeValues = getDetentionTime();
        timeValues.sort(function(o1, o2) {
            return o1 - o2;
        });

        var minValue = timeValues[0] / 60000;

        return formatTime(Math.round(minValue));
    };

    this.avgTime = function() {
        var timeValues = getDetentionTime();
        var avgValue = timeValues.reduce(function(summ, item) {
            return summ + (item / 60000);
        }, 0);
        avgValue = avgValue / timeValues.length;
        return formatTime(Math.round(avgValue));
    };

    function getFreePlace() {
        for (var i = 0; i < maxCount; i++) {
            if (places[i] === undefined) {
                return i;
            }
        }

        return -2;
    }

    function getDetentionTime() {
        var currentTime = new Date();
        var tempPlaces = places.filter(function(item) {
            return item !== undefined;
        });

        return tempPlaces.map(function(item) {
            return currentTime - item.time;
        });
    }

    function formatTime(minutesCount) {
        var hours = Math.floor(minutesCount / 60);
        var minutes = minutesCount % 60;

        return hours + "h : " + minutes + "m";
    }

    function isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
}

//5
////разработайте класс List для создания списков 
////список имеет следующие методы
////add(element) - добавляет элемент в конец списка
////addFirst(element) - добавляет элемент в начало списка
////addAt(element, position) -- добавляет элемент перед элементом на указанной позиции или в конец списка, если номер позиции больше длины списка.
////remove(element) -- удаляет элемент из списка
////removeAt(element) -- удаляет элемент из из указанной позиции. Оставшиеся элементы сдвигаются
////sort(func) -- сортирует список порядок сортировки определяется функицей(аналогично сортировке массивов)
////clear() -- чистит список
////Предусмотрите возможность вызова методов цепочкой
////Например: (new List()).add().add().sort()...

function List() {

    var array = [];

    this.getArray = function() {
        return array;
    };

    this.add = function(element) {
        array.push(element);
        return this;
    };

    this.addFirst = function(element) {
        array.unshift(element);

        return this;
    };

    this.addAt = function(element, position) {
        if (position >= array.length) {
            array.push(element);
        } else {
            array.splice(position, 0, element);
        }

        return this;
    };

    this.remove = function(element) {
        var removingIndex = getRemovingIndex(element);

        if (removingIndex != -1) {
            array.splice(removingIndex, 1);
        }

        return this;
    };

    this.removeAt = function(index) {
        if (isNumeric(index)) {
            if (index < array.length) {
                array.splice(index, 1);
            }
        }

        return this;
    };

    this.clear = function() {
        array.splice(0, array.length);

        return this;
    };

    this.sort = function(callback) {
        if (callback !== undefined) {
            array.sort(callback);
        } else {
            array.sort();
        }

        return this;
    };


    function getRemovingIndex(element) {
        for (var i = 0; i < array.length; i++) {
            if (element === array[i]) {
                return i;
            }
        }

        return -1;
    }

    function isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
}

//6
////Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
////калькулятор имеет метод calculate который принимает строку формата «ЧИСЛО операция ЧИСЛО» (2+3) и возвращает результат операции
////калькулятор имеет метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов \
////func(a,b), которая должна её реализовывать.
////Например
//// var powerCalc = new Calculator;
////powerCalc.addMethod("*", function(a, b) { return a * b; });
////powerCalc.addMethod("/", function(a, b) { return a / b; });
////powerCalc.addMethod("**", function(a, b) { return Math.pow(a, b); });
////var result = powerCalc.calculate("2 ** 3");
////alert( result ); // 8

function Calculator() {

    var knowledgeBase = {};

    this.getKnowledgeBase = function() {
        return knowledgeBase;
    };

    this.calculate = function(expression) {
        var args = proceedExpression(expression);

        if (args.length != 3 && !isNumeric(+args[0]) && !isNumeric(+args[0])) {
            alert("Error in Calculator.calculate(expression): invalid expression!!!");
            return;
        }

        if (knowledgeBase[args[1]] === undefined) {
            alert("Error in Calculator.calculate(expression): Unknown operation '" + this.operation + "'!!!");
            return;
        }

        var func = knowledgeBase[args[1]];

        return func(+args[0], +args[2]);
    };

    this.addMethod = function(operation, func) {
        if (knowledgeBase[operation] === undefined) {
            knowledgeBase[operation] = func;
            alert("Operation '" + operation + "' successfuly added!");

        } else {
            var toOverwrite = this.confirm("Operation '" + operation + "' already exists for this calculator. Replace it?");

            if (toOverwrite) {
                knowledgeBase[operation] = func;
                alert("Operation '" + operation + "' successfuly added!");
            }
        }
    };

    // utils

    function isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    function proceedExpression(expression) {
        var args = expression.split(" ");

        while (args.length > 3) {
            var index = args.indexOf("");
            args.splice(index, 1);
        }

        return args;
    }
}
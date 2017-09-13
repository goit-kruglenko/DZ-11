(function () {
    'use strict';

    var arr = [],
        n = 10;
    // Функция генерирует массив arr длинной n

    pushRand(arr, n);

    function pushRand(arr, n) {
        if (arr.length < n) {
            arr.push(Math.floor(Math.random() * 100));
            pushRand(arr, n);
        } else {
            return arr;
        }
    }

    //Функция, которая выводит массив при помощи цикла for()
    function printArr(myArray) {
        var result = "",
            i, l;
        l = myArray.length;
        for (i = 0; i < l; i++) {
            result += i + " = " + myArray[i] + "<br>";
        }
        return result;
    }

    document.getElementById('new1').innerHTML = printArr(arr);
}());

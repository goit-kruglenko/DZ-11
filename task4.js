(function () {
    'use strict';

    var arr = [];

    // По событию добавляет элемент массива

    function addElem4() {
        var id, value;
        id = document.getElementById('task4_id').value;
        value = document.getElementById('task4_value').value;
        arr[id] = value;
        document.getElementById('new4').innerHTML = printArr(arr);
        document.getElementById('task4_id').value = arr.length;
        document.getElementById('task4_value').value = (Math.floor(Math.random() * 100));
    }

    // По событию передает элемент массива с максимальным идентификатором в переменную, и уменьшает длинну массива на 1

    function popElem() {
        var popped;
        popped = arr.pop();
        document.getElementById('new4').innerHTML = printArr(arr);
        document.getElementById('task4_id').value = arr.length;
        document.getElementById('popped4').style = "color: red;";
        document.getElementById('popped4').innerHTML = "Popped: " + popped;

    }

    function shiftElem() {
        var shifted;
        shifted = arr.shift();
        document.getElementById('new4').innerHTML = printArr(arr);
        document.getElementById('task4_id').value = arr.length;
        document.getElementById('shift4').style = "color: green;";
        document.getElementById('shift4').innerHTML = "shifted: " + shifted;

    }

    //Функция выводит массив при помощи цикла for()
    function printArr(myArray) {
        var result = "",
            i, l;
        l = myArray.length;
        for (i = 0; i < l; i++) {
            result += i + " = " + myArray[i] + "<br>";
        }
        return result;
    }

    document.getElementById('task4_ok').onclick = addElem4;
    document.getElementById('task4_pop').onclick = popElem;
    document.getElementById('task4_shift').onclick = shiftElem;
}());

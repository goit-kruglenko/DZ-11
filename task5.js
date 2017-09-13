(function () {
    'use strict';

    var arr = [];

    // По событию добавляет элемент массива

    function addElem5() {
        var id, value;
        id = document.getElementById('task5_id').value;
        value = document.getElementById('task5_value').value;
        arr[id] = value;
        document.getElementById('new5').innerHTML = printArr(arr);
        document.getElementById('task5_id').value = arr.length;
        document.getElementById('task5_value').value = (Math.floor(Math.random() * 100));
    }

    function pushElem5() {
        arr.push(document.getElementById('task5_value').value);
        document.getElementById('new5').innerHTML = printArr(arr);
        document.getElementById('task5_id').value = arr.length;
        document.getElementById('task5_value').value = (Math.floor(Math.random() * 100));
        document.getElementById('push5').style = "color: navy;";
        document.getElementById('push5').innerHTML = "Pushed: " + arr[arr.length - 1];
    }

    // По событию передает элемент массива с максимальным идентификатором в переменную, и уменьшает длинну массива на 1

    function popElem() {
        var popped;
        popped = arr.pop();
        document.getElementById('new5').innerHTML = printArr(arr);
        document.getElementById('task5_id').value = arr.length;
        document.getElementById('popped5').style = "color: red;";
        document.getElementById('popped5').innerHTML = "Popped: " + popped;

    }

    function shiftElem() {
        var shifted;
        shifted = arr.shift();
        document.getElementById('new5').innerHTML = printArr(arr);
        document.getElementById('task5_id').value = arr.length;
        document.getElementById('shift5').style = "color: green;";
        document.getElementById('shift5').innerHTML = "Shifted: " + shifted;

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

    document.getElementById('task5_ok').onclick = addElem5;
    document.getElementById('task5_pop').onclick = popElem;
    document.getElementById('task5_shift').onclick = shiftElem;
    document.getElementById('task5_push').onclick = pushElem5;
}());

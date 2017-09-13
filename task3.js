(function () {
    'use strict';

    var arr = [];

    // По событию добавляет элемент массива

    function addElem3() {
        var id, value;
        id = document.getElementById('task3_id').value;
        value = document.getElementById('task3_value').value;
        arr[id] = value;
        document.getElementById('new3').innerHTML = printArr(arr);
        document.getElementById('task3_id').value = arr.length;
        document.getElementById('task3_value').value = (Math.floor(Math.random() * 100));
    }

    // По событию передает элемент массива с максимальным идентификатором в переменную, и уменьшает длинну массива на 1

    function popElem() {
        var popped;
        popped = arr.pop();
        document.getElementById('new3').innerHTML = printArr(arr);
        document.getElementById('task3_id').value = arr.length;
        document.getElementById('popped3').style = "color: red;";
        document.getElementById('popped3').innerHTML = "Popped: " + popped;

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

    document.getElementById('task3_ok').onclick = addElem3;
    document.getElementById('task3_pop').onclick = popElem;
}());

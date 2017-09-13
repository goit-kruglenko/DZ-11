(function () {
    'use strict';

    var arr = [];

    // По событию добавляет элемент массива

    function addElem() {
        var id, value;
        id = document.getElementById('task2_id').value;
        value = document.getElementById('task2_value').value;
        arr[id] = value;
        document.getElementById('new2').innerHTML = printArr(arr);
        document.getElementById('task2_id').value = arr.length;
        document.getElementById('task2_value').value = (Math.floor(Math.random() * 100));
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

    document.getElementById('task2_ok').onclick = addElem;
}());

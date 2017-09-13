(function () {
    'use strict';

    var arr = [];

    // По событию добавляет элемент массива

    function addElem6() {
        var id, value;
        id = document.getElementById('task6_id').value;
        value = document.getElementById('task6_value').value;
        arr[id] = value;
        document.getElementById('new6').innerHTML = printArr(arr);
        document.getElementById('task6_id').value = arr.length;
        document.getElementById('task6_value').value = (Math.floor(Math.random() * 100));
    }

    function pushElem6() {
        arr.push(document.getElementById('task6_value').value);
        document.getElementById('new6').innerHTML = printArr(arr);
        document.getElementById('task6_id').value = arr.length;
        document.getElementById('task6_value').value = (Math.floor(Math.random() * 100));
        document.getElementById('push6').style = "color: navy;";
        document.getElementById('push6').innerHTML = "Pushed: " + arr[arr.length - 1];
    }

    // По событию передает элемент массива с максимальным идентификатором в переменную, и уменьшает длинну массива на 1

    function popElem() {
        var popped;
        popped = arr.pop();
        document.getElementById('new6').innerHTML = printArr(arr);
        document.getElementById('task6_id').value = arr.length;
        document.getElementById('popped6').style = "color: red;";
        document.getElementById('popped6').innerHTML = "Popped: " + popped;

    }

    function shiftElem() {
        var shifted;
        shifted = arr.shift();
        document.getElementById('new6').innerHTML = printArr(arr);
        document.getElementById('task6_id').value = arr.length;
        document.getElementById('shift6').style = "color: maroon;";
        document.getElementById('shift6').innerHTML = "Shifted: " + shifted;

    }

    function unshiftElem() {
        arr.unshift(document.getElementById('task6_value').value);
        document.getElementById('new6').innerHTML = printArr(arr);
        document.getElementById('task6_id').value = arr.length;
        document.getElementById('task6_value').value = (Math.floor(Math.random() * 100));
        document.getElementById('unshift6').style = "color: green;";
        document.getElementById('unshift6').innerHTML = "Unshifted: " + arr[0];
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

    document.getElementById('task6_ok').onclick = addElem6;
    document.getElementById('task6_shift').onclick = shiftElem;
    document.getElementById('task6_unshift').onclick = unshiftElem;
    document.getElementById('task6_pop').onclick = popElem;
    document.getElementById('task6_push').onclick = pushElem6;
}());

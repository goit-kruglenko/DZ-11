function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

addScript('task1.js');
addScript('task2.js');
addScript('task3.js');
addScript('task4.js');
addScript('task5.js');
addScript('task6.js');

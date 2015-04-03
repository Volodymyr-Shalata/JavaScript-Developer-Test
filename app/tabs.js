define(function(){
    return [
        {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
        {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
        {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
    ];
});
//Оскільки з js в браузері не має доступу до файлової системи, а також відсутність в завданні пункту про написання серверу,
//зробив загрузку JSON даних через require модуль.
//Також, загрузку файлів можна було зробити використовуючи https://github.com/requirejs/text, але вирішив що немає різниці

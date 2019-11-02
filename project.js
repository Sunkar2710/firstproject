'use script';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == null || money == '') {
        money = +prompt('Ваш бюджет на месяц', '');
    }

}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time, 
    savings: true,
    chooseExpenses: function() {
        let n = 0;

        do{
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
            if ( ( typeof(a) ) === 'string' && ( typeof(b) ) === 'string' && ( typeof(a) ) != null && ( typeof(b) ) != null && a != '' && b != '' && a.length < 15 && b.length < 15) {
                console.log('Done');
                appData.expenses[a] = b;
                n++;
            } else {
                console.log('Bad result');
                n--;
            }
        }
        while (n < 2);
    }, 
    detectDayBudget: function() {

        if(appData.savings == true){
            appData.moneyPerDay = (appData.budget/30).toFixed();
            alert('Ежедневный бюджет: ' + appData.moneyPerDay + '$');
        }

    },
    detectLevel: function() {

        if(detectDayBudget < 100) {
            console.log('Минимальный уровень достатка');
        } else if (detectDayBudget > 100 && detectDayBudget < 2000) {
            console.log('Средний уровень достатка');
        } else if (detectDayBudget > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }

    },
    chooseOptExpenses: function() {

        for (let i = 0; i < 3; i++){
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }

    },
    checkSaving: function() {

        if (appData.savings == true) {
            let save = +prompt('Какова ваша сумма накоплений?', ''),
                percent = +prompt('Процент ваших накоплений', '');

                appData.monthIncome = (save/100/12*percent);
                alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }

    },
    chooseIncome: function(){

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        
        if( typeof(items) != 'string' || typeof(items) == null || items == '' ) {
            console.log('Данные были введены не корректно', '');
        }

        else {
            appData.income = item.split(',');
            appData.income.push(prompt('Вы также можете еще что-то указать', ''));
            appData.income.sort();
        }
        appData.income.forEach(function(i, new_items){
            console.log('Способы доп. заработка: '+ i+1 + ' - ' + new_items);
        });

    }
};

for(let key in appData){
    console('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}







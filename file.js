'use script';

let money = +prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time, 
    savings: false
};
 
let n = 0;
/*/
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ( ( typeof(a) ) === 'string' && ( typeof(b) ) === 'string' && ( typeof(a) ) != null && ( typeof(b) ) != null && a != '' && b != '' && a.length < 15 && b.length < 15) {
        console.log('Done');
        appData.expenses[a] = b;
    } else {

    }
}/*/

/*/
while (n < 2) {

    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    

    if ( ( typeof(a) ) === 'string' && ( typeof(b) ) === 'string' && ( typeof(a) ) != null && ( typeof(b) ) != null && a != '' && b != '' && a.length < 15 && b.length < 15) {
        console.log('Done');
        appData.expenses[a] = b;
    } else{
        console.log('Bad result');
        n--;
    }
    n++;

}/*/

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


appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay + '$');

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === 'string' && (typeof (a)) !== null &&
                (typeof (b)) !== null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {}
        }
    },
    detectDayBudget: function () {
        appData.budgetOfOne = (appData.budget / 30).toFixed();
        alert(`Ваш бюджет на 1 день равен ${appData.budgetOfOne}`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего заработка ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i + 1] = prompt("Статья необязательных расходов?", "");
        }
    },
    chooseIncome: function () {
        let items = prompt('Что несет дополнительный доход? (перечислите через запятую)', '');
        if (items !== null && typeof (items) === 'string' && items !== '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
        } else {
            this.chooseIncome();
        }
        console.log('Дополнительные доходы:');
        this.income.forEach((value, index) => console.log(`${index+1}. ${value}`));
    },
    showThisProgram: function () {
        console.log('Наша программа включает в себя:');
        for (let key in this) {
            console.log(key);
        }
    }
};


appData.showThisProgram();
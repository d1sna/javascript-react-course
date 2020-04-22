let startButton = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.querySelector('.expenses-item-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    fieldsOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeField = document.querySelector('#income'),
    checkbox = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    money, time,
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: [],
        income: [],
        savings: false
    };

startButton.addEventListener('click', () => {
    expensesBtn.style.backgroundcolor = 'red';
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();
});


expensesBtn.addEventListener('click', () => {
    if (appData.budget) {
        let sum = 0;

        for (let i = 0; i < expensesItems.length; i++) {
            let a = expensesItems[i].value,
                b = expensesItems[++i].value;

            if ((typeof (a)) === 'string' && (typeof (a)) !== null &&
                (typeof (b)) !== null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {}
        }
        expensesValue.textContent = sum;
    } else {
        alert('Сначала начните программу кнопкой начать расчет');
    }
});

optionalExpensesBtn.addEventListener('click', () => {
    if (appData.budget) {
        for (let i = 0; i < fieldsOptionalExpenses.length; i++) {
            let opt = fieldsOptionalExpenses[i].value;
            appData.optionalExpenses[i] = opt;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    } else {
        alert('Сначала начните программу кнопкой начать расчет');
    }
});

countBudgetBtn.addEventListener('click', () => {
    if (appData.budget) {
        if (appData.expenses) {
            let sumExpenses = 0;
            for (let key in appData.expenses) {
                sumExpenses += +appData.expenses[key];
            }
            appData.moneyPerDay = ((appData.budget - sumExpenses) / 30).toFixed();
        } else {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
        }

        daybudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        alert('Сначала начните программу кнопкой начать расчет');
    }
});

chooseIncomeField.addEventListener('input', () => {
    let items = chooseIncomeField.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('click', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {

    }
});
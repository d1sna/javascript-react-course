let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?"),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer4 = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && (typeof (a)) !== null &&
        (typeof (b)) !== null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {}
}

// let i = 0;

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof (a)) === 'string' && (typeof (a)) !== null &&
//         (typeof (b)) !== null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {}
//     i++;
// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof (a)) === 'string' && (typeof (a)) !== null &&
//         (typeof (b)) !== null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {}
//     i++;
// } while (i < 2);

appData.budgetOfOne = appData.budget / 30;

alert(`Ваш бюджет на 1 день равен ${appData.budgetOfOne}`);
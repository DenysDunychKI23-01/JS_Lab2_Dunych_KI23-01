// ==========================================
// РІВЕНЬ 4-6 БАЛІВ
// ==========================================

// 1) Prompt -> userName -> alert з шаблонним рядком
function task4_1() {
    let userName = prompt("Введіть ваше ім'я:");
    if (userName) {
        alert(`Hello, ${userName}! Welcome to JavaScript`);
    }
}

// 2) Вік та обчислення року народження
function task4_2() {
    let age = prompt("Введіть ваш вік:");
    if (age) {
        let currentYear = new Date().getFullYear();
        let birthYear = currentYear - Number(age);
        alert(`You were born in ${birthYear}`);
    }
}

// 3) Конкатенація через + та шаблонний рядок
function task4_3() {
    let firstName = prompt("Введіть ваше ім'я (firstName):");
    let lastName = prompt("Введіть ваше прізвище (lastName):");
    
    // Спосіб 1: через оператор +
    console.log('Your full name is [' + firstName + ' ' + lastName + ']');
    // Спосіб 2: через шаблонний рядок
    console.log(`Your full name is [${firstName} ${lastName}]`);
    alert("Результат виведено у консоль (F12)!");
}

// ==========================================
// РІВЕНЬ 7-9 БАЛІВ
// ==========================================

// 1) Глобальна та локальна зміна userName
let userName = "Denys"; // Глобальна змінна

function task7_1() {
    console.log("Глобальна змінна до блоку if:", userName);
    if (true) {
        let userName = prompt("Введіть нове ім'я для блоку if:"); // Локальна змінна
        console.log("Локальна змінна всередині if:", userName);
    }
    console.log("Глобальна змінна після блоку if:", userName);
    alert("Пояснення: зміна userName всередині if має блочну область видимості (let) і не переписує зовнішню глобальну змінну. Деталі в консолі (F12).");
}

// 2) Confirm та перевірка вибору
function task7_2() {
    let name = prompt("Введіть ваше ім'я:");
    let age = prompt("Введіть ваш вік:");
    
    let ok = confirm(`Hello, ${name}! Your age is ${age}. Continue?`);
    if (ok) {
        alert("Welcome!");
    } else {
        alert("Goodbye!");
    }
}

// 3) Перевірка числа на парність (%)
function task7_3() {
    let num = prompt("Введіть число:");
    if (num !== null && num !== "") {
        if (Number(num) % 2 === 0) {
            alert("Number is even");
        } else {
            alert("Number is odd");
        }
    }
}

// ==========================================
// РІВЕНЬ 10-12 БАЛІВ
// ==========================================

// 1) Функція calculate() та блочна область видимості
function task10_1() {
    let result = "Функціональне значення result";
    if (true) {
        let result = "Блочне значення result всередині if";
        console.log("Результат всередині блоку if:", result);
    }
    console.log("Результат на рівні функції:", result);
    alert("Результат перевірки блочної області видимості виведено у консоль (F12)!");
}

// 2) SecretNumber (Залишок від ділення номера в журналі на 10)
function task10_2() {
    const journalNumber = 7; // Номер у журналі
    const secretNumber = journalNumber % 10;
    
    let userGuess = prompt("Вгадайте число від 0 до 9:");
    if (userGuess !== null) {
        if (Number(userGuess) === secretNumber) {
            alert("Correct!");
        } else {
            alert(`Wrong! Secret number was ${secretNumber}`);
        }
    }
}

// 3) Сума двох чисел з конкатенацією через +
function task10_3() {
    let name = prompt("Введіть ваше ім'я:");
    let num1 = prompt("Введіть перше число:");
    let num2 = prompt("Введіть друге число:");
    
    let sum = Number(num1) + Number(num2);
    
    // Формат: «Hello, John! The sum of 5 and 7 is 12» через оператор +
    let message = "Hello, " + name + "! The sum of " + num1 + " and " + num2 + " is " + sum;
    console.log(message);
    alert(message);
}
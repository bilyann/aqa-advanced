// 1. Функція для отримання TODO
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Помилка отримання TODO: ${response.status}`);
            }
            return response.json(); // Парсимо JSON, це повертає новий проміс
        });
}

// 2. Функція для отримання USER
function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Помилка отримання USER: ${response.status}`);
            }
            return response.json();
        });
}

console.log("=== Старт мережевих запитів ===\n");

// 3. Використання Promise.all (Чекаємо ОБОХ результатів)
const allPromisesResult = Promise.all([fetchTodo(), fetchUser()]);

allPromisesResult
    .then(results => {
        // results — це масив, де [0] - результат першої функції, [1] - другої
        const [todo, user] = results; 
        console.log("--- Результат Promise.all (Усі завдання виконано): ---");
        console.log("Отриманий TODO:", todo);
        console.log("Отриманий USER:", user.name); // виведемо ім'я користувача для компактності
        console.log("---------------------------------------------------\n");
    })
    .catch(error => {
        console.error("Promise.all впав через помилку:", error);
    });

// 4. Використання Promise.race (Хто перший добіжить)
const racePromisesResult = Promise.race([fetchTodo(), fetchUser()]);

racePromisesResult
    .then(firstFinished => {
        console.log("--- Результат Promise.race (Хтось один фінішував першим!): ---");
        console.log("Перша готова відповідь:", firstFinished);
        console.log("---------------------------------------------------\n");
    })
    .catch(error => {
        console.error("Promise.race впав через помилку:", error);
    });
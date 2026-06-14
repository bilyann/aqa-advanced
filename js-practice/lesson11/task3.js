// 1. Асинхронна функція для отримання TODO
async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        throw new Error(`Помилка отримання TODO: ${response.status}`);
    }
    const data = await response.json(); // чекаємо на розпаковку JSON
    return data;
}

// 2. Асинхронна функція для отримання USER
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error(`Помилка отримання USER: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

// Головна асинхронна функція для запуску та обробки результатів
async function runMissions() {
    console.log("=== Старт мережевих запитів (Async/Await) ===\n");

    // --- Обробка Promise.all через try...catch ---
    try {
        // Запускаємо обидва запити паралельно і чекаємо на повний масив результатів
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        
        console.log("--- Результат Promise.all (Усі завдання виконано): ---");
        console.log("Отриманий TODO:", todo);
        console.log("Отриманий USER:", user.name);
        console.log("---------------------------------------------------\n");
    } catch (error) {
        console.error("Promise.all впав через помилку:", error);
    }

    // --- Обробка Promise.race через try...catch ---
    try {
        // Влаштовуємо перегони і чекаємо на першого, хто фінішує
        const firstFinished = await Promise.race([fetchTodo(), fetchUser()]);
        
        console.log("--- Результат Promise.race (Хтось один фінішував першим!): ---");
        console.log("Перша готова відповідь:", firstFinished);
        console.log("---------------------------------------------------\n");
    } catch (error) {
        console.error("Promise.race впав через помилку:", error);
    }
}

// Запускаємо нашу головну функцію
runMissions();
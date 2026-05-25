function checkOrder(available, ordered) {
    // 1. Перевірка на порожнє замовлення
    if (ordered === 0) {
        return "Your order is empty";
    }
    
    // 2. Перевірка на нестачу товару на складі
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    }
    
    // 3. Якщо попередні умови не справдились — замовлення успішне
    return "Your order is accepted";
}

// --- Тест-кейси для перевірки (виклики в консоль) ---

// Кейс 1: Товари є, замовлення успішне
console.log(checkOrder(10, 5));  // Очікуємо: "Your order is accepted"

// Кейс 2: Замовлено більше, ніж є на складі
console.log(checkOrder(10, 15)); // Очікуємо: "Your order is too large, we don’t have enough goods."

// Кейс 3: Порожнє замовлення
console.log(checkOrder(10, 0));  // Очікуємо: "Your order is empty"
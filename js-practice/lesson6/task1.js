// Спосіб 1: Function Declaration (Оголошення функції)
function calculateAreaDeclaration(width, height) {
    return width * height;
}

// Виклик першої функції
const area1 = calculateAreaDeclaration(5, 10);
console.log(`Function Declaration result: ${area1}`);


// Спосіб 2: Function Expression (Функціональний вираз)
const calculateAreaExpression = function(width, height) {
    return width * height;
};

// Виклик другої функції
const area2 = calculateAreaExpression(8, 4);
console.log(`Function Expression result: ${area2}`);


// Спосіб 3: Arrow Function (Стрілкова функція)
const calculateAreaArrow = (width, height) => width * height;

// Виклик третьої функції
const area3 = calculateAreaArrow(7, 6);
console.log(`Arrow Function result: ${area3}`);
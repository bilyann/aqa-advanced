// Завдання 4.1: Обчислення площі кола
const circleRadius = 5.5;
// Формула: π * radius^2
const circleArea = Math.PI * (circleRadius ** 2);

console.log("--- Task 4.1: Circle Area ---");
console.log("Radius:", circleRadius);
console.log("Calculated Area (raw):", circleArea);
console.log("Rounded Area (2 decimals):", circleArea.toFixed(2));
console.log("Rounded Area as Number:", Number(circleArea.toFixed(2)));


// Завдання 4.2: Обчислення площі прямокутника
const rectangleLength = 12.4;
const rectangleWidth = 7.2;
// Формула: length * width
const rectangleArea = rectangleLength * rectangleWidth;

console.log("\n--- Task 4.2: Rectangle Area ---");
console.log(`Dimensions: ${rectangleLength} x ${rectangleWidth}`);
console.log("Calculated Area (raw):", rectangleArea);
console.log("Rounded Area (2 decimals):", rectangleArea.toFixed(2));


// Завдання 4.3: Обчислення об'єму циліндра
const cylinderRadius = 3.2;
const cylinderHeight = 10.5;
// Формула: π * radius^2 * height
const cylinderVolume = Math.PI * (cylinderRadius ** 2) * cylinderHeight;

console.log("\n--- Task 4.3: Cylinder Volume ---");
console.log(`Parameters: radius = ${cylinderRadius}, height = ${cylinderHeight}`);
console.log("Calculated Volume (raw):", cylinderVolume);
console.log("Rounded Volume (2 decimals):", cylinderVolume.toFixed(2));
// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let number = [1, 2, 3];
number[1] = 10;
console.log(number);

// 2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let fruits = ["яблуко", "банан", "вишня"];
fruits.push("груша");
console.log(fruits);

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
let numbers = [5, 10, 15, 20]; 

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let fiveNumbers = [10, 20, 30, 40, 50];
for (let i = 0 + 1; i < fiveNumbers.length; i++) {
    console.log("Елемент", i, ":", fiveNumbers[i]);
}

// 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
let textArray = ["котик", "машина", "електроніка", "ручка", "планшет"];
for (let str of textArray) {
    if (str.length > 5) {
        console.log(str);
    }
 
}

// 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let tenNumbers = [23, 45, 12, 78, 34, 56, 89, 11, 9, 67];
let max = Math.max(...tenNumbers);
console.log(max);

// 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let numsArray = [2, 7, 10, 13, 4, 8, 9, 16, 21, 22];
for (let num of numsArray) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
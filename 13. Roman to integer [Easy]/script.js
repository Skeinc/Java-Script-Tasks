/*
Given a roman numeral, convert it to an integer.
*/
let romanToInt = function(s) {
    // Ограничения
    if(s.length < 1) return false;
    if(s.length > 15) return false;
    // Объявление константы
    const nums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // Объявление результата
    let result = 0;
    // Решение
    for (let i = 0; i < s.length; i++) {
        const currentElem = nums[s[i]];
        const nextElem = nums[s[i+1]];
        // Проверка на вычитание
        if(currentElem < nextElem) {
            result += nextElem - currentElem;
            i++;
        }
        else {
            result += currentElem;
        }
    }
    return result;
};
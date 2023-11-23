/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/
let isPalindrome = function(x) {
    // Ограничения
    if(Math.abs(x) > Math.pow(2,31)) return false;
    // Проверка на отрицательное число
    if(x < 0) return false;
    // Проверка на длину числа
    if(x.length == 1) return true;
    // Преобразование в строку
    x = String(x);
    for(let i = 0; i < x.length/2; i++) {
        if(x[i] != x[x.length-1-i]){
            return false;
        }
    }
    return true;
};
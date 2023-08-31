/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
*/
const plusOne = function(digits) {
    // Ограничения
    if (digits.length < 1 || digits.length > 100) return false;
    for(let i = 0; i < digits.length; i++) {
        if(digits[i] < 0 || digits[i] > 9) return false;
    }
    // Решение
    return String(BigInt(digits.join("")) + BigInt(1)).split("");
};
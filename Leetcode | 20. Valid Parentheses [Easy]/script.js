/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
*/
let isValid = function(s) {
    // Ограничения
    if(s.length < 1) return false;
    if(s.length > Math.pow(10,4)) return false;
    // Если строка меньше двух символов или пустая
    if (!s || s.length < 2) {
        return false;
    }
    // Решение
    let stack = [];
    for (let c of s) {
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        }
        else {
            if (!stack.length) {
                return false;
            }
            let last = stack.pop();
            if (c === ')' && last !== '(') {
                return false;
            }
            if (c === ']' && last !== '[') {
                return false;
            }
            if (c === '}' && last !== '{') {
                return false;
            }
        }
    }
    return !stack.length;
};
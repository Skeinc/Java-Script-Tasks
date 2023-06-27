/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
let longestCommonPrefix = function(strs) {
    // Ограничения
    if(strs.length < 1) return false;
    if(strs.length > 200) return false;
    for(let i = 0; i < strs.length; i++) {
        if(strs[i].length < 0) return false;
        if(strs[i].length > 200) return false;
        strs[i].toLowerCase();
    }
    // Решение
    let result = strs[0];
    let temp = "";
    for(let i = 1; i < strs.length; i++) {
        for(let j = 0; j < result.length; j++) {
            if(result[j] == strs[i][j]){
                temp += result[j];
            }
            else {
                break;
            }
        }
        result = temp;
        temp = "";
    }
    return result;
};
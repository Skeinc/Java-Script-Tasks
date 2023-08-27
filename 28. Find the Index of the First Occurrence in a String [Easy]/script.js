/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/
const strStr = function(haystack, needle) {
    // Ограничения
    if(haystack.length < 1) return false;
    if(haystack.length > Math.pow(10,4)) return false;
    // Решение
    return haystack.indexOf(needle);
};
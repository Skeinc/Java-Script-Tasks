/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
*/
const lengthOfLastWord = function(s) {
    s = s.trim();
    s = s.split(" ");
    return s[s.length-1].length;
};
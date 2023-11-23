/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
*/
const mySqrt = function(x) {
    if(x < 0) return new Error("x is negative integer");
    for(let i = 0; i <= x + 1; i++) {
        if(i*i > x) {
            return Math.round(i-1);
        }
    }
};
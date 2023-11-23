/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
*/
const searchInsert = function(nums, target) {
    // Ограничения
    if(nums.length < 1) return false;
    if(nums.length > Math.pow(10, 4)) return false;
    if(target > Math.abs(Math.pow(10, 4))) return false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > Math.abs(Math.pow(10, 4))) return false;
    }
    // Решение
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        }
        else if(target > nums[nums.length-1]) {
            return nums.length;
        }
        else if(target < nums[0]) {
            return 0;
        }
        else {
            break;
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(target > nums[i]) {
            continue;
        }
        else {
            return i;
        }
    }
};
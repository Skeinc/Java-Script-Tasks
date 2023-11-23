/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
Then return the number of elements in nums which are not equal to val.
*/
let removeElement = function(nums, val) {
    // Ограничения
    if(nums.length < 0 || nums.length > 100) return false;
    if(val < 0 || val > 100) return false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0 || nums[i] > 50) return false;
    }
    // Решение
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[k++] = nums[i];
        }
    }
    return k;
};
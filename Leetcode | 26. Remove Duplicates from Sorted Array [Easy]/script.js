/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
*/
let removeDuplicates = function(nums) {
    // Ограничения
    if(nums.length < 1 && nums.length > 3*Math.pow(10,4)) return false;
    nums.sort((a,b) => {
        return a - b;
    });
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < -100 && nums[i] > 100) return false;
    }
    // Решение
    let currentIndex = 0;
    for(let i = -1; i < nums.length-1; i++) {
        if(nums[i+1] !== nums[i]) {
            nums[currentIndex] = nums[i+1];
            currentIndex++
        }
    }
    nums.length = currentIndex;
    return nums.length;
};
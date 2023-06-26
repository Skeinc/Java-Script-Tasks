`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.`

let twoSum = function(nums, target) {
    // Ограничения
    if(nums.length < 2) return false;
    if(nums.length > Math.pow(10,4)) return false;
    for(let i = 0; i < nums.length; i++) {
        if(Math.abs(nums[i]) > Math.pow(10,9)) return false;
    }
    if(Math.abs(target) > Math.pow(10,9)) return false;
    // Решение
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i,j];
            }
        }
    }
};
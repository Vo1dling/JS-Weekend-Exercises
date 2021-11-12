function findUniq(nums) {
    for (let i = 0; i < nums.length; i++) {
        let found = false;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i] && i != j) {
                found = true;
                break;
            }
        }
        if (!found) return nums[i];
    }
};
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
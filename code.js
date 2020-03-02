let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; ++i) {
        let temp = target - nums[i];
        let found = nums.findIndex(item => item === temp);
        if (found !== -1 && found !== i) {
            return [i, found];
        }
    }
};

function main() {
    console.log(twoSum([2, 7, 11, 15], 9));
    // document.querySelector('#testCode').innerHTML = mirrorTree('#testCode');
}
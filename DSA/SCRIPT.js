// #my approch for two sum leetcode first question
var twoSum = function (num, target) {
    let flag = 0;
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] == target) {
                console.log(`[${i}, ${j}]`)
                flag += 1;
                break;
            }
        }
        if (flag == 1) {
            break;
        }
    }
    if (flag == 0) {
        console.log("Sum not possible")
    }
}
let ar = [2,7,11,14]
let target = 9
twoSum(ar,target) 



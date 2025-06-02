// function addThreeNumber(a,b,c) {
//     return a+b+c
// }
// console.log(addThreeNumber(1,2,3))


//currying
function sumOfTwoNumber(a) {
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}
let sum = sumOfTwoNumber(1)(2)(3)
console.log(sum);

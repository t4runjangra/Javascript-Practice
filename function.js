// function addtwoNumber(num1, num2){
//     let result = num1+num2
//     return result
// }
// let result = addtwoNumber(2,4)
// console.log(result);

// function Table(num){
//     let i, multi=1;

//     for(i=1;i<=10;i++){
//         multi = i * num
//         console.log(`${num} * ${i} = ${multi}`)
//     }
// }
// Table(2)


// function factorial(num){
//      let fact = 1 ,i 
//      for(i=num;i>=1;i--)
//         fact = fact*i   
//     return fact
// }
// let fact = factorial(3)
// console.log(fact)


//object through function 

// let object = {
//     name:"tarun",
//     age:19,
//     city:"Panipat"
// }
// function handleObj(Obj){
//     return `hi my name is ${object.name} i'm ${object.age} old and i live in ${object.city} ` 
// }
// console.log(handleObj())


// direct use of object while calling the function through passing object as argument
// function handleObj(anyobject){
//     return `hi my name is ${anyobject.name} i'm ${anyobject.age} old and i live in ${anyobject.city} ` 
// }
// console.log(handleObj({
//     name:"tarun",
//     age:19,
//     city:"Panipat"

// }))




//Array through function

// let arr = [100,200,22,322]
// function Arrayaccess(arr){
//     return arr[1]
// }
// console.log(Arrayaccess(arr));

// direct passing array as an argument

// function Arrayaccess(arr){
//     return arr[3]
// }
// console.log(Arrayaccess([100,200,22,322]))


// **************************************** calculator with function*********************************************



function calculateSum(num1, num2) {
  return num1 + num2;
}

// console.log(calculateSum(2, 5));
// console.log(calculateSum(10, 10));
// console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

// console.log(calculateDifference(22, 5));
// console.log(calculateDifference(12, 1));
// console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

// console.log(calculateProduct(13, 5));


function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

// console.log(calculateQuotient(7, 11));
// console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

// console.log(calculateSquare(2));
// console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}


// ARROW function
let addtwoNumber = (num1, num2) => {
  return num1+num2
}
// console.log(addtwoNumber(3,5));

//IIFE (Immediately Invoked Function Expression)
const result = (() => ({ name: "Tarun" }))();
// console.log(result.name); 

// let print = (( ) => ({name: "Tarun"}))()
// console.log(print.name);


// (()=>{
//   console.log("tarun"); }
// )()

// IIFE 
(function(){
  console.log("tarun"); }
)();


//async function in js with frtch 
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

fetchData();

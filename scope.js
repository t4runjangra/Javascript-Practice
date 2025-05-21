// local scope
// like if else block for loop after that we use {} which makes a block inside of that scope we declare something is known as local scope 
if(true){
    // if i use something here is start from { and end on the }
    let a = 30; // a is a local variable and i cant access outside of the if block because of local scope
    console.log("INNER:", a); 
}
// global scope
let a =300 
console.log(a);

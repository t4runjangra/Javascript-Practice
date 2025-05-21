// objects in js
// there are two types of objects initialization constructor and literals
// {} this is an object (empty object) the curly braces are the symbol of objects 
// lets create a object with the name of user
// ***************************Object Literals ******************************************


// let user = {
//     name : "tarun",
//     age : 19,
// } 


// here i created an object named user which has two keys and two values before : the identifier are knows as keys after : there are values 

// we can access objects with the help of keys 
// the keys are by default treated as string that means name and "name" are same 

// there are two methods of accessing an object "." and "[]"

// console.log(user.name);// "." method 

// console.log(user["name"]); // "[]" method in this method inside the [] we have to use " " because name is by default treated as string that's why if we don't use " " inside the [] it will cause an error

// there is a method where you can access the object only  with [] 

// let user = {
//     name : "tarun",

//     // "full name":"Tarun jangra",
//     age : 19,
// } 

// now i can't access the full name with "." method 

// to access the full name
// console.log(user["full name"]);

// can change the value of key outside the object 
// user.name = "jangra"
// console.log(user.name);
// if i want to freeze the value of an object i can use object.freeze("objectName")

// Object.freeze(user)
// user.age = 22
// console.log(user);


// we can add functions too 

// user.greet = function(){
//     console.log(`hi guys,i'm ${this.name} and i'm ${this.age} old, Nice to Meet you!` );
// }
// user.greet()// to use or call a function use this () after your defined name


// console.log(user.greet());// will get undefined here because greet() itself doesn't return anything, so it implicitly returns undefined.



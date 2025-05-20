// string practice in javascript

let str1 = "Tarun-jangra-here"
let str2 = "Jangra"
// String Interpolation Method 
// console.log(`hi my name is ${str1} and my last name is ${str2} `);

// Old string concatination method
// console.log("hi my name is " + str1+ " and my last name is " +str2 );

// string indexing starts from 0 in js
// console.log(str1[0]) // here i accessed the element which is on 0th index of the str1 string

// console.log(str1[8]) // here i tried accessed the element which is on 8th index of the 1str1 string which is out of the range of the string length that's why the out says undefined

//string length 
// console.log(str1.length);//here i used the str.length function to find the length of the string

// converting String from lowercase to upper case 
// console.log(str1.toUpperCase);// here i made a mistake i tried to access string function without () i didn't get any error but when i run my program i got[Function: toUpperCase] it told me that here toUpperCase is an function 

// console.log(str1.toUpperCase());// output i got here TARUN 

// same goes with lower case 

// let newString = str1.toLowerCase() //converted Tarun String into tarun 
// console.log(newString);

// another method
// let newString1 = str1.toUpperCase()   // unnecessary
// console.log(newString1.toLowerCase());

//string slice or making a substring
// let newString = str1.slice(-5,0) // slice method take range to slice the main string it doesn't count the last index of it so from 0 to 4 originally it print Taru instead of Tarun 
// also if i put index range more than last index value it doesn't gave any error it works perfectly
// can't use negative index here
// console.log(newString);


// split method
// let newString = str1.split('-') // split the string into array because of - provided inside ()
// console.log(newString);


//charAt method tells the value present at the index provided
// let newString = str1.charAt(2)
// console.log(newString);


// indexOf Function tells the interpreater to find the character at the index of the string
// let newString = str1.indexOf(n) // got error because js don't read the charachter without "" , '' 
// console.log(newString)

// console.log(str1.indexOf("n"));// correct way

//replace method
// console.log(str1.replace('-'," ")); //replaced only first occurence
// console.log(str1.replaceAll('-'," ")); // replaced all 

// for loop
for (let i = 0; i < 10; i++) {
  const element = i;
  // console.log(element);
}

// break statement

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  // console.log(i);
}

//continue statrment
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // console.log(`skipped 5 from here`)
    continue;
  }
  // console.log(i);
}
// for loop through an array
// let arr=[1,2,3,4,5,6]
// for (let i = 0; i< arr.length; i++) {
//     const element = arr[i];
//     // console.log(`this is an array element , element number ${i} =  ${element} and the type of the array element is ${typeof(element)}`);
// }

// While loop syntax
// while (condition) {

// }
// while (i<10) {
//     console.log(i);
//     i++;
// }

// array through a while loop
// let arr1=[1,2,3,4,5,6]
// let i = 0;
// while (i<arr1.length){
//     console.log(arr1[i]);
//     i++;
// }

// do while loop
// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (i<10);

// for of loop
// let arr=[1,2,3,4,5,6,7,8]
// for (const element of arr) {
//     console.log(element)
// }

//map
// let map = new Map()
// map.set('first name', "Tarun")
// map.set('last name', "Jangra")
// map.set('github',"https://www.github.com/t4runjangra")
// console.log(map);
// get values like
//'first name'=> "Tarun"

// for (const mapElements of map) { // got array after using it
//     console.log(mapElements)
// }
// for (const [values, values] of map) { // can destruct the values and values by using [] on the iterator
//     console.log(`${values} and there values ${values} and type of the element returend by desturcting ${typeof(values)}`) // hence it give string as an output
// }
// forof loop can be used in the Map but not in object

// object

// let myObj = {
//     name:'tarun',
//     lastname:'jangra',
//     number:'123456',
//     js:'javascript'
// }
// for (const value in myObj) {
//     console.log(`${value} values are:- ${myObj[value]}`);
// }//for in loop provide keys instead of values

//for each loop
// const myArr = ["tarun", "Aman", "Ram"];
// myArr.forEach(function (items){
//     console.log(items);
// })

// myArr.forEach((item)=>{
//     console.log(item)
// })

// function print(item){
//     console.log(item);
// }
// myArr.forEach(print)
//
// myArr.forEach((item,i,arr) => {
//   console.log(item,i,arr);
// });



// filter method
// const myArr = [1,2,3,4,5,6,7,8,9] // took a array
// let newArr = myArr.filter((item) => item>5) //add filter property on myArr and inside the filter it gives a call back function so i use arrow function in it , here item is a parameter 

// let newArr = myArr.filter( (item) => {
//   return item>5
// }) // here i opened a scope after arrow function to return the logic inside we have to use the  return keyword 
// console.log(newArr) 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]; 

// let myBooks = books.filter((book) => {
//   return book.genre === 'History'
// })

// let myBooks = books.filter((book)=>book.publish >=2000 && book.edition >= 1980)
// console.log(myBooks)

// reduce method 

// let nums = [1,2,3,4,5,6,7,8,9,10]
// let i=0;
// let newNums = nums.reduce((acc, curval)=>{ return acc+curval},0)
// console.log(newNums)



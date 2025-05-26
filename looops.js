// for loop 
for (let i = 0; i < 10 ; i++) {
    const element =  i ;
    // console.log(element);  
}

// break statement

for (let i = 0; i < 10; i++) {
    if (i==5) {
        break;
    }
    // console.log(i);
}

//continue statrment
for (let i = 0; i < 10; i++) {
    if (i==5) {
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
let map = new Map()
map.set('first name', "Tarun")
map.set('last name', "Jangra")
map.set('github',"https://www.github.com/t4runjangra")
// console.log(map);
// get values like 
//'first name'=> "Tarun"

// for (const mapElements of map) { // got array after using it
//     console.log(mapElements)
// }
// for (const [keys, values] of map) { // can destruct the keys and values by using [] on the iterator
//     console.log(`${keys} and there values ${values} and type of the element returend by desturcting ${typeof(keys)}`) // hence it give string as an output
// }
// forof loop can be used in the Map but not in object
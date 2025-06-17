const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("async is completed")
        resolve()
    }, 1000);
})
promiseOne.then(function() {
    console.log("promise complete");
})


new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("async is done")
        resolve()
    },1000)
}).then(function(){
    console.log("promise is completed")
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async is done")
resolve({
    username:"Tarun",
    pass:"123",
    age:"19"
})
    }, 1000);
})
promiseThree.then(function(data){
    console.log(data);
    return data.username
})
.then(function(username){
    username = "anuj"
    console.log(username);
})




const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({
                username: "Tarun",
                pass: "123",
                age: "19"
            })
        } else {
            reject("Something went wrong")
        }
    }, 1000);
}).then(function (resp) {
    console.log(resp)
}).catch(function (error) {
    console.log("e:", error);
}).finally(()=>{
    console.log("either the promise is rejected or resolved");
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (error) {
            resolve({
                username: "Tarun",
                pass: "123",
                age: "19"
            })
        } else {
            reject("Something went wrong")
        }
}, 1000)})


async function consumeData() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumeData()



async function consumeData() {
    try {
       const data = await fetch('https://jsonplaceholder.typicode.com/users')
       const response = await data.json()
       console.log(response);
       
    } catch (error) {
        console.log("e: ",error)
    }
}
consumeData()



fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json
}).then(function (data) {
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
// function car(type) {
//     this.type = type
// }
// let audi = new car('audi')
// // console.log(audi);

// let bmw = new car('bmw')
// console.log(bmw);
// car.prototype.sound = function (name) {
//     this.name = name
//     return ` ${this.type} do  ${name}`
// }
// let supra = new car("supra")
// console.log(supra.sound("ratataata"));

// class student{
//     #name = "";
//     #rollno = 0;
//     studentDetails(studentName, studentRollnumber){
//         this.#name = studentName
//         this.#rollno = studentRollnumber
//         return `${this.#name} ${this.#rollno}`
//     }
//     getData(){
//         return`Name of the student is ${this.#name} and his roll number is ${this.#rollno}`
//     }
// }
// let stu1 = new student()
// stu1.studentDetails("Tarun", 12)
// console.log(stu1.getData());


class emp{
    constructor(name,salary,empId){
        this.name = name
        this.salary = salary
        this.empId= empId
        // return ` ${this.name} ${this.salary} ${this.empId}`
    }
    getdata(){
        return `name of the employee  ${this.name} salary ${this.salary} ${this.empId}`
    }
}
let emp1 = new emp("Tarun",120000,12)
console.log(emp1.getdata());

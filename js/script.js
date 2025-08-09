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


// class emp{
//     constructor(name,salary,empId){
//         this.name = name
//         this.salary = salary
//         this.empId= empId
//         // return ` ${this.name} ${this.salary} ${this.empId}`
//     }
//     getdata(){
//         return `name of the employee  ${this.name} salary ${this.salary} ${this.empId}`
//     }
// }
// let emp1 = new emp("Tarun",120000,12)
// console.log(emp1.getdata());


//polymorphism

// class vehical {
//     sound() {
//         return `ratatata`
//     }
// }
// class supra extends vehical{
//     start(){
//         return `supra do ${this.sound()}`
//     }
// }
// let car = new vehical
// console.log(car.sound());
// let supraA = new supra
// console.log(supraA.start());

//static

// class calculator{
//     static sum(a,b){
//         return a+b;
//     }
// }
// console.log(calculator.sum(2+3,5));


//getter and setter

// class square{
//     constructor(side){
//         this._side = side
//     }
//     get side(){
//         return this._side
//     }
//     set side(newSide){
//         this._side = newSide
//     }
//     get area(){
//         return `${this._side**2}`
//     }
// }
// let sq = new square("2")
// console.log(sq.area);



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    return `${this.name} is studying ${this.course}.`;
  }
}

const student1 = new Student("Tarun", 19, "BCA");
console.log(student1.greet());
console.log(student1.study());





class student{
    constructor(name , age, rollNumber){
        this.name = name
        this.age=age
        this.roll= rollNumber
    }
    rollNo(){
        return this.roll
    }
}
class bcaStudent extends student{
    constructor(name, age, rollNumber, studentphone, classRoll, studentId){
        super(name,age,rollNumber);
        this.studentphone = studentphone
        this.classRoll= classRoll
        this.studentId = studentId
    }
    studentDetails(){
        return {
            name : this.name ,
            roll : this.roll , 
            age : this.age ,
            studentphone : this.studentphone ,
            classRoll : this.classRoll ,
            studentId : this.studentId
            
        }
    }
}
let tarun = new student ("tarun", 19 , 1221)

let aman = new bcaStudent("Aman",20,19,8708859187,1240298050,"4DX89") 
console.log(aman.studentDetails())
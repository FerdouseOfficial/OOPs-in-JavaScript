// function Student(name, age) {
//   (this.name = name), (this.age = age);
//   this.introduceMyself = function () {
//     console.log(`Hello, My name is ${this.name}. My age is ${this.age}`);
//   };
// }

// let s1 = new Student("Arafat", "11.3");
// console.log(s1);
// s1.introduceMyself();

// let s2 = new Student("Sumaiya", "20");
// console.log(s2);
// s2.introduceMyself();

// Its working fine but the introduceMyself Function is taking different different space to store. 

// that's happening just because of We don't use ProtoType here.

// here is the solution 

// function Student(name, age) {
//   (this.name = name), (this.age = age);

//   // here you can apply the prototype
//   Student.prototype.introduceMyself = function () {
//     console.log(`Hello, My name is ${this.name}. My age is ${this.age}`);
//   };
// }

// // by this way

// // Student.prototype.introduceMyself

// let s1 = new Student("Arafat", "11.3");
// console.log(s1);
// s1.introduceMyself();

// let s2 = new Student("Sumaiya", "20");
// console.log(s2);
// s2.introduceMyself();


// Lets practice more okay. 

// By creating a back system okay:---------

function BankAccount()
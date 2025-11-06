let body = document.querySelector("body");
let style = (body.style.backgroundColor = "black");
body.style.color = "#eee";

// Learnin the prerequisits

// Learning the basic concept before jumping into OOPs

// start practicing the concept

// let date = new Date();
// console.log(date);

// let student = {
//   name: "MKL",
//   age: 21,
//   passion: "bkaiti",
//   introduceMySelf: function () {
//     // console.log(this)
//     console.log("hello");
//   },

//   // practice the concpet of This Keyword

//   // introduceMySelf: function(){
//   //     console.log(`My name is ${this.name}. My age is ${this.age}. My passion is ${this.passion}`)
//   // }
// };

// let student2 = {
//   name: "sarita",
//   age: 19,
//   passion: "bkati",
//   introduceMySelf: function () {
//     console.log(
//       `My name is ${this.name}. My age is ${this.age}. My passion is ${this.passion}`
//     );
//   },
// };

// let student3 = {
//   name: "Mohit",
//   age: 22,
//   passion: "bkati",
//   introduceMySelf: function () {
//     console.log(
//       `My name is ${this.name}. My age is ${this.age}. My passion is ${this.passion}`
//     );
//   },
// };

// // console.log(student)
// student.introduceMySelf();
// student2.introduceMySelf();
// student3.introduceMySelf();


// theere is simle way to avoid this large code here is how:-



// =============================================================
// The different ways to create and use objects in JavaScript--- these are the foundation for understanding OOp in JS:-

//     1. Object Literal
//     2. Factory Functiona
//     3. Constructor Function
//     4. class Syntax
// =================================================================

// 1. This is Object literal or Singleton Object
// let student2 = {
//   name: "sarita",
//   age: 19,
//   passion: "bkati",
//   introduceMySelf: function () {
//     console.log(
//       `My name is ${this.name}. My age is ${this.age}. My passion is ${this.passion}`
//     );
//   },
// };

                    // 2. Factory function 

function Student(){
    return {}
}

let result = Student();
console.log(result)
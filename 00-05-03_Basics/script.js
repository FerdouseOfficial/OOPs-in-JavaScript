// let body = document.querySelector("body");
// let style = (body.style.backgroundColor = "black");
// body.style.color = "#eee";

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
// we can also pass parameter here

// POINT: -remember if the paramerter name or the Key: value pair name is same you can just write one
// function Student(name, age, passion) {
//   return {
//     name, // read POINT in up what I write in comment. No confus
//     age, // read POINT in up what I write in comment. No confus
//     passion, // read POINT in up what I write in comment. No confus
//     introduceMySelf: function () {
//       console.log(
//         `My name is ${this.name}. My age is ${this.age}. My passion is ${this.passion}`
//       );
//     },
//   };
// }

// let s1 = Student("sara", 19, "Fucka");
// console.log(result);
// s1.introduceMySelf()

// but the problem here in the FACTORY FUNCITON IS we Doesn't involve protypes by default(uinless we manually set htem)

// What is Prototype and this staff we will clear it up later not now or we will be cofused. We will follow the 4 steps now okay

// ---------------------------- 3. Constructor Function ------------

// function Student(name, age, passion) {
  //( return {
  //   name, // read POINT in up what I write in comment. No confus
  //   age, // read POINT in up what I write in comment. No confus
  //   passion, // read POINT in up what I write in comment. No confus
  //   introduceMySelf: function () {
  //     console.log(
  //       `My name is ${this.name}. My age is ${this.age}. My passion is ${this.passion}`
  //     );
  //   },
  // };)

  // we don't need those commented out part I don't delete it just because of Difference shwowing.

  // console.log(this);

  // -----------------------------
//   this.s1 = name,
//   this.s2 = age,
//   this.s3 = passion
//   return this
// }

// let result = Student("Hasan", 15, "Hacking ");
// console.log(result );

// let r2 = Student("rohan", 18, "Rozario");
// console.log(r2)

// here in this construction way we have a problem of OVER-RIDING VALUE
// To fix that we have to use new keyword here okay 

// just like this 

// let result = new Student("Hasan", 15, "Hacking ");
// console.log(result );

// let r2 = new Student("rohan", 18, "Rozario");
// console.log(r2)


// ------------------------------------------ 04: Class Syntax -------------------------------------------------------

// Class Syntax (es6)


class Student {
  // name = "Manas";
  // age = 19;          // We don't need it now okay
  // passion = "coding";
  constructor(name, age, passion) {
    this.name = name,
    this.age = age,
    this.passion = passion
  }
  greet() {
    console.log(`Hey, I'm ${this.name}`);
  }
   
}

let s1 = new Student("Lion", 12, "Playing")
console.log(s1);


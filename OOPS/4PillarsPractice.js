// Programming Paradigm:- means a way of programming

// Object-Oriented Programming (OOPs) in JavaScript is a programming paradigm based on the concept of objects.

// These objects encapsulate both data (attributes) and the functions that operate on the data (methods).

// JavaScript, while not a purely class-based language like Java or C++, is heavily object-oriented and supports OOP principles through its prototype-based model and class syntax.

//                      Class:
// A blueprint or template, encapsulating data (properties) and functions (methods)

//      OBJECT:
// Instance of a class; each object has its own unique set of values for its properties

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Class & Object

// 4 Pillars of OOPs (Object Oriented Programming)
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism

// ======================================================================================================================================================================================

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. Abstraction == Hiding complexity and showing only th essential features.
// 2. Encapsulation == hiding data inside objects and provide security.
// 3. Inheritance == using properties and methods from anotehr object/class. :- Its comes from DRY- (Don't Repeat Your Code ) concepts so that we don't need to write same thing so many times okay
// 4. Polymorphism == same method behaving differently based on the object.

//  If you ever have any problem to understand go for this 2 hours 4 minutes Times Stamps okay ========================================================================================================================================================================================================================================

//                      Abstraction

class Car {
  fuel = 100;
  burnFuel() {
    this.fuel -= 1;
  }

  start() {
    console.log("Car is starting..........");
  }
}




















// band account using Class

// class BankAccount {
//     constructor(holdersName, Balance = 0) {
//         this.holdersName = holdersName;
//         this.Balance = Balance;
//     }
//     Deposit(Balance) {
//         this.Balance += Balance;
//     }
//     Withdraw(Balance) {
//         this.Balance -= Balance;
//     }
// }

// let manas = new BankAccount("Manash", 200)
// console.log(manas);

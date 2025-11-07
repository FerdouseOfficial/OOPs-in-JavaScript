// Programming Paradigm:- means a way of programming

// Object-Oriented Programming (OOPs) in JavaScript is a programming paradigm based on the concept of objects.

// These objects encapsulate both data (attributes) and the functions that operate on the data (methods).

// JavaScript, while not a purely class-based language like Java or C++, is heavily object-oriented and supports OOP principles through its prototype-based model and class syntax.

//                      Class:
// A blueprint or template, encapsulating data (properties) and functions (methods)

//      OBJECT:
// Instance of a class; each object has its own unique set of values for its properties

class Car {
  constructor(name, color, mileage) {
    this.name = name;
    this.color = color;
    this.mileage = mileage;
  }

  start() {
    console.log(`${this.name} car is starting....`);
  }

  stop() {
    console.log(`${this.name} car is stopping.....`);
  }
}

let Bmw = new Car("BMW", "Dark Blue", 45);
let Buggati = new Car("Buggati", "Brown", 5);
let Toyota = new Car("Toyota", "Silver", 28);

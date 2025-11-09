// Inheritance and Polymorphism :------------

// Inheritance is an  concept where one class (child) can acquire properties and methods of another class (parent).

// 1. Reuse exiting code 
// 2. create logical relationships (is-a)
// 3. Reduce duplication 
// 4. Easier maintenace and scalability \

// 5. Most useful for DRY 

// Actually that's how it works okay. Okay 


// start practicing okay // 

// Please try to add extra feature here okay
// Also convert them into typescript code 

// we can call it parent class
// Or we can call it supe class 
// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }


//     start() {
//         console.log("Car is starting.......... ");
//     }
//     stop() {
//         console.log("Car is stopping..........")
//     }
//     drive() {
//         console.log(`${this.brand} is driving.....`)
//     }
// }

// the ElectricCar is a derived class which is build from the CAR okay
// we can call it child class or derived class okay
// class ElectricCar extends Car {
//     constructor(brand, color,battery) {
//         super(brand, color) // call parent using super keyword
//         // super keyword is used to call the parent class and send them value.
//         this.battery = battery;
//     }
//     drive() {
//         console.log(`${this.brand} is driving silently with ${this.battery}% battery`);
//     }
//     charge() {
//         console.log(`${this.brand} is charging......`);
//     }

// }
 
// const Tesla = new ElectricCar("Tesla", 80);
// console.log(Tesla)
// Tesla.drive()
// Tesla.start()
// Tesla.charge()


// PolyMorPhism 


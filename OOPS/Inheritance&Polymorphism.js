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
class Car{
    constructor(brand){
        this.brand = brand;
    }


    start() {
        console.log("Car is starting.......... ");
    }
    stop() {
        console.log("Car is stopping..........")
    }
    drive() {
        console.log(`${this.brand} is driving.....`)
    }
}

class ElectricCar extends Car {
    constructor(brand, battery) {
        this.brand = brand;
        this.battery = battery;
    }
    drive() {
        console.log(`${this.brand} is driving silently with ${this.battery}% battery`);
    }
    charge() {
        console.log(`${this.brand} is charging......`);
    }

}

const Tesla = new ElectricCar("Tesla", 80);

console.log(Tesla)
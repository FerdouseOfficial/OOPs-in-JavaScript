// Inheritance and Poly3orphism :------------

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

// Poly = many ; morph = forms, Polymorphism - many forms

// its allows different classes to define methods with the same name but differnt behavior. (or we can say tha has more than one form)

// Imagine a play() button

// On a video, It plays the video
// On a music player, it plays the music
// On a game, it starts the game okay

class MediaPlayer {
  play() {
    console.log("Play media");
  }
}

class Music extends MediaPlayer {
  play() {
    console.log("Play music");
  }
}

class Video extends MediaPlayer {
  play() {
    console.log("Play video");
  }
}


let m1 = MediaPlayer()
let m2 = Music()
let m3 = Video()

console.log(m1)
console.log(m2)
console.log(m3)



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

// function BankAccount(holdersName, balance = 0) {
//   (this.holdersName = holdersName),
//     (this.balance = balance),
//     (BankAccount.prototype.Deposit = function (balance) {
//       this.balance += balance;
//     }),
//     BankAccount.prototype.Withdraw = function (balance) {
//       this.balance -= balance;
//     };
// }

// let Arafat = new BankAccount("Arafat Ali", 150);
// console.log(Arafat)
// // Arafat.Deposit(400);
// // console.log(Arafat)

// let Kuhili = new BankAccount("Kuhili Khatun", 1000);
// console.log(Kuhili);
// // Kuhili.Withdraw(200);
// // console.log(Kuhili);

// let kakuli = new BankAccount("Kakuli Khatun", 1300);
// console.log(kakuli);
// let Rahima = new BankAccount("Rahima Khatun", 120);
// console.log(Rahima);


                                

                            // Always remember ProtoType is a memory efficient code okay // 
                    // 1. If you write prototype function outside and a function inside the function or object class the higher priority will be the inside function. That will work
                    // 2. 

// Try to convert every code you write in TypeScript okay:- 

//                              writing bankAccount code using classes and Object okay

class BankAccount {
    constructor(holdersName, balance) {
        this.holdersName = holdersName;
        this.balance = balance;
        BankAccount.prototype.Deposit = function(balance) {
            this.balance += balance;
        };
        BankAccount.prototype.Withdraw = function(balance) {
            this.balance -= balance;
        }
    }
}

let mijanur = new BankAccount("Mijan", "100");
console.log(mijanur)
let Iftekher = new BankAccount("ifte", "200");
console.log(Iftekher)

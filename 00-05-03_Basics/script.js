let body = document.querySelector("body");
let style = body.style.backgroundColor = "black"
body.style.color = "#eee"


// Learnin the prerequisits

// Learning the basic concept before jumping into OOPs

// start practicing the concept 

let date = new Date()
console.log(date);

let student = {
    name: "MKL",
    age: 21,
    passion: "bkaiti",
    introduceMySelf: function(){
        // console.log(this)
        console.log("hello");
    }

    // practice the concpet of This Keyword

    // introduceMySelf: function(){
    //     console.log(`My name is ${this.name}. My age is ${this.age}. My passion is ${this.passion}`)
    // }
}

// console.log(student)  
student.introduceMySelf()
//  Primitive--call by value-- val copies

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)---call by reference, no val copies

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3





// ----------memory-----------

// Stack(Primitive)  ,  Heap(Non-Primitive)

// primitive data types goes in stack, non primitive types goes in heap..


let a=111
b=a //val of a copies in b
b=222
// console.log(a);//111
// console.log(b);//222

let user1={
    email : "div@gmail.com",
    upi : "user@ybl"
}
let user2 = user1 //u1 and u2 referencing to same val in heap

user2.email = "ayush@gmail.com"

// console.log(user1.email);//ayush@gmail.com
// console.log(user2.email);//ayush@gmail.com
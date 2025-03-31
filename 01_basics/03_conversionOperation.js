let score = "33ab"

// console.log(typeof score);

let valInNum = Number(score)
// console.log(typeof valInNum);
// console.log(valInNum); //not a num NaN

// "33" ->33
// "33abc", undefined->NaN
// null->0
// true->1, false->0



let isLoggedIn = 1
// console.log(typeof isLoggedIn);

isLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn);
// console.log(isLoggedIn);

// 0,""->false
// 1,3,-2,"d",->true



let num = 11
// console.log(typeof num);

num = String(num)
// console.log(typeof num);
// console.log(num);





// ******operations*****

let val = 3
let negVal = -val
// console.log(negVal);

// console.table([2+2,2-2,2*2,2**3,2/3,2%3]);

let s1 = "hello"
let s2 = " divyansh"
let s3 = s1 + s2
// console.log(s3);

// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
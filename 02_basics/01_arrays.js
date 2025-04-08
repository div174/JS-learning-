// array

// heterogenous, resizable, shallow copy
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//add element in starting of array
// myArr.shift()//remove starting element

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(9));//-1
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);//type - string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//returns copy of section[(a,b)-frm a to b-1] of array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//remove and return the section[(a,b)-frm a to b] of array,, manipulates the original array
console.log("C ", myArr);
console.log(myn2);

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");


// string interpolation,, placeholders
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(name);
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);//str is an abj, it shows the prototype of str(all fns,etc) but in console..


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)//dont take neg indices
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);//   hitesh    .
// console.log(newStringOne.trim());//hitesh

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))//https://hitesh.com/hitesh-choudhary

// console.log(url.includes('sundar'))//false

// console.log(gameName.split('-'));//[ 'hitesh', 'hc', 'com' ]
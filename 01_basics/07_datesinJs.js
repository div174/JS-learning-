// Dates

let myDate = new Date() //date obj

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) //year, month(0-11), date, hour, min, sec...
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") //month(01-12), y m d
let myCreatedDate = new Date("01-14-2023") //m d y
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //gives time in miliseconds from beg to now

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //ms to s

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone:

})
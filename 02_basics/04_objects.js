// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)//all elements of all objects written in assign method go in the first object hence we used {} as first obj -it is the target, and all other objs r sources

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
] // array of objects.

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to chk if a property or key is existing in the obj


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// obj destructuring---
// course.courseInstructor
const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// APIs in json format-

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


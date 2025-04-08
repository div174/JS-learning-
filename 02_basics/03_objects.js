//obj ko 2 ways s bna skte h
// 1- using contructor---jo obj bnega vo singleton hga(apne trh ka only one obj)
//2-using obj literals---not singleton(multiple instances bn skte h iske)


// obj m key, val define hti h

// singleton
// Object.create//constructor method

// object literals

const mySym = Symbol("key0")
const mySym1 = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    //symbol as key
    [mySym]: "mykey0",//using symbol as symbol
    mySym1:"mykey1",//symbol as string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}//here name is treated as "name"

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser."full name")//error
// console.log(JsUser["full name"])

// console.log(JsUser.mySym)
// console.log(JsUser[mySym])
// console.log(JsUser.mySym1)
// console.log(JsUser[mySym1])

// console.table([typeof JsUser.mySym, typeof JsUser[mySym], typeof JsUser.mySym1, typeof JsUser[mySym1] ])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//now we cant change this obj
// JsUser.email = "hitesh@microsoft.com"//change nhi hga, error bhi nhi dega
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);//[Function (anonymous)]---fn execute nhi hua h, bs reference return hua h
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
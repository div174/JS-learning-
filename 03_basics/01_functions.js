
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}//fn def
// sayMyName // fn reference
// sayMyName()//fn execution

// function addTwoNumbers(number1, number2){//no datatype given when giving parameters

//     console.log(number1 + number2);
// }

// addTwoNumbers() //NaN--no arguments given
// addTwoNumbers(3,"4")//34
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);//undefined  : fn is nt returning, bt printing in the console

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("div");//unreachable statement: return ke bd ki statement execute nhi hoti
}

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    // if(username===undefined){
    if(!username){//if no arg is passed and parameter m =sam nhi likha, thn username undefined hoga"
        console.log("PLease enter a username");
        return
    }
    // return "${username} just logged in"
    return `${username} just logged in`//string interpolation
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))

// ... - rest operator- used when num of args r unknown
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))//returns arr : [ 500, 2000 ]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

returnSecondValue(myNewArray)//blank output
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
const accountId  = 170404
let accountEmail = "div17@gmail.com"
var accountPw = "1234567"
accountCity = "ghaziabad"
let accountState

// accountId = 2  //TypeError: Assignment to constant variable.

accountEmail = "deep7@kiet.edu"
accountPw = "7654321"
accountCity = "delhi"

console.log(accountId);
console.table([accountId, accountEmail, accountPw, accountCity, accountState])

/*
prefer not to use var
becoz of issue in block and functional scope
*/
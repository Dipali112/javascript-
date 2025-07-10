const accountId = 144553
let accountEmail = "gdvfbfb.com"
var accountPassword = "343654"
accountCity = "Jaipur"
let accountState; 

// accountId = 2.   //not allowed

accountEmail = "hrfvbg.com"
accountPassword = "4456"
accountCity = "bangalore"

console.log(accountId);


/* 
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
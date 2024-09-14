const accountId = 12345;
let accountEmail = "akib@akib.com";
var accountPassword = "123456";
accountCity = "Jiaganj";
let accountState;

// accountId = 4125
// console.log(accountId);

/*
    Prefer not to use "var"
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
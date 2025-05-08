const accountId = 23123432;
let accountEmail = "abcd@gmail.com"
var accountPassword = "1243s33"
accountCity = "Jaipur"
let accoutState;

// accountId = 3 //not allowed
accountEmail = "ads@gmail.com"
accountPassword = "3242332"
accountCity = "Benglore"

console.log(accountId);  //output  :  23123432
console.table([accountId, accountEmail, accountPassword, accountCity, accoutState])
/*
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 23123432        │
│ 1       │ 'ads@gmail.com' │
│ 2       │ '3242332'       │
│ 3       │ 'Benglore'      │
│ 4       │ undefined       │
└─────────┴─────────────────┘
*/

/*
Prefer not use var because of issue in block scope and functional scope
*/
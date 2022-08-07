// ternary operators are good for only short statements
// && || ()
const userType ="admin";
const age = 22;
let greeting;

if(userType == "admin") {
    if (age < 18) {
        greeting = "YOU ARE NOLT ALLOWED HERE";
    } else {
        greeting = "WELCOME ADMIN USER";
    }
}

    else {
        greeting = "ENTERPRICE USER LOGGED IN";
    }
console.log ("GREETING",greeting);
    





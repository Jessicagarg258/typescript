"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ms = "GoodMorning";
console.log(ms);
var myname = "jessica";
var mynum = 154;
var isValid = true;
console.log(myname + " " + mynum + " " + isValid);
console.log("My name is ".concat(myname));
myname = "Priya";
console.log("My name is ".concat(myname));
myname = 1232;
console.log("My name is ".concat(myname));
var list1 = [1, 2, 3, 4];
var list2 = [11, 22, 33, 44];
console.log(list1);
console.log(list2);
function add(a, b) {
    return a + b;
}
console.log(add(12, 10));
function personDetails(person) {
    console.log("".concat(person.fname, " is ").concat(person.age, " years."));
}
var per = {
    fname: "Guru",
    lname: "prasad",
    age: 21,
};
personDetails(per);
function logMessage() {
    console.log("this function returns nothing.");
}
logMessage();
var employee = [1, "deva"];
console.log(employee[0] + " " + employee[1]);
var httpresponse = [200, "ok"];
console.log("Status:".concat(httpresponse[0], ",Message:").concat(httpresponse[1]));
var x = "hello";
console.log(x.length);
console.log(x.length);

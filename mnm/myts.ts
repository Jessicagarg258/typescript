export {};
let ms="GoodMorning";
console.log(ms);

let myname:any="jessica";
let mynum:number=154;
let isValid:boolean=true;
console.log(myname+" "+mynum+" "+isValid);
console.log(`My name is ${myname}`);

myname="Priya";
console.log(`My name is ${myname}`);
myname=1232;
console.log(`My name is ${myname}`);

let list1:number[]=[1,2,3,4];
let list2:Array<number>=[11,22,33,44];
console.log(list1);
console.log(list2);

function add(a:number,b:number):number{
    return a+b;
}
console.log(add(12,10));

interface Person{
    fname:string;
    lname:string;
    age:number;
}
function personDetails(person:Person){
    console.log(`${person.fname} is ${person.age} years.`);

}
let per:Person={
    fname:"Guru",
    lname:"prasad",
    age:21,
};
personDetails(per);


function logMessage():void{
    console.log("this function returns nothing.");
}
logMessage();


var employee:[number,string]=[1,"deva"];
console.log(employee[0]+" "+employee[1]);

let httpresponse:[number,string]=[200,"ok"];
console.log(`Status:${httpresponse[0]},Message:${httpresponse[1]}`);

let x:unknown="hello";
console.log((x as string).length);
console.log((<string>x).length);
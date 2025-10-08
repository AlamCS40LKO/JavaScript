let value = "44"  //case:1
let value2="334dd" //case:2
let value3 = null; // case:3
let value4 = undefined; // case:4
let value5 = "Alam"; // case:5

// console.log(typeof value);
// console.log(typeof(value));

let typeChange = Number(value)
let typeChange2 = Number(value2)
let typeChange3 = Number(value3)
let typeChange4 = Number(value4)
let typeChange5 = Number(value5)

// console.log(typeof typeChange)
// console.log(typeof typeChange2)
// console.log(typeof typeChange3)

// console.log(typeChange2) // give NaN -> not a number
// console.log(typeChange3) // null give 0
// console.log(typeChange4) // give NaN -> not a number
// console.log(typeChange5) // give NaN -> not a number

let isLoggedIn = 1;

let isBoolean = Boolean(isLoggedIn);
// console.log(isBoolean)

// 1 -> true, 0 -> false    
// "" -> false, "alam" -> true

let someNumber = 44

let change = String(someNumber)
// console.log(change)
// console.log(typeof change)

//**********operations*************

let val = 5
let negVal = -5
console.log(negVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%3)

let str1 = "Hello'";
let str2 = " Alam"

let str = str1+str2;
// console.log(str)

// console.log("1"+2)
// console.log(1+"3")
// console.log("3"+2+2)
// console.log(2+2+"3")
// console.log(1+"3"+3+4)


console.log(+true)
console.log(-true)
console.log(+"")


let count = 5
console.log(count++)
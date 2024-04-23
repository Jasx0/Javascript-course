//This is an alert
// alert('Welcome');

//-Single line comment
/* Multiline comment */

//Variables

let score = 0; //initialization
//Assignment
score = 10;
console.log("score is " + score);

//Excercise

//let reassign value

let amount = 1000;
console.log("Your bill amount is Rs." + amount);

//const not reassign
const pi = 3.14;

console.log(pi);

//var -outdated reassign is possible
var val = 10;
val = 15;
console.log(val);




//operators
/* Arithmatic operator( + - * / % ++ --)
   Assignment operator (= += -= *= /= %= **=)
   Comparision operator(== === != !== > < >= <= ?:)
   Logical operator(&& || !)
   Bitwise operator(& | ! `  ^  << >> >>>)
 */

 //user input

//  let name = prompt("Wts your name");
//  console.log("hi",name);

// let tickets = prompt ("How many tickets do you want?");
// console.log("you should pay",Number(tickets)*20);

// let a = prompt("Enter the number");
// console.log(Number(a)+10);


//String - Group of character 

let str1 ="    Strive not to be suceess"
let str2="but rater to be value"


let firstName = "Ramya";
let lastName = "Rani";
let city = "Chennai";

console.log(firstName+ " "+lastName+" lives in "+city)

//string interpolation

console.log(`${firstName} ${lastName} lives in ${city}`)

//multiple string   

let msg =`happy
birthday`
console.log(msg);


//single and double codes string

let name="cat's name is toto"
let msg1=`cat's name is "toto"`
console.log(name);
console.log(msg1);


//exercise

let itemCount=`"You have 5 in your cart.
Your bill amount is $95`

console.log(itemCount);



//random letter
// let name5 = "Gunasekar"
// name[Math.floor(Math.random())]

// console.log(name5)


//array

let num=10;

let gril='sathya';

//array structure

let cites=["chennai","madurai","trichy"];

let marks=[78,56,67,54,98];

//length total element in array

console.log(marks.length)

//access 2nd element from-start index starts with 0

console.log(cites[1]);

//access 3rd element in array

console.log(cites[3]);

//last element \

console.log(marks[marks.length-1]);

//mix of int and string 

let arr=[5,6,7,'a',"abc",[3,4]];
console.log(arr);
console.log(arr[5][1]);

//2 dimentional array

let matrix = [[3,4,5],[4,5,6],[6,7,8]]
console.log(matrix[2][1]);

//array methods

let array = ['a','b','c','d','e']

console.log(array);

//push -add element to the end and returns new length

console.log(array.push('f'))
console.log(array);

//pop - remove element from the end and returns remove value

console.log(array.pop('f'));
console.log(array);


//shift - remove element from start of the array return remove values

console.log(array.shift('a'));
console.log(array);

//unshift - add element to the start of the array returns new length

console.log(array.unshift('a'));
console.log(array);


// //delete -delete array index

// console.log(array.delete(2));
// console.log(array);

//splice

//1st parameter -starting index
//2nd parameter - no of elements to be deleted from the start index
//3rd (or more) parameter - values to be inserted from staring index

array.splice(2,2)// deletes 2 elements staring at index
console.log(array);

//replce deletes element at index 1 and inserts 'm'

array.splice(1,1,'m')
console.log(array);

//only replace not deletes means 

array.splice(1,0,'b');
console.log(array);


//slice

//slice - (staring index, Ending index)
//ending index not included

console.log(array.slice(1,3));

//reverse

array.reverse();
console.log(array);

//join -  convert array to string

let str = array.join();
console.log(str);


//split - convert string to array

let str3="g,t,r,e"
let arr3=str3.split(",");
console.log(arr3);


//concat - spread operater

let firstArr=[1,2,3,4];
let secoundArr=[4,5,6];
let joinedArr=[firstArr,secoundArr];

console.log(joinedArr);

joinedArr=firstArr.concat(secoundArr)
console.log(joinedArr);


let joined = [...firstArr,...secoundArr]
console.log(joined);

//Exercise

let arr4=[5,8,7,9,11];

arr4.splice(3,3,"17","19","111");
console.log(arr4);

arr4.unshift(100);
console.log(arr4);

arr4.splice(-1,-1,"200");
console.log(arr4);

arr4.push(1000)
console.log(arr4);














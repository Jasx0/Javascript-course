//Functions- perform specific task can be called multiple times optionally takes input as parameters and optionally return value

//function declaration

function isPositive(num){//parameter
    return num>0
}

console.log((isPositive(-4)));//argument


function sayHello(){
    console.log('hello');
}

sayHello()



//hoisting 
//javascript hoisting refers to the

//process whereby the interpreter appears
//to move the declaration of function

//variables or classes to the top of their 

//scope prior to execution of the code

console.log(findProduct(4,7)); //hoisting

function findProduct(a,b){
    return a*b
}

console.log(findProduct);

console.log(typeof findProduct);


//default parameter 

function greet(name ='there'){
    console.log('hi',name);
}

greet('ram')

greet()


///recursion - function calling itself

//factorial - product of first n number

//5! = 5*4*2*3*2*1

function factorial (n){
    if(n==1)

    return 1

    return n*factorial(n-1)
}

console.log(factorial(10));

//function expression 
//assigned to a varialbes as object

let a =100


let isEven = function (num){
    return num%2==0

}
console.log(isEven(5));


let arr = [2,4,5,6,7,8,9]

let findSum = function (arr){
    let sum = 0
    for (let val of arr){
        sum += val
    }
    return sum
}
console.log(findSum(arr));

//arrow function

let volume = (l,b,h) =>{return l*b*h}
console.log(volume(7,8,2));

//arae of circle 

let area = r =>Math.PI*r*r

console.log(area(5));

//variable arguments  = rest parameter

let prod2 = function (...args){
    let result =1 
    for(i=0;i<arguments.length;i++)
    result *= arguments[i]

    return result 
}
console.log(prod2(7,6,5,4));


// generators - generates value one by one

function* indexGenerator(){
    let index =1 
    while (true){
        yield index++
    }
}

const gen = indexGenerator();

console.log(gen.next().value);


console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// callback - Function passed as function

// function greetConsole(name){
//     console.log('hello',name);
// }

// function greetHeading (name){
//     const heading = document.querySelector('hi')

//     heading.innerHTML = 'hello' + name
// }


// function greet1(callback){
//     console.log(callback);
    
//     callback('ram')
    
// }

// // greet1(greetConsole)
// // 
// greet1(name=> {
//     const heading = document.querySelector('hi')

//     heading.innerHTML = 'hello' + name
    
// })
//  console.log(clear);

// For Each - one by one value

array =['deepa','suresh','ramya']

array.forEach(print)


function print(val){
    console.log(val.toUpperCase())
}

array.forEach(val => console.log(val.toUpperCase()))

console.log(array);


array.forEach((val,index,array)=>{
    array[index] = val.toUpperCase()

}
)

console.log(array);


array = ['ECE', 'IT','CSC','EEE']

array.forEach(val => {
    const opt = document.createElement('option')

    opt.textContent = val

    opt.value = val

    document.getElementById('branch').appendChild(opt)
})




//Map - executes callback for each array element and returns new array

let priceUSD = [20,35,15]

let priceINR = priceUSD.map(x=>x*83)

console.log(priceINR);

priceINR = priceUSD.map(convert)

function convert (val) {
    return val*83

}
console.log(priceINR);


//array of object use map

const input =[{name:'jhon',age:15},
{name:'my boy',age:30},
{name:'anu',age:45},
{name:'sivin',age:22},
]

const age =input.map(x=>x.age)

console.log(age);


//Filter - returns new array by checking eachvalue of original arr using callback fn

 let cost = [35,45,67,89,123,4]
lessThan100 = cost.filter(x =>x<100)
console.log(lessThan100);


//Reduce execute reducer callback and returns accumulated result

let cartTotal = cost.reduce((total,el)=>total+el)

console.log(cartTotal);



arr2d =[
['a','b','c'],
['c','d','f','d'],
['c','d','f','d']]

//result = {a:1,b:1,c:3}


let result ={'a':1,'b':2}

result ['c'] =1 
console.log(result['d']);

;

let count =arr2d.flat().reduce(
   (accumulator,currVal)=>{
    if(accumulator[currVal])
    accumulator [currVal]++
else
 accumulator [currVal]=1
 return accumulator

   }
   ,{}
   
);

console.log(count);

///memory Management

//primitive datta types 
 

// 1.string
// 2.number
// 3.bigint
// 4.boolean
// 5.undefined
// 6.symbol
// 7.null

//Reference type

// 1.arrays
// 2.Functions
// 3.all 0bjects-Math,date

let bigNum = 985467564794986847576254862n

const bigNUm2 = BigInt(5546576567466476)
console.log(bigNUm2);

let num = 100;
num=200;
console.log( "num is " ,num);

let b=num;
b=300;
console.log("b is",b);

let obj1 = {name:'danya',age:24}
let obj2 = obj1;
obj2 .name ='ramya'

console.log( obj1,obj2);



let arr1=[2,3,4]

let arr2 = arr1;
arr2[0] = 10;
console.log(arr1,arr2);















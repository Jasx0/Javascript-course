// //OOPs - Think in terms of classes and object 

// let User1 ={
//     name:'jhon',
//     age:21,


//     login(){
//         console.log('hi',this.name);
//         console.log("You are logged in");
//     },
//     logout(){
//         console.log("You are logged out");

//     }
 
// }

// User1.login()
// User1.logout()

// // class is template properties and methods


// //static - common variables /methods for class 
// // - accessed with className
// class User {

//     static numberofUsers = 0;
//     constructor(name,age){

//         //instance variables
//         this.name = name;
//         this.age = age;
//         User.numberofUsers++;
//     }

//     login(){
//         console.log('hi',this.name);
//         console.log("You are logged in");

//     }
//     logout(){
//         console.log("You are logged out");


//     }
//     static displayTotalUsers(){
//         console.log('Toatal number of users '+ User.numberofUsers++
//     );
//     }
// }


// let userOne = new User ('vidhya',21)

// let usertwo = new User('Ramesh',21)

// console.log(userOne);

// // console.log(User.numberofUsers);


// User.displayTotalUsers()

// //Inheritance - acquring properties of a  base class


// // derived class . child classs, subclass

// class paiduser extends User {
//     constructor (name,age){
//     super(name,age);
//     this.storage =100;

// }
// message(){
//     console.log('you have 100 GP free storage');
// }


// //overriding

// login(){

//     console.log('Thank your support');
//     return this
// }


// }

// let paidUser1 = new paiduser ('deva',22)

// paidUser1.login()
// paidUser1.message()


// //method chaning 

// paidUser1.login().message()

//not class use create object


function User(name,age){
    this.name = name;
    this.age=22;

}

User.prototype.login = function(){

    console.log('hi',this.name);
    console.log('you are logged in');

}
let user1 = new User('abdul',34)
user1.login()



//get and set

class Temperature {

    constructor (temp){
        this._temp=temp
    }

    get temp(){
        return `${this._temp}deg celcius`
    } 

    set temp (temp){
        if(temp>100)
        temp =100
    this._temp = temp


    }

    }

    let temp1 = new Temperature(25)

    temp1._temp=150;
 
    console.log(temp1.temp);


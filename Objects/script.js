let item = {
    name : "phone",
    price :25000,
    quantity:1,

    categories:['electronis','phones'],

    dimentions :{
        length:7,
        breadth:3.5,
        height:.5
    }
}
console.log(item);
console.log(item.categories);

// another way to create object

let item2 =  new Object();

item2.name = 'charger',
item2.price = 700,
item2.quantity = 1 

console.log(item2);

//accessing o bject
//dot notation 
console.log(item.price);
item.price = 26000;

console.log(item);

//adding new property
item.returnable =true
console.log(item);

//square bracket notation

console.log(item ['price']);

item['returnable'] = false

  //methods

  item ={
    name : 'phone',
    quantiy : 1,
    price:25000,

    buy:function(){
        console.log('item added to cart');
    },
    addToList(){
        console.log('item added to list');
    }
  }

  item.buy()
  item.addToList()



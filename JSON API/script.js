//Json - Same as o bject 

// json - javascript object notation

// let json1 = "karthi";
// let json2 = 5;
// let json3 = true;
// let json4 = [4,5,6,7]

// let json5 = {
//     "stock" :"TCS",
//     "Price" : 3500
// }

// let json6 =`[

//  {
//     "stock" :"TCS",
//     "Price" : 3500
// },
// {
//     "stock" : "SBI",
//     "Price" :  4500,

// }

// ]`


// let parsed = JSON.parse(json6)

// console.log(parsed[1].Price)
// console.log(JSON.stringify(parsed));




//Fetch API
//get method

// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=> res.json())

// .then((msg)=> console.log( (msg[0].setup, msg[0].punchline)))

// .catch((err)=>console.log(err))


// fetch('https://api-thirukkural.vercel.app/api?num=x')
// .then(res =>res.json())
// .then(msg => console.log(msg.line1,msg.line2,msg.tam_exp))
// .catch((err) =>console.log(err));

//post method

fetch('https://official-joke-api.appspot.com/jokes/programming/random',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:22,
        id:456,
        title:'test',
        completed:false
    })

})
console.log('Heloo');

function sync(){
    console.log('step1');
        console.log('step2');
        console.log('step3');  

}
sync()

let a= 100

let b= 20

let c= a+b


setTimeout(()=> console.log('step1'),4000);
setTimeout(()=> console.log('step2'),3000);
setTimeout(()=> console.log('step3'),1000);

console.log('bye');
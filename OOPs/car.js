// Es6 Modules- this file use other file

class Car {
    drive(){
        console.log("driving");
    }
}
function fillGas(){
    console.log('Filling Gas');
}

function repair(){
    console.log('repairing');
}
export default Car
export {fillGas,repair}
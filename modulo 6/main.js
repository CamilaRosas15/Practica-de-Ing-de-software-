function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "¡Hola!";
}

console.log("Antes de llamar a outer()");
debugger;
console.log(outer());
console.log("Despues de llamar a outer()");



// "const x = 10";     //reference error
//const x = 10;
let x = 10;   //*reference error
//x=20;
//console.log(x); //typeerror
onsole.log(x); //*reference error
//x=20;
//x += 10;    //typeerror

x += 10;    //reference errpr and type error


try{
    ocnole.log("start")
} catch(error)
{
    console.log("error")
}
console.log("end");
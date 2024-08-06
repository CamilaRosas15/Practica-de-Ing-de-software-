//Tarea 1

let nombre = 'camila'
let numero = 54321
let isFalse = false
let numBigInt= 13622222109n

console.log(
    `string : ${nombre} tipo de dato : ${typeof nombre} ,
    number : ${numero} tipo de dato : ${typeof numero} ,
    boolean : ${isFalse} tipo de dato : ${typeof isFalse} ,
    bigInt : ${numBigInt} tipo de dato : ${typeof numBigInt}`
    );
    
    //Funciones constructoras
    let cadena1 = String()
    let numero1 = Number()
    let isFalse1 = Boolean()
    let numBigInt1= BigInt(3)
        
   
//Tarea2
    console.log(
        `string : ${cadena1} tipo de dato : ${typeof cadena1} ,
        number : ${numero1} tipo de dato : ${typeof numero1} ,
        boolean : ${isFalse1} tipo de dato : ${typeof isFalse1} ,
        bigInt : ${numBigInt1} tipo de dato : ${typeof numBigInt1}`
        );

//! Tarea 3

let str="1234" // string
let num=Number(str) //  numero
let bigInt=BigInt(num) 
let bool= Boolean(bigInt) // true

console.log(bool);

//! Tarea 4

let a = 500 + 1000
let b = true + false 
let c = true + true
let d = 10n + 70n
let e = "Programando" + "Javascrip"
let f = undefined + undefined
let g = null + null

console.log(
    `a : ${a} tipo de dato : ${typeof a}
     b : ${b} tipo de dato : ${typeof b}
     c : ${c} tipo de dato : ${typeof c}
     d : ${d} tipo de dato : ${typeof d}
     e : ${e} tipo de dato : ${typeof e}
     f : ${f} tipo de dato : ${typeof f}
     g : ${g} tipo de dato : ${typeof g}
    `
);
//! Tarea 5

//? Prueba sumar dos valores de diferentes tipos y verifica los resultados.

let h = 100n + 200n
let i = true + 20 
let j = true + null
let k = 10 + undefined
let m = "hello" + true
let n = undefined + null
let l = null + 10

console.log(
    `a : ${a} tipo de dato : ${typeof a}
     b : ${b} tipo de dato : ${typeof b}
     c : ${c} tipo de dato : ${typeof c}                                                                                                                                                
     d : ${d} tipo de dato : ${typeof d}
     e : ${e} tipo de dato : ${typeof e}
     f : ${f} tipo de dato : ${typeof f}
     g : ${g} tipo de dato : ${typeof g}
    `
);


//! Tarea 6

const str1 = 42 + ("1");
console.log(`${str1} , [${typeof str1}]`);


let numeritos = +'2'
console.log( typeof numeritos);











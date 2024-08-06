//Camila Alejandra Rosas Rojas

//tarea1 
//parte1
let ticket = {
    from: "quillacollo", 
    to: "vinto",
    price: 5
};

console.log("Estacion inicial: ",ticket.from," Estacion final: ", ticket.to, " Precio: ", ticket.price);


//parte2

let person = {};

person.firstName = "Camila";
person.lastName = "Rosas";

console.log("Nombre: " , person.firstName );
console.log("Apellido:", person.lastName );


//AREEGLOS
/*Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. 
Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:

Speaking JavaScript, Axel Rauschmayer, 460.
Programming JavaScript Applications, Eric Elliott, 254.
Understanding ECMAScript 6, Nicholas C. Zakas, 352. */

let libro = [
    {
        titulo: "Speaking JavaScript",
        autor: "Axel Rauschmayer",
        numeroPaginas: 460
    }, 
    {
        titulo: "Programming JavaScript Applications",
        autor: "Eric Elliott",
        numeroPaginas: 254
    },
    {
        titulo: "Understanding ECMAScript 6",
        autor: "Nicholas C. Zakas",
        numeroPaginas: 352
    }];


    libro.push({titulo: "Learning JavaScript Design Patterns",
    autor: "Addy Osmani",
    numeroPaginas: 254});

    console.log(libro);
    console.log("Longitud del arreglo ", libro.length);


let libs = libro.slice(2);
console.log(libs); 

console.log("Se perdio el libro.");
libro.pop();

console.log("Longitud del arreglo ", libro.length);

function contarPaginas(libro)
{
    let suma = 0;
    for(let i = 0; i < libro.length ; i++)
    {
        suma = suma + libro[i].numeroPaginas;
    }
    return suma;
}
console,log(libro.indexOf())



//console.log("La summa de los libros es : " ,contarPaginas(libro)); -> otra forma de llamar a otra funcion
let resp = contarPaginas(libro);
console.log("La summa de los libros es : ",resp);
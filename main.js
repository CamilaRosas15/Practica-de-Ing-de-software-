let z = [12,20,30];
let y = [50,50];

z.reverse().push(y);
console.log(z.length);

let x = mult(2)(10);
console.log(x);

let id = "100";
{
    let id = 200;
    id = id + 1;
    console.log(id);
}
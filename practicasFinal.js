let a  = true && 20;
let b = 0 || 20;
let c = 0 && 20;
console.log(`${a},${b},${c}`)
//20 20 0


let counter = 2;
let interval = setInterval(() => {
    console.log(counter);
    if(counter-- <= 0) clearInterval(interval);
},1000);
console.log(interval);

let route = {distancia: 131, elevacion:1.4}
for(let k in route) console.log(k);

let x = [40,10,30,20,50];
let cmp = (a,b) => a - b;
x.sort(cmp);
console.log(x);


let m = [10,20,30,40];
let n = [50,60];
m.reverse().push(n);
console.log(m.length);



;
function execute(todo,a,b)
{
    
    return todo(a,b);
}
let power = (o,p) => o**p;
console.log(execute(power(3,2)));

let means = "plane";
let msg = `I do not like by ${means}`;
console.log(msg);
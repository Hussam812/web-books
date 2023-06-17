// 1.1 exploring javaScript
let primes =[2, 3, 4, , 7];
console.log(primes[primes.length-1]);
console.log(primes[0] + primes[1]);

function fact(x){
    if(x > 1) return x * fact(x-1);
    else return 1;
}

console.log(fact(4));
console.log(fact(5));
console.log(fact(6));

//1.2- Hello World

console.log("Hello World!");

//1.3- A Tour of javaScript
let x;

x = 0; // now varible x has value of 0
console.log(x);
//javaScript supports several types of valuers
x = 1; // Numbers
x = 0.01; // Numbers can be integers or reals.
x = "hello world"; // strings of text in quotation marks
x = "JavaScript"; // single quote marks also delimit string
x = true; // A Boolean value
x = false; // The other Boolean value
x = null; // Null is a special value that means "no value." 
x = undefined; // Undefined is another special value like null.

let book = {
    topic: "JavaScript",
    edition: 7
};

console.log(book.topic);
console.log(book['edition']);
book.author = "Flanagan";
book.contents = {};

primes = [2, 3, 5, 7];
primes[0]
console.log(primes.length);
primes[primes.length-1];
primes[4] = 9;
console.log(primes[4]);
primes[4] = 11; 
console.log(primes[4]);

let empty = [];
console.log(empty.length);


let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];
let data ={
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [3, 4]]  
};

console.log(points[1].x - points[0].x);

let count = 0;
count++;
count--;
count += 2;
count *= 3;
count

let z = 2;y = 3;
console.log(z === y);
console.log(x !== y);
console.log(x < y);
console.log(x <= y);
console.log(x > y);
console.log("two" === "three");
console.log("two" > "three");
console.log(false === (x > y));
console.log((x === 2) && (y === 3));
console.log((x > 3) || (y < 3));
console.log(!(x === y));

const plus1 = x => x + 1;
const square = x => x * x;
console.log(plus1(y));
console.log(square(plus1(y)));

let a = [];
a.push(1, 2, 3);
console.log(a);
a.reverse();
console.log(a);

points.dist = function(){
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x -p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b);
}
console.log(points.dist());


function abs(x){
    if (x >= 0){
        return x;
    }else{
        return -x;
    }
}
console.log(abs(-10) === abs(10));

function sum(array){
    let sum = 0;
    for(let x of array){
        sum += x;
    }
    return sum;
}
console.log(sum(primes));


function factorial(n){
    let product = 1;
    while(n > 1){
        product *= n;
        n--;
    }
    return product;
}
console.log(factorial(4));


function factorial2(n){
    let i, product = 1;
    for(i = 2; i <= n; i++)
        product *= i
    return product;
}

console.log(factorial2(5));

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    distance(){
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        );
    }
}

let p = new Point(1, 1);

console.log(p.distance());
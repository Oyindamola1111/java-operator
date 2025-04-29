console.log(500);
let a,b,c;
a=5;
b=6;
c=a+b;
console.log(a,b,c);

let person="hege";
console.log(person);

//addition operators
let x=20;
let y=12;
let z=x+y;
console.log(x,y,z); 

//comparism operator
const d=23;
const e=15;
const f=70;
const g="shade";
const h="mali";
//equals to
console.log(d==e);

//greater than
console.log(d > e);

//less than
console.log(d < e);

//greater than equals to
console.log(d >= e);

//less than equals to
console.log(d <= e);

// Logical operator
// THEY ALL RETURN A BULLEAN VALUE 
// logical OR ||
// logical NOT ! means opposite
// logical AND &&

//dami admission
const fee = false;
const uniform = false;
const textbooks = false;
const idCard = false;

const checkOR = fee || textbooks || uniform || idCard;
console.log(checkOR);

const toy = false;
const base= false;
const  spider = false;
const home = false;

const checkAND = toy && base && spider && home;
console.log(checkAND);


const joy = true;
const bean = true;
const  rose = true;
const ball = true;

const checkDami = joy && bean && rose && ball;
console.log(checkDami);


const poll = true;
const man = true;
const  girl = false;
const game = false;

const checkGuy = poll || man && girl && game;
console.log(checkGuy);

//URINARY OPERATOR
//increment ++
//Decrement --

let k = 3;
k++;
console.log(k);

let kolo=6;
kolo--;
console.log(kolo)

//TENARY OPERATOR
// (condition) ? "" : ""
const tenTest =76 > 30 ? "very true" : "not true";
console.log(tenTest);













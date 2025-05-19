// console.log(500);
// let a,b,c;
// a=5;
// b=6;
// c=a+b;
// console.log(a,b,c);

// const { log } = require("node:console");

// const { log } = require("node:console");

// const { StatementSync } = require("node:sqlite");

// let person="hege";
// console.log(person);

//addition operators
// let x=20;
// let y=12;
// let z=x+y;
// console.log(x,y,z); 

//comparism operator
// const d=23;
// const e=15;
// const f=70;
// const g="shade";
// const h="mali";
//equals to
// console.log(d==e);

//greater than
// console.log(d > e);

//less than
// console.log(d < e);

//greater than equals to
// console.log(d >= e);

//less than equals to
// console.log(d <= e);



// Logical operator
// THEY ALL RETURN A BULLEAN VALUE 
// logical OR ||
// logical NOT ! means opposite
// logical AND &&

//dami admission
// const fee = false;
// const uniform = false;
// const textbooks = false;
// const idCard = false;

// const checkOR = fee || textbooks || uniform || idCard;
// console.log(checkOR);

// const toy = false;
// const base= false;
// const  spider = false;
// const home = false;

// const checkAND = toy && base && spider && home;
// console.log(checkAND);


// const joy = true;
// const bean = true;
// const  rose = true;
// const ball = true;

// const checkDami = joy && bean && rose && ball;
// console.log(checkDami);


// const poll = true;
// const man = true;
// const  girl = false;
// const game = false;

// const checkGuy = poll || man && girl && game;
// console.log(checkGuy);

//URINARY OPERATOR
//increment ++
//Decrement --

// let k = 3;
// k++;
// console.log(k);

// let kolo=6;
// kolo--;
// console.log(kolo)

//TENARY OPERATOR
// (condition) ? "" : ""
// const tenTest =76 > 30 ? "very true" : "not true";
// console.log(tenTest);

// CONDITIONALS

// if Statement
// if else Statement
// if else if Statement

// if () {} 

//if(){}else{}
// let joy = 20;
// let mary = 40;
// if(joy > mary){
//     console.log("joy is higher")
// } else{
//     console.log("mary is greater")
// }

// let a = 78;
// let b = 56;
// console.log(a>b);

// if (a>b) {
//     console.log("The first value is the greatest");
// }

// if else condition

// if (a>b) {
//     console.log("The first value is the greatest");
// } else{
//     console.log("the second value is the greatest");
// }

// let DBpass = "sam1234";
// let password = "sam1234";

// if (password === DBpass) {
//     console.log("logged in successfully");
// } else {
//     console.log("incorrect password");
// }

// PROMPT

// let name = prompt("what is your name");
// console.log(name);

// const myAge = prompt("enter your Age");
// console.log(myAge);
// alert(myAge);

// const test = 78;
// console.log(`your lucky number is ${test}`);

// const username = prompt("enter your name");
// alert(`welcome ${username}`);

// let valueOne = prompt("enter your first number");
// let valueTwo = prompt("enter your second number");
// let ans = valueOne + valueTwo;
// alert(ans);

// let valueOne = parseInt(prompt("enter your first number"));
// let valueTwo = parseInt(prompt("enter your second number"));
// let ans = valueOne + valueTwo;
// alert(ans);

// write a programe that checks if a number is even or odd

// const myNum = parseInt(prompt("enter any number"));
// if(myNum % 2 === 0){
//     alert(`${myNum} this is an even number`)
// } else{
//     alert(`${myNum} this is an odd number`)
// // };

// let name = "joy";
// prompt("what is your name")
// console.log(name);

// const userNumber = parseInt(prompt("enter a name"));

// if (userNumber > 0 ) {
//     alert(`${userNumber} is a positive number`);
// } else if (userName === 0) {
//     alert(`${userNumber} is invalid`);
// } else if (isNaN())

// write a program
// const num1= parseInt(prompt("enter a number"))
// const num2= parseInt(prompt("enter a number"))
// if (num1 > num2) {
//     alert(`${num1} it is greater`);
// } else {
//     alert(`${num2} it is greater`);
// }

// let score=parseInt(prompt("display grade"))
// if(score>=90) {alert("A grade");}
// else if(score>=69) {
//     alert("B grade");}
// else if(score>=59) {
//     alert("C grade");}
// else if(score>=49){
//     alert("D grade");}
// else if(score>=44){
//     alert("E grade")}
// else{
//     alert("F grade");}

// PROPERTIES AND METHODS

// let colorBox = ["red","yellow","blue","black"]
// console.log(colorBox.length);
// let nameBox1 = ["yellow","blue","red","white","orange"]

// 'orange'
// nameBox[nameBox.length -1]
// 'orange'
// let score = [3,2,1,4,5,6,8,9]
// undefined
// score[4]
// 5
// score[score.length -4]
// 5
// score.splice[0,2]

// score.push("joanna")
// 9
// score
// (9) [3, 2, 1, 4, 5, 6, 8, 9, 'joanna']
// score.push("ope")
// 10
// score
// (10) [3, 2, 1, 4, 5, 6, 8, 9, 'joanna', 'ope']
// score.pop()
// 'ope'
// score
// (9) [3, 2, 1, 4, 5, 6, 8, 9, 'joanna']
// score.shift()
// 3
// score
// (8) [2, 1, 4, 5, 6, 8, 9, 'joanna']
// score
// (8) [2, 1, 4, 5, 6, 8, 9, 'joanna']
// score.unshift()
// 8
// score
// (8) [2, 1, 4, 5, 6, 8, 9, 'joanna']
// score.include("david")

// score.includes("david")
// false
// score.indexOf("4")
// -1
// let man = ["ife","tolu","seun","john","love"]
// console.log( man.indexOf("tolu"));
// 1
// man.indexOf("love")
// 4
// man[man.length -1]
// 'love'
// man.join()
// 'ife,tolu,seun,john,love'
// man.slice(0,1)
// ['ife']
// man
// (5) ['ife', 'tolu', 'seun', 'john', 'love']
// name.slice(2,4)
// ''
// man.slice(2,4)
// (2) ['seun', 'john']
// man.splice(0,2,"dammy")
// (2) ['ife', 'tolu']
// man
// (4) ['dammy', 'seun', 'john', 'love']
// man.splice(2,0,"ogo")

// man
// (5) ['dammy', 'seun', 'ogo', 'john', 'love']
// man.splice(0,0,"victory")

// man
// (6) ['victory', 'dammy', 'seun', 'ogo', 'john', 'love']
// man.splice(0,1)
// ['victory']
// man
// (5) ['dammy', 'seun', 'ogo', 'john', 'love']
// man.splice(2,0,"good")

// man
// (6) ['dammy', 'seun', 'good', 'ogo', 'john', 'love']



// string methods

// let myStr = "Hello, javascript World";
// console.log(myStr);
// console.log(myStr.toLowerCase());
// console.log(myStr.toUpperCase());
// console.log(myStr.charAt());
// console.log(myStr.indexOf("javascript"));
// console.log(myStr.includes("Hello"));
// console.log(myStr.slice(2,8));
// console.log(myStr.trim()); // takes off un-neccessary spaces in sentences
// console.log(myStr.replace("World", "Universe")); // replace world and input universe
// console.log(myStr.split());
// console.log(myStr.split(" ")[1]);
// console.log(myStr.startsWith("Hello"));
// console.log(myStr.endsWith("hi"));

// NUMBER METHODS

// let num = 42.769;
// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed());



// Math Method

// console.log(Math.PI);
// console.log(Math.round(41.945));
// console.log(Math.floor(42.342));
// console.log(Math.ceil(42.2));
// console.log(Math.max(12,4,3,7));
// console.log(Math.min(12,4,6,8));
// console.log(Math.pow(23,70));
// console.log(Math.sqrt(144));
// console.log(Math.random()*100);
// console.log(Math.floor(Math.random()*100));


// OBJECTS

// let student = {
//     name: "shade",
//     age: 34,
//     mail: "shade@gmail.com"
// };
//  console.log(student);
//  console.log(student.name);
//  console.log(Object.keys(student));
//  console.log(Object.values(student));

// FUNCTIONS

// function myName(name) {
//     console.log(name);  
// }
// myName("damola");
// myName("idiot");
// myName("money");

// function addNum(a, b) {
//     console.log(a+b);
    
// }
// addNum(30,8);

// function greet() {
//     console.log("hello world");   
// }
// greet()


// FUNCTION DECLARATION

// function num() {
//     let InPutFromUser = parseInt(prompt("Take input from user"));
//     if (InPutFromUser >= 6) {
//       alert("it is greater");
//     }else{
//         alert("invalid")
//     }    
// }
// num()

// let dami = function subbtraction(num1,num2) {
//     let result = num1-num2;
//     console.log(result); 
// }
// dami(10,2);
// subbtraction()

// function theirName() {
    // let name = prompt("enter your name")
    // // let nickName = ["john","tunde","bolu","shade"];
    // console.log('your name is', name.length );
// }
// theirName()

// function theirName() {
//     let a =parseInt( prompt("display number"));
//     let b =parseInt( prompt("display number"));
//     let c =parseInt( prompt("display number"));
//     let d =parseInt( prompt("display number"));
//     // let nickName = [12,3,5,8];
//     console.log('highest number is', Math.max(a,b,c,d) );
// }
// theirName()

// function highestNumber() {
//     const myNum = parseInt(prompt("enter any number"));
// if(myNum % 2 === 0){
//     alert(`${myNum} this is an even number`);
// } else{
//     alert(`${myNum} this is an odd number`);
// };
// }
// highestNumber()



// ANOTHER WAY TO WRITE A FUNCTION IS ---- ARROW FUNCTIONS

// let userLength = () => {
// let name = prompt("enter your name")
//     console.log('your name is', name.length );
// }
// userLength()

// FUNCTION EXPRESSION


// LOOP


// console.log(200);

// write an arrow function that divides two numbers

// let division = () => {
//     let num1 = prompt ("enter number")
//     let num2 = prompt ("enter number")
//     console.log(num1 / num2);
// }
// division()



// write a functions that checks if a number is even or odd

// function number() {
//     let num = parseInt(prompt("enter number"));
//     if(num % 2 === 0){
//       console.log(`${num} is an even number`);
//     }
//     else {
//         console.log(`${num} is an odd number`);
//     }
// }
// number()

// function highest() {
//     let num1 = prompt("enter first number");
//     let num2 = prompt("enter second number");
//     let num3 = prompt("enter third number");
//     console.log(Math.max(num1,num2,num3));    
// }
//  highest()

// A FUNCTION THAT REVERSE A STRING

// function reverse() {
//     back= prompt("enter a name")
//     console.log(back.split('').reverse('').join(''));
// }
// reverse()







 
 
 
 
































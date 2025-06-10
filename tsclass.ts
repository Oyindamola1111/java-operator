

//  function addTwoNumbers(a:number,b:number) {
//     return a+b
//  }
//  addTwoNumbers(5,6)

 function interstRate(principal:number,rate:number,time:number) {
    return((principal*rate*time)/100)
 }
 interstRate(5,5,5,)

 //return only string
 function minusNumbers():string {
    return ''    
 }

 // return boolean
 function bully():boolean {
    return true
 }


 // highest numbers
function maxNumber (a:number,b:number,c:number,d:number):number {
    return (Math.max(a,b,c,d))
}

// object

interface studentDataType ={
    name?:string;
    grade?:string
    score?:number;
    pass?:boolean
}
let studentData: studentDataType={
    name:'ife',
    grade:"A+",
    score: 100,
    pass:true,  
}
let studentData: {name:string,grade:string,score:number,pass:boolean}= {
    name:'ife',
    grade:"A+",
    score: 100,
    pass:true,
}
 

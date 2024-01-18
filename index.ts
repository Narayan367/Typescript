let age:number = 20 ; 

// can't redeclare block scope ; 

const names:string[] = [];
// names.push(1)
 // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)


 // function 
 function sume(a,b) {
    return a+b;
 }

 function sum(a:number, b:number) :number {
    return a+b;
 }

//Tuples 
 let address :[number, string , number];

 address = [11, 'budhabare', 11111];

//  object
let person :{name:string, age?:number};

person = {name :'narayan', age}
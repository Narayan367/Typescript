// annotation
let number:number = 20 ; 


const employee:string[] = [];


 // function 
 function sub(a,b) {
    return a-b;
 }


 // type annotation of function 
 function add(a:number, b:number) :number {
    return a+b;
 }

//Tuples 
 let address :[number, string , number];

 address = [11, 'ktm', 11111];

//  object
let person :{name:string, age?:number};

// ? is used for optional properties 

person = {name :'john', age:22};
person = {name:'narayan'};

// function declaration using optional parameter 

function addition (a:string , b?:string):string{
    return b? a+b :a;
}

// function addition (a?:string , b:string):string{
    // return b? a+b :a;
// } // this is an invalid syntax because optional parameter is always after the compulsory parameter



// interface

interface person {
    name :string ;
    id :number;
    age :number ;
}


interface student {
    name :string ;
    roll :number;
    age :number ;
}

let p: person ;

p= {name :'john' , id: 30, age : 30 };


// union 
let p1 : person | student 

p1 = {name : 'john' , age:23, id:4, roll:76 }
p1= {name : 'john' , age:23, roll:4, }



// intersection
let p2 : person & student   
p2 = {name : 'doe' , age:4, id:4, roll :44 }


// type alias 

type Count = string | number; 

let c:Count; 
c = 1;
c="one";

type X = string & number // never ;

const n:[] =[] //never array 

// n.push('hi')

// class in javascript 
class Car {
    brand; 
    constructor (brand) {
        this.brand = brand ;
    }

    getBrand() {
        console.log(this.brand)
    }
}

let c1 = new Car ('tesla');
c1.getBrand();


// class in typescript 
// about public  key word 
class CarX {
    
    constructor (public brand) {
    }

    getBrand() {
        console.log(this.brand)
    }
}

let c2 = new CarX ('BMW');
c2.getBrand();
console.log(c2.brand);


// about private   key word 
class CarY {
    
    constructor (private brand) {
    }

    getBrand() {
        console.log(this.brand)
    }
}

let c3 = new CarY ('Ferrari');
c3.getBrand();
// console.log(c3.brand); 

// about protected keyword 
class CarZ {
    
    constructor (protected brand) {
    }

    getBrand() {
        console.log(this.brand)
    }
}

let c4 = new CarZ ('toyota');
c4.getBrand();
// console.log(c4.brand); 


// implements

interface ICar {
    brand :string; 
    color :string;
}


interface ICar2 {
   release: number; 
}

class CarC implements ICar {
    constructor(public brand, public color) {

    }
}


class CarA implements ICar, ICar2 {
    constructor(public brand, public color , public release) {

    }
}


// generics 
//generic allows us to define type as a variables
function gen<T> (a:T, b:T) :T[]{
    return [a,b]
}

gen<string> ('1','2');
gen<number> (1,2);

console.log(gen<string> ('1','2'));
console.log(gen<number> (1,2));

// in case of array 
// array itself is a generics 

gen<Array<number>>([1],[2]);
console.log(gen<Array<number>>([1],[2]));

// use of extend 
function addUser <T extends {id:string} >(user:T){
    return user.id; 
}

// any type 
function noRestriction(a :any ,b:any) :any  { 
    return a+b;
}
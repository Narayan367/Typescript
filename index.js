// annotation
var number = 20;
var employee = [];
// function 
function sub(a, b) {
    return a - b;
}
// type annotation of function 
function add(a, b) {
    return a + b;
}
//Tuples 
var address;
address = [11, 'ktm', 11111];
//  object
var person;
// ? is used for optional properties 
person = { name: 'john', age: 22 };
person = { name: 'narayan' };
// function declaration using optional parameter 
function addition(a, b) {
    return b ? a + b : a;
}
var p;
p = { name: 'john', id: 30, age: 30 };
// union 
var p1;
p1 = { name: 'john', age: 23, id: 4, roll: 76 };
p1 = { name: 'john', age: 23, roll: 4, };
// intersection
var p2;
p2 = { name: 'doe', age: 4, id: 4, roll: 44 };
var c;
c = 1;
c = "one";
var n = []; //never array 
// n.push('hi')
// class in javascript 
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('tesla');
c1.getBrand();
// class in typescript 
// about public  key word 
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getBrand();
console.log(c2.brand);
// about private   key word 
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('Ferrari');
c3.getBrand();
// console.log(c3.brand); 
// about protected keyword 
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    }
    CarZ.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var c4 = new CarZ('toyota');
c4.getBrand();
var CarC = /** @class */ (function () {
    function CarC(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    return CarC;
}());
var CarA = /** @class */ (function () {
    function CarA(brand, color, release) {
        this.brand = brand;
        this.color = color;
        this.release = release;
    }
    return CarA;
}());
// generics 
function gen(a, b) {
    return [a, b];
}
gen('1', '2');
gen(1, 2);
console.log(gen('1', '2'));
console.log(gen(1, 2));

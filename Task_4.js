//Task 4 - JavaScript loops

// Task 1 — For Loop
for(let i=1;i<=10;i++){
    console.log(i);
}
//The Output is
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10

// Task 2 — Reverse Number
for( let i=10;i>=1;i--){
  console.log(i)
}
//The Output is
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1


// Task 3 — Even Numbers

for( leti=1;i<=10;i++){
  console.log(i*2);
}

//The Output is
//2
//4
//6
//8
//10
//12
//14
//16
//18
//20

//Task 4 — Odd Numbers

for( let i=1;i<=20;i++){
    if(i%2!=0){
      console.log(i);
    }
}

//The Output is
//1
//3
//5
//7
//9
//11
//13
//15
//17
//19

//Task 5 — Multiplication Table
for( let i=1;i<=10;i++){
    console.log("5 x",i,"=",i*5);
}
//The Output is
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//5 x 4 = 20
// 5 x 5 = 25
//5 x 6 = 30
// 5 x 7 = 35
//5 x 8 = 40
//5 x 9 = 45
//5 x 10 = 50

//While Loop
//Task 6 — Countdown
let i=10
while(i>=1){
    console.log(i);
  i--;
  
}
//The Output is
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1

//Task 7 — Sum of Numbers

let j=1
let a=0
while(j<=10){
  a+=j
  j++;
}
console.log(a);

//The Output is 55

//Do While
//Task 8 — Print Numbers

let k=0;
do{
    k++;
    console.log(k)
}
while(k<=4)
//The Output is
//1
//2
//3
//4
//5

//Task 9 — Do While Understanding
let b = 10;

do {
    console.log(b);
    b++;
} while (b <= 5);
//Output: 10

//The output is 10.
//This happens because a do...while loop is an exit-controlled loop, meaning it runs the code inside the block first and checks the condition afterward. When the script runs, a is set to 10. It immediately enters the do block without checking any rules, printing 10 to the console and incrementing a to 11. Only after completing this first pass does it evaluate the condition a <= 5. Since 11 <= 5 is false, the loop ends immediately—but because the condition check happens at the bottom, 
//the code inside the block is always guaranteed to execute at least once.

//For...of
//Task 10 — String Characters
let name="javascript";
for (let a of name){
    console.log(a);
}
//Output
//j
//a
//v
//a
//s
//c
//r
//i
//p
//t

//Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for( let d of fruits){
    console.log(d);
}

//Output
//apple
//orange
//banana
//mango
//"grapes

//Task 12 — Student Names

let students=["Deva","Das","Ritheeck","Chandra","Parvathi"]
for( let s of students){
    console.log("Student:",s);
}

//Output
//Student:Deva
//Student:Das
//Student:Ritheeck
//Student:Chandra
//Student:Parvathi

//Task 13 — Employee Object

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for(let e in employee){
    console.log(e+" "+employee[e]);
}
//Output
//name Arun
//age 25
//role Developer
//city Chennai

//Task 14 — Product Object

let product={
    productName:"Laptop",
    price:35000,
    brand:"Lenovo",
    category:"Electronics and computer",
    stock:"Available"
}
for(let p in product){
    console.log(p+" "+product[p]);
}
//Output
//productName Laptop
//price 35000
//brand Lenovo
//category Electronics and computer
//stock Available

//Functions
//Task 15 — Simple Function
function Welcome(){

    console.log("Welcome to JavaScript");
}
Welcome();
Welcome();
Welcome()

//Output
//Welcome to JavaScript
//Welcome to JavaScript
//Welcome to JavaScript

//Task 16 — Function With Parameter

function greet(name) {
    console.log("Hello",name);
}
greet("Naveen");
greet("Arun");
greet("Priya");

//Output
//Hello Naveen
//Hello Arun
//Hello Priya

//Task 17 — Multiple Parameters

function student(name, age, department){
    console.log(name ,age,department);
    
}

student("Dharan",19,"IT")
student("John",18,"ECE");
student("Rahaman",20,"CSE");

//Output
//Dharan",19,"IT
//John",18,"ECE
//Rahaman",20,"CSE

//Task 18 — Addition Function

function add(a, b) {
    

return a+b

}

let result= add(10, 20);
console.log(result);

//Output
//30

//Task 19 — Salary

function salary(amount) {
    return amount;
}

let sal=salary(37000);
console.log("The Salary Amount Credited:",sal);

//Output
//The Salary Amount Credited: 37000

//Task 20 — Bonus Calculator

function bonus(salary, bonusAmount){
  
    return salary+bonusAmount;
}

let bonusamount=bonus(50000,5000);
console.log("Total=",bonusamount)

//Output
//Total=55000


// Task 21 Default Parameter

function employee1(name, role = "Developer") {
    console.log(name,role);
}

employee1("Arun");
employee1("Priya", "Designer");

//Output
//Arun Developer
//Priya Designer

// Function Types
//Task 22 — Named Function

function square(number) {
    return number * number;
}
let num=square(5);
console.log(num);

 num=square(4);
console.log(num);

 num=square(2);
console.log(num);

 num=square(10);
console.log(num);


 num=square(11);
console.log(num);

//The Output is
//25
//16
//4
//100
//121


//Task 23 — Anonymous Function

let calculate = function(a, b) {
    return a + b;
};

let calc=calculate(2,3);
console.log(calc);

//The Output is
//5

//Task 24 — Arrow Function

let multiply = (a, b) => {
    return a * b;
};

let mul =multiply(6,3);
console.log(mul);
//The Output is
//18

//Task 25 — Predict the Output
//Expected Output:
//10
//20
//30
//10
//Uncaught ReferenceError: b is not defined
//Explanation:
//Inside the if block, all three variables work normally, so 10, 20, and 30 are printed.
//Outside the if block, only variable a can be accessed, so console.log(a) prints 10 again. Variable `a` is declared using var, which is function-scoped, so it remains accessible anywhere inside the test() function.
//However, b and c are declared using let and const, which are block-scoped. They only exist inside the curly braces {} of the if statement. Trying to access b outside the block causes a ReferenceError, 
//which immediately stops the code from running before it can even evaluate c.
//function test() {

    if (true) {

        var a1 = 10;
        let b1 = 20;
        const c1 = 30;

        console.log(a1);
        console.log(b1);
        console.log(c1);
    }

    console.log(a1);
    console.log(b1);
    console.log(c1);
}

//test();
//The Output is
//10
//20
//30
//10
//Uncaught ReferenceError: b1 is not defined
   
//Hoisting
//Task 26 — Predict

//Expected Output
//undefined
//Explanation:
//In JavaScript, variable declarations using var are hoisted to the top of the file before the code runs. However, only the declaration is moved, not the value assigned to it.
//So JavaScript knows that variable a exists when console.log(a) runs, but because the assignment a = 10 happens on the next line, a holds the value undefined. It does not throw an error because a has already been declared in memory.

console.log(a2);

var a2 = 10;

//The Output is
//undefined

//Task 27

//Expected Output
//Uncaught ReferenceError: Cannot access 'b' before initialization
//Explanation:
//Variables declared with let cannot be used before they are declared.
//Even though JavaScript knows variable b exists, it stays in a "dead zone" from the start of the code until the line let b = 20; is reached. 
//Trying to print b before that line causes a ReferenceError instead of giving undefined.

console.log(b2);

let b2 = 20;

//The Output is
// Uncaught ReferenceError: Cannot access 'b2' before initialization

//Task 28

//Expected Output

//Uncaught ReferenceError: Cannot access 'c' before initialization

// Explanation:
//Variables declared with const cannot be used before they are declared.
//Just like let, const variables stay in a "dead zone" until the line const c = 30; is reached. 
//Trying to print c before that line causes a ReferenceError.

console.log(c2);

const c2 = 30;

//The Output is
// Uncaught ReferenceError: Cannot access 'c2' before initialization

///Difference Between them

//The main difference between var, let, and const is how they handle access before declaration and reassignment.
//var can be accessed before its declaration without crashing your code; it simply gives you undefined. let and const both cause a ReferenceError if you try to use them before their declaration line because JavaScript locks them in a "dead zone" until that line is reached. The main difference between let and const is that let allows you to change its value later, 
//while const requires a value immediately when created and cannot be reassigned.

//IIFE
//Task 29 — Self Invoking Function

(function() {
    console.log("Welcome to JavaScript");
})();

(function(product, discount) {
    console.log("Discount on " + product + " is " + discount + "%");
})("Laptop", 15)


//The Output is
//Welcome to JavaScript
//Discount on Laptop is 15%


//Callback / Higher-Order Function
//Task 30
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);
//The Output is
//Welcome

//Explanation:
//execute is the higher-order function, and welcome is the callback function.
//Higher-Order Function (execute): A function that receives another function as an argument.
//Callback Function (welcome): A function that is passed into another function to be called (executed) later.
//When you run execute(welcome), you pass welcome into execute. execute then calls callback(), 
//which triggers welcome() and prints "Welcome"

//Generator Function
//Task 31 — Cashback

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
for(let cash of cashback()){

    console.log(cash);
}

//The Output is
//10% cashback
//20% cashback
//30% cashback
//Better luck next time


// FINAL MINI PROJECT
//Task 32 — Employee Management Console

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary1: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary1: 35000
    }
];
//1.for...of
for (let emp of employees) {
    console.log(emp);
}
//2. for...in
for (let emp of employees) {
    for (let key in emp) {
        console.log(key + ": " + emp[key]);
    }
}

//3. Function 
//4. Function parameters
function displayEmployee(emp) {
    console.log("Name: " + emp.name + ", Role: " + emp.role);
}


displayEmployee(employees[0]);

//5.5. Return

function getSalary(emp) {
    return emp.salary1;
}

let salary1 = getSalary(employees[0]);
console.log("Salary: " + salary1);

//6. Condition
for (let emp of employees) {
    if (emp.salary1 >= 40000) {
        console.log(emp.name + " earns 40000 or more");
    }
}

//7. Arrow function

const calculateBonus = (salary1) => salary1 * 0.10;

console.log("Bonus: " + calculateBonus(employees[0].salary1));

//8. Generator

function* getBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

for (let benefit of getBenefits()) {
    console.log("Benefit: " + benefit);
}

//The Output is
//{name: 'Arun', age: 25, department: 'IT', role: 'Developer', salary: 40000}
//{name: 'Priya', age: 24, department: 'HR', role: 'HR Executive', salary: 35000}
//name: Arun
//age: 25
//department: IT
//role: Developer
//salary: 40000
// name: Priya
//age: 24
//department: HR
//role: HR Executive
//salary1: 35000
//Name: Arun, Role: Developer Salary: undefined
// Bonus: 4000
//Benefit: Medical Insurance
//Benefit: Transport
// Benefit: Food Allowance
// Benefit: Bonus

//Task 1 — var, let, const

var student_name="kumar";

let student_age="18";

const college_name="Panimalar Engineering College";

student_name="dinesh"
student_age=14
college_name="St.joseph Enginnering college"

var student_name="kathir"
let student_age="24"
console.log(student_age);
console.log(student_name);
console.log(college_name);

// by trying to change the const value we got error  task2.js:11 Uncaught TypeError: Assignment to constant variable at task2.js:11:13

// by redeclaring the let variable we got error Uncaught SyntaxError: Identifier 'student_age' has already been declared (at task2.js:14:5)
// The Output is :
// 14
// kathir
 //Panimalar Engineering College
 

// Task 2 — User Information

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


//The output is
// Name: Naveen
//Age: 22
//City: Trichy

//Task 3 — Welcome Message

let user_name=prompt("Enter your Username");
alert("Welcome "  + user_name +"!");

// The output is 
// Welcome Naveen !

// Task 4 — Age Calculator

let Birth_year=prompt("Enter ur Birth Year");
let Current_year=2026;
let age_cal=Current_year-Birth_year;
console.log("The age is"+ age_cal);

//The output is "The age is 24"

//Task 5 — Identify Data Types

let var1="Hello";

console.log(typeof(var1))

// The output data type is string

let var2=100;

console.log(typeof(var2))

// The output data type is number

let var3=25.5;

console.log(typeof(var3))

// The output data type is number

let var4=true;

console.log(typeof(var4));

// The output data type is boolean

let var5=false;

console.log(typeof(var5));

// The output data type is boolean

let var6=undefined;

console.log(typeof(var6));

// The output data type is undefined

let var7=null;

console.log(typeof(var7));

// The output data type is object


// Task 6 — Student Data

let student_data={
    "name":"kumar",
    "age":21,
    "city":"chennai",
    "qualification":"B.tech IT",
     "isStudent":"No"
}

console.log(student_data);
console.log(student_data.name);
console.log(student_data.age);
console.log(student_data.qualification);
console.log(student_data.isStudent);

//The output is 
// {name: 'kumar', age: 21, city: 'chennai', qualification: 'B.tech IT', isStudent: 'No'}
// kumar
//21
// B.tech IT
// No

//Task 7 — Fruit Array

let fruit_array=["Apple","Orange","Banana","Grapes","Papaya"]

console.log("The First Fruit is",fruit_array[0]);
console.log("The Second  Fruit is",fruit_array[1]);
console.log("The Last Fruit is",fruit_array[fruit_array.length-1]);
console.log("The Total Number of Fruits are",fruit_array.length);

//The output is
//The First Fruit is Apple
//The Second  Fruit is Orange
//The Last Fruit is Papaya
//The Total Number of Fruits are 5

//Task 8 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

//The output is 
//Addition: 25
//Subtraction: 15
//Multiplication: 100
//Division: 4
//Modulus: 0
//Exponentiation: 3200000

//Task 9 — Shopping Bill

let Shirt=999;
let Pant = 1499;
let Shoes = 1999;
let total=Shirt+Pant+Shoes;

console.log("Total:",total);

// The Output is Total:4497

//Task 10 — Simple Marks Calculation

let Tamil = 80
let English = 75
let Maths = 90
let total_marks=Tamil+English+Maths;
let average_marks=total_marks/3;

console.log("Total Marks:",total_marks);
console.log("Average Marks:",average_marks);

// The output is
//Total Marks: 245
// Average Marks: 81.66666666666667

//Task 11 — Post Increment

//Expected output is
//11
//10

let num1 = 10;
let num2 = num1++;
console.log(num1);
console.log(num2);

// the output is
// 11
// 10

//Task 12 — Pre Increment

//Expected out is
//11
//11
let a1 = 10;

let b1 = ++a1;

console.log(a1);
console.log(b1);

// The output is
// 11
// 10

//Task 13 — Post Decrement

//Expected Output
//19
//20

let a2= 20;

let b2 = a2--;

console.log(a2);
console.log(b2);

// The output is
// 19
// 20


//Task 14 — Pre Decrement

//Expected output
//19
//19

let a3 = 20;
let b3 = --a3;

console.log(a3);
console.log(b3);

// The output is
// 19
// 19

//Task 15 — Find the Final Values

//Expected output 
//7
//4
//7
//5

let a4 = 5;

let b4 = a4++;

let c = ++a4;

let d = b4--;

console.log(a4);
console.log(b4);
console.log(c);
console.log(d);

//The output is 
//7
//4
//7
//5

//Task 16 — Assignment Operators
let num = 10;

num=10
num += 5;
console.log("+= :", num);

num=10
num -= 5;
console.log("-= :", num);

num=10
num *= 5;
console.log("*= :", num);

num=10
num /= 5;
console.log("/= :", num);

num=10
num %= 5;
console.log("%= :", num);

num=10;
num **= 5;
console.log("**= :", num);

//The output is 
//+= : 15
// -= : 5
//*= : 50
// /= : 2
// %= : 0
// **= : 100000

//Task 17 — Mini Student Profile

let name1 = "Rohan";
let age1 = 22;
let city1 = "Chennai";
let college = "Anna University";

let subjects = ["English", "tamil", "Maths", "C programming","Database"];

let student = {
  name: name1,
  age: age1,
  city: city1,
  subjects: subjects,
  isStudent: "No"
};

console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("City:", student.city);
console.log("First subject:", student.subjects[0]);
console.log("Last subject:", student.subjects[student.subjects.length - 1]);
console.log("Total subjects:", student.subjects.length);
console.log("Complete object:", student);

//The output is 
//Student name: Rohan
// Student age: 22
//City: Chennai
// First subject: English
//Last subject: Database
//Total subjects: 5
//Complete object: {name: 'Rohan', age: 22, city: 'Chennai', subjects: Array(5), isStudent: 'No'}age: 22city: "Chennai"isStudent: "No"name: "Rohan"subjects: (5) ['English', 'tamil', 'Maths', 'C programming', 'Database']

// Final Challenge — User + Calculator

let number1=Number(prompt("Enter number 1:"));
let number2=Number(prompt("Enter number 2:"));

console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);
console.log("Modulus:", number1 % number2);
console.log("Exponentiation:", number1 ** number2);
//The output is 
//number1=15
//number2=5
//Addition: 15
//Subtraction: 5
//Multiplication: 50
//Division: 2
//Modulus: 0
//Exponentiation: 100000
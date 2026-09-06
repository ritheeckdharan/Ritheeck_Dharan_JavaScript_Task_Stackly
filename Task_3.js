//TASK 3

//Task 1 — Variables

var Name="kumar";
var Age=21;
let City="Chennai";
const College="SRM College";
// 1
console.log(Name);
console.log(Age);
console.log(City);
console.log(College);

//output 
//kumar
// 21
//Chennai
//SRM College

//2
//Reassigning
Name="kathir";
console.log(Name);

//The variable var Name value change from kumar to kathir

City="Trichy";
console.log(City);

//The varaible let city value change from Chennai to trichy
//College="S.A College";

console.log(College);

//The variable const College since const variable cannot be reassigned 
// Uncaught TypeError: Assignment to constant variable.
    
//Redeclaring
var Name ="Ritheeck"
console.log(Name);

//The var variable Name can be redeclared the output is Ritheeck
//let City="Salem";
console.log(City);

//The let variable City cannot be redeclared the output is Uncaught SyntaxError: Identifier 'City' has already been declared 
//const College="Loyala College";

console.log(College);

// The const variable College cannot be recdeclared the output is Uncaught SyntaxError: Identifier 'College' has already been declared 


//Task 2 — Printing Statements

//console.log()

console.log("This is Ritheeck Dharan");

//The Output is This is Ritheeck Dharan

//alert()

alert("The user is logged");

// The Output is The user is logged

//confirm()

confirm("The password is incorrect");

// The Output is The Password is incorrect

//prompt()

let color=prompt("What is your favorite Colour");
console.log("My Favourite Colour is",color);

// The Output is My Favourite Colour is Red 

//document.writeln()

document.writeln("Welcome to my web page");

// The Output is Welcome to my web page will be printed in the webpage

//Task 3 — User Details

let name=prompt("Enter your Name:");
let age=prompt("Enter your Age:");
let city=prompt("Enter your City:");
let qualification=prompt("Enter your Qualification:");

console.log("Name:",name);
console.log("Age:",age);
console.log("City:",city);
console.log("Qualification:",qualification);

//The Output is
//Name:Arun
//Age:26
//City:Chennai
//Qualification:B.com 

//Task 4 — Find Data Types

 let data1="Javascript";
 let data2=100;
 let data3=99.5;
 let data4=true;
 let data5=false;
 let data6=undefined;
 let data7=null;

console.log("data1 is",typeof(data1));
console.log("data2 is",typeof(data2));
console.log("data3 is",typeof(data3));
console.log("data4 is",typeof(data4));
console.log("data5 is",typeof(data5));
console.log("data6 is",typeof(data6));
console.log("data7 is",typeof(data7));

//The Output is
//string
//number
//number
//boolean
//boolean
//undefined
//object

//Task 5 — Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

//1
console.log("The First Student name is",students[0]);

//The Output is The First Student name is Arun

//2

console.log("The Second Student name is",students[1]);

//The Output is The Second Student name is Priya

//3

console.log("The Last Student name is",students[4]);

//The Output is The Last Student name is Rahul

//4

console.log("The Total Number of Students is",students.length);

//The Output is the Total Number of Students is 5


// Task 6 — Employee Object

let Skills=["HTML","CSS","JavaScript","Java","SpringBoot","MySql"];
let Qualification=["B.tech IT","MBA"];

let employee_data={
    "name":"Deva",
    "age":26,
    "role":"Java Full Stack Developer",
    "skills":Skills,
    "isWorking":"Yes",
    "qualification":Qualification
};



console.log("The Employee Name is",employee_data.name);

//The Output is The Employee Name is Deva

console.log("The Age is",employee_data.age);

//The Output is The Age  is 26

console.log("The First Skill is",employee_data.skills[0]);

//The Output is The First Skill is HTML

console.log("The Last Qualification is",employee_data.qualification[1]);

//The Output is The Last Qualification is MBA

//Task 7 — Calculator

let a = 20;
let b = 5;

console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Divison:",a/b);
console.log("Modulus:",a%b);
console.log("Exponentiation:",a**b);

//The Output is 
//Addition: 25
//Subtraction: 15
//Multiplication: 100
//Divison: 4
//Modulus: 0
//Exponentiation: 3200000


//Task 8 — Shopping Bill

let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;
let Total_Price=Shirt+Pant+Shoes+Bag;
console.log("Total Price:",Total_Price);
// The Output is Total Price: 5296

//Task 9 — Increment & Decrement

//A

//Expected Output
//11
//10

let a1 = 10;

let b1 = a1++;

console.log(a1);
console.log(b1);

//The Output is
//11
//10

//B

//Expected Output
//11
//11


let a2 = 10;

let b2 = ++a2;

console.log(a2);
console.log(b2);

//The Output is
//11
//11

//C

//Expected Output
//9
//10

let a3 = 10;

let b3 = a3--;

console.log(a3);
console.log(b3);

//The Output is
//9
//10

//D

//Expected Output
//9
//9
let a4 = 10;

let b4 = --a4;

console.log(a4);
console.log(b4);

// Assignment Operator Tasks 
// Task 10

let num=10;

num=10
console.log(num+=5);

//The Output is 15

num=10
console.log(num-=3);

//The Output is 7

num=10
console.log(num*=2);

//The Output is 20

num=10
console.log(num/=4);

//The Output is 2.5

num=10
console.log(num%=3);

//The Output is 1

num=10
console.log(num+=5);

//The Output is 15

num=10
console.log(num**=2);

//The Output is 100

//Comparison Operator Tasks

//Task 11 — Find Output

//Expected Output
//true
//false
//true
//false

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

//The output is
//true
//false
//true
//false

//Expected Output
//true
//false

console.log(5 == "5");
console.log(5 === "5");

//The Output is
//true
//false

//Expected Output
//false
//true

console.log(10 != "10");
console.log(10 !== "10");

//The Output is
//false
//true

// Logical Operator Tasks
//Task 12 — AND

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//The Output is
//true
//False
//False
//False

//Task 13 — OR

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//The Output is
//true
//true
//true
//true

//Task 14 — NOT
console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));

//The Output is
//false
//true
//true
//false

// Task 15 — Combination

//console.log(5 == "5" && !(5 === 5) || 6 > 7);
//The Output is false

//console.log(10 > 5 && 8 < 12 || 4 === "4");
//The Output is true

//console.log(7 === 7 && 10 != "10" || 5 >= 5);
//The Output is true

//console.log(15 < 10 || 20 > 15 && 5 == "5");
// The Output is true


//Task 16 — Voting

let vote_age = 20;

vote_age>=18?console.log("Eligible to vote"):console.log("Not Eligible to Vote");

//The Output is Eligible to vote

//Task 17 — Password

let password=true;
password=true?console.log("Login Successfully"):console.log("Wrong Password");

//The Output is Login Successfully

//Task 18 — User Introduction

let name1 = "Naveen";
let age1 = 25;
let city1 = "Trichy";

console.log("My name is " + name1 +"I am "+age1+" years old.  I Live in "+ city1);
console.log("My name is",`${name1}`,"I am ",`${age1}`,"years old."  ,"I Live in ",`${city1}`);;

//Using +
//The Output is My name is NaveenI am 25 years old.  I Live in Trichy
//Using template literals `${}`
//The Output is My name is Naveen I am  25 years old. I Live in  Trichy

//Task 19 — String Conversion

console.log((String(100)));
console.log(typeof(String(100)));
console.log((String(true)));
console.log(typeof(String(true)));
console.log((String(undefined)))
console.log(typeof(String(undefined)));
console.log((String(null)));
console.log(typeof(String(null)));
console.log((String([1,2])));
console.log(typeof(String([1,2])));

//The output is
//100
//string
//true
//string
//undefined
//string
//null
//string
//1,2
//string

// Task 20 — Number Conversion


//console.log(Number());
//console.log(Number(""));
//console.log(Number("123"));
//console.log(Number("a1"));
//console.log(Number(true));
//console.log(Number(false));
//console.log(Number(undefined));
//console.log(Number(null));

//The predicated Output is
//0
//0
//123
//NaN
//1
//0
//NaN
//0

// Task 21 — Boolean Conversion
//console.log(Boolean());
//console.log(Boolean(""));
//console.log(Boolean("hello"));
//console.log(Boolean(123));
//console.log(Boolean(true));
//console.log(Boolean(false));
//console.log(Boolean(undefined));
//console.log(Boolean(null));
//console.log(Boolean([]));
//console.log(Boolean({}));

//The Output is
//false
//false
//true
//true
//true
//false
//false
//false
//true
//true

//Task 22 — Voting Eligibility

let vage=prompt("Enter the age");
if(vage>=18){
    console.log("You can vote");

}
else{
    console.log("You can't vote");
}
//The Output is
//Enter the age:20
//"You can vote"

//Task 23 — Positive or Negative

let numcheck=prompt("Enter the Number:");
if(numcheck>0){
    console.log("The Number is Positive");
}
else if(numcheck<0){
    console.log("The Number is Negative");

}
else{
    console.log("The Number is Zero");
}

//The Output is
//Enter the Number:5
//The Number is Positive
//Enter the Number:-2
//The Number is Negative
//Enter the Number:0
//The Number is Zero


//Task 24 — Grade System

let mark=prompt("Enter the your Mark:");
if(mark>=90&&mark<=100){

    console.log("The Grade is A Grade");
}
else if(mark>=80 && mark<90){

    console.log("The Grade is B Grade");

}
else if(mark>=70 && mark<80){
     console.log("The Grade is C Grade");
}
else if(mark>=60 && mark<70){
     console.log("The Grade is D Grade");
}
else if(mark<60){
    console.log("Fail");
}
else{
    console.log("Wrong Number")
}


//The Output is
//Enter your Mark:95
//The Grade is A Grade
//Enter your Mark:83
//The Grade is B Grade
//Enter your Mark:75
//The Grade is C Grade
//Enter your Mark:67
//The Grade is D Grade
//Enter your Mark:55
//Fail
//Enter your Mark:101
//Wrong Number

// Task 25 — Job Eligibility

let Agee=prompt("Enter the Age:");
let Height=prompt("Enter the Height:");
let Weight=prompt("Enter The Weight:")

if(Agee>=18){
    if(Height>=160){
        if(Weight>=60){
            alert("Congratulations Your are Selected");
        }
        else{
            alert("Your Weight is not Enough");
        }
    }
    else{
        alert("Your Height is not Enough");
    }
    
}
else{
    alert("Your Age is not Enough");
}

//The Output is
//Agee=23
//Height=165
//Weight=65
//Congratulations Your are Selected
//Agee=17
//Height=165
//Weight=65
//Your Age is not Enough
//Agee=25
//Height=145
//Weight=65
//Your Height is not Enough
//Agee=25
//Height=145
//Weight=55
//Your Weight is not Enough

//Task 26 — Traffic Light

let trafficcolor=prompt("Enter the Signal color");

switch(trafficcolor){
    case "Red":alert("Stop");break
    case "Yellow":alert("Ready");break
    case "Green":alert("Go");break

    default : alert("Signal is not working");break
}


//Output
//trafficcolor=Red
//Stop
//trafficcolor=Yellow
//Ready
//trafficcolor=Green
//Go
//trafficcolor=""
//Signal is not working


// Task 27 — Day

let day=Number(prompt("Enter the day:"));

switch(day){
     case 1 :console.log("Monday"); break
     case 2 :console.log("Tuesday"); break
     case 3 :console.log("Wednesday"); break
     case 4 :console.log("Thursday"); break
     case 5 :console.log("Friday"); break
     case 6 :console.log("Saturday"); break
     case 7 :console.log("Sunday"); break

    default : console.log("Invalid day");break
}

//Output
//"Enter the day:1"
//Monday
//"Enter the day:2"
//Tuesday
//"Enter the day:3"
//Wednesday
//"Enter the day:4"
//Thursaday
//"Enter the day:5"
//Friday
//"Enter the day:6"
//Saturday
//"Enter the day:7"
//Sunday
//"Enter the day:8"
//"Invalid day"

//Task 28 — Student Result System

let StudentName=prompt("Enter Student Name:");
let StudentAge=prompt("Enter Student Age:");
let StudentCity=prompt("Enter Student City:");

let Tamil=Number(prompt("Enter Tamil Marks:"));
let English=Number(prompt("Enter English Marks:"));
let Maths=Number(prompt("Enter Maths Marks:"))

let Total_Marks=Tamil+English+Maths;
let Average_Marks=Total_Marks/3;

let grade;
if(Average_Marks>=90 ){
    grade="A"
}
else if(Average_Marks>=80){
   grade="B"
}
else if(Average_Marks>=70){
    grade="C"
}
else if(Average_Marks>=60){
   grade="D"
}


else{
    grade="Fail"
}

let Voting=StudentAge>=18?"Eligible":"Not Eligible";

console.log ("Name:",`${StudentName}`);
console.log ("Age:",`${StudentAge}`);
console.log ("City:",`${StudentCity}`);
console.log ( "Total:",`${Total_Marks}`);
console.log ("Average:",`${Average_Marks}`);
console.log ("Grade:",`${grade}`);
console.log ("Voting:",`${Voting}`);

//The Output is 
//Enter Student Name:Kamal
//Enter Student Age:25
//Enter Student City:chennai
//Enter Tamil Marks:95
//Enter English Marks:94
//Enter Maths Marks:96
//Name:Kamal
// Age: 25
// City: chennai
//Total: 285
//Average 95
//Grade: A
//Voting: Eligible


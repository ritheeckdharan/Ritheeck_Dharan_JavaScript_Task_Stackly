///Task-5

// Variables & Data Types (Questions 1-8)
//1.What is the difference between var, let, and const?

//Ans:
//In JavaScript, var, let, and const determine how variables are scoped and updated:
//var is function-scoped (or globally scoped), hoisted to the top of its context with an initial value of undefined, and allows both redeclaration and reassignment, which often causes subtle bugs.
//let is block-scoped (confined to {} blocks like loops or if statements), hoisted without initialization (accessing it before declaration causes a ReferenceError), and allows reassignment but prevents redeclaration within the same scope.
//const is also block-scoped and hoisted like let, but requires an immediate initial value and cannot be reassigned or redeclared (though properties of objects and arrays assigned to const can still be mutated).

// Q2: Can you re-declare a variable with var? What about let and const?
///Ans:
//Yes, you can re-declare a variable with var as many times as you like within the same scope without triggering an error, which often leads to unexpected bugs by accidentally overwriting existing data. In contrast, both let and const strictly forbid re-declaration in the same scope, raising a SyntaxError to protect your code from accidental overrides. However, you can declare a variable with the same name using let or const inside an inner block (such as inside an if statement or a loop), which creates a separate, 
// locally scoped variable without affecting the outer one.'

//Q3: What is the output of this code?
//javascript

//var x = 5;
//let y = 10;
//const z = 15;

//x = 20;
//y = 25;
//z = 30;

//console.log(x, y, z)

//Ans
//The Output is 
//The output will be:

//TypeError: Assignment to constant variable.
//Reasoning:
//x = 20; works because var allows value reassignment.
//y = 25; works because let allows value reassignment.
//z = 30; throws a runtime error because const variables are read-only and cannot be reassigned once declared.
//Because the code throws an unhandled error on z = 30;, execution stops immediately and console.log(x, y, z) does not run

// Q4: What is the difference between declaring and initializing a variable?

//Ans:
//Declaring a variable means creating its name in memory within a specific scope using var, let, or const, without assigning it a value. Initializing a variable means assigning it its first value.
//Reasoning:

//Declaration: let x; registers the identifier x in memory. var and let default to undefined when declared without a value.
//Initialization: x = 10; stores the initial value 10 into the declared space in memory.
//Combined: let x = 10; performs both declaration and initialization on the same line.

//Q5: What will be the output?

//javascript
let a;
console.log(a);

//The output will be:
//undefined

//easoning:
//let a; declares the variable a in memory, but does not assign it a value (it is uninitialized).
//In JavaScript, when a variable is declared using let or var without an initial value, it is automatically assigned the primitive value undefined by default.
//Therefore, passing a to console.log() prints undefined.

// Q6: What is hoisting? Give an example

//Ans:
//Hoisting is JavaScript's default mechanism where variable and function declarations are moved to the top of their scope during the compile phase before code execution.
//var: Hoisted and initialized with undefined. Accessing it early returns undefined.
//let / const: Hoisted but left uninitialized in a Temporal Dead Zone (TDZ). Accessing them early throws a ReferenceError.
//Functions: Fully hoisted, allowing calls before declaration.

//// 1. var hoisting
console.log(a1); 
var a1 = 10;
// Output: undefined

// 2. let hoisting (TDZ)
 //console.log(b1);
let b1 = 20;
// ReferenceError: Cannot access 'b' before initialization

// 3. Function hoisting
greet(); 
function greet() {
  console.log("Hello!");
}
// Output: Hello!

//Q7: What is the difference between null and undefined?

//Ans:
//Both null and undefined represent the absence of a value in JavaScript, but they are used in different contexts and behave differently under equality checks and type evaluation.
//undefined: Represents an unassigned or uninitialized state. JavaScript automatically assigns undefined to variables that are declared without a value, missing function parameters, or non-existent object properties.
//null: Represents an intentional assignment of "no value" or an empty state. It is explicitly set by the developer to indicate that a variable intentionally points to nothing.

//example
// 1. undefined (automatically set by JS)
let a2;
console.log(a2); 
// Output: undefined

// 2. null (intentionally set by developer)
let b2 = null;
console.log(b2);

// Output: null

// 3. Type differences
console.log(typeof a2); 
console.log(typeof b2); 

// Output: "undefined"
// Output: "object" (historical JS bug)

// 4. Equality comparison
console.log(null == undefined);  
console.log(null === undefined);

// Output: true  (loose equality: both represent falsy/empty)
// Output: false (strict equality: different types)

//Q8: What will be the output?
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

//The Output is;
//object
//undefined
//object
//object

//Operators (Questions 9-14)

//Q9: What is the difference between == and ===?

//Ans:
//Both == (loose equality) and === (strict equality) are comparison operators in JavaScript, but they differ in how they handle data types during evaluation.
//== (Loose Equality): Compares two values for equality after performing implicit type conversion (coercion) if the operands are of different types.
//=== (Strict Equality): Compares both the values and the data types. It returns true only if both operands are identical in type and value, without performing type conversion

// Loose equality (==) coerces string to number
console.log(10 == "10");
//Output  
// true

// Strict equality (===) checks value AND type
console.log(10 === "10"); 
//Output
// false


//Q10: What is the difference between ++i and i++?

//Ans
//Both ++i (pre-increment) and i++ (post-increment) increase the value of i by 1, but they differ in when the increment occurs relative to value evaluation.
//++i (Pre-increment): Increments i first, then returns the updated value.
//i++ (Post-increment): Returns the current value of i first, then increments i.

//Example
let i = 5;
console.log(++i); 
// 6 (Increments to 6 first, then prints)


let j = 5;
console.log(j++); 
// 5 (Prints current value 5 first, then increments to 6)

// Q11: What will be the output?

let x = 10;
let y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);


// The Output is
//105
//5
// 50
//2

//Q12: What are logical operators? Explain with examples.

//Ans:
//Logical operators are used to combine or modify boolean values (true or false) to control the flow of logic in code. JavaScript supports three main logical operators:
//&& (Logical AND): Returns true only if both operands are true.
//|| (Logical OR): Returns true if at least one operand is true.
//! (Logical NOT): Reverses the boolean state (turns true into false and vice versa).

//Example:
let isAdult = true;
let hasID = false;

// 1. Logical AND (&&) - Both must be true
console.log(isAdult && hasID); 
//Output
// false

// 2. Logical OR (||) - At least one must be true
console.log(isAdult || hasID);
//Output
//true

// 3. Logical NOT (!) - Inverts the value
console.log(!isAdult); 
// false

//Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

 // The Output is
//true
//true
//false

//Q14: What is the ternary operator? Give an example.

//Ans:
//The ternary operator (? :) is a concise, three-part conditional operator in JavaScript used as a shorthand for an if-else statement. It evaluates a condition and returns one of two values.
//Syntax: condition ? valueIfTrue : valueIfFalse
//If the condition is true, the expression before the colon (:) is executed.
//If the condition is false, the expression after the colon (:) is executed.

//Example:
let age = 18;
// Using ternary operator instead of if-else
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

//Output
//Adult


//Type Casting (Questions 15-17)

// Q15: What is the difference between implicit and explicit type casting?

//Ans:
//Type casting (or type conversion) is the process of converting a value from one data type to another.
//Implicit Type Casting (Type Coercion): Handled automatically by JavaScript when an operation involves mismatched data types. JavaScript converts one type to another behind the scenes to complete the operation.
//Explicit Type Casting: Performed manually by the developer using built-in functions or constructors (like Number(), String(), or Boolean()) to intentionally convert a type.

//Example
///// 1. Implicit Type Casting (JS converts number 5 to string automatically)
let implicitResult = "Price: " + 5; 
console.log(implicitResult); 
console.log(typeof implicitResult); 

//Output
// "Price: 5"
// "string"


// 2. Explicit Type Casting (Developer manually converts string "100" to number)
let strNum = "100";
let explicitResult = Number(strNum); 

console.log(explicitResult); 
console.log(typeof explicitResult);

//Output
// 100
// "number"

//Q16: What will be the output?

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));


//The Output
///123
// NaN
//1
// 0
//false
// true

/// Q17: What is NaN? Give an example.

//Ans
//NaN stands for "Not-a-Number". It is a special numeric value in JavaScript that represents an unrepresentable, undefined, or invalid mathematical result (such as dividing zero by zero or attempting arithmetic on a non-numeric string).
//Type: Surprisingly, typeof NaN returns "number".
//Unique Behavior: NaN is non-reflexive, meaning NaN === NaN evaluates to false. To check if a value is NaN, you should use Number.isNaN().

// 1. Performing invalid arithmetic
let result = "Hello" / 2;
console.log(result);

//Output
// NaN

// 2. Type check
console.log(typeof result);

//Output
//"number"

// 3. Self-equality check
console.log(result === NaN); 

//Output
//false

// 4. Proper check using Number.isNaN()
console.log(Number.isNaN(result)); 

//Output
//true

//## Conditional Statements (Questions 18-21)

//Q18: What is the difference between if-else and switch?

//Ans:
//Note:
//Both if-else and switch are conditional control structures in JavaScript used to execute code blocks based on conditions, but they differ in how they evaluate expressions and handle multiple branching logic.
//if-else: Evaluates complex boolean expressions (ranges, logical operators like && and ||, and inequalities like >, <). It executes sequentially until a condition evaluates to true.
//switch: Evaluates a single expression or value against fixed equality cases (===). It uses a lookup table mechanism, making it cleaner for checking multiple discrete values against a single variable.

//Example

let day = 2;

// 1. Using switch (ideal for single fixed values)
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday"); // Matches this case
    break;
  default:
    console.log("Other day");
}

//Output
//Tuesday

// 2. Using if-else (ideal for ranges or complex conditions)
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B"); // Matches range condition
} else {
  console.log("Grade C");
}

//Output
//Grade B


//Q19: What will be the output

let age1 = 20;
if(age1 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//The Output is
//Adult

// Q20: What is nested if? Give an example.

//Ans
//A nested if statement is an if statement placed inside another if or else block. It is used when a second condition needs to be checked only after an initial condition evaluates to true.
//Helps evaluate multi-level conditions sequentially.
//Deeply nested if statements can reduce code readability, so they are often combined using logical operators (&&) when possible.

//Example

let age2 = 20;
let hasLicense = true;

// Outer condition
if (age2 >= 18) {
  // Inner (nested) condition
  if (hasLicense) {
    console.log("Allowed to drive.");
  } else {
    console.log("Age is valid, but license is required.");
  }
} else {
  console.log("Too young to drive.");
}

//The Output is
//Allowed to drive

//Q21: Write a program to check if a number is even or odd using ternary operator.

//Ans:
let num=7
let result1 = (num % 2 === 0) ? "Even" : "Odd";

console.log(result1);

//The Output is
//Odd


// Loops (Questions 22-25)

//Q22: What is the difference between while and do-while ?

//Ans:
//Both while and do-while loops are used to repeat a block of code as long as a condition remains true, but they differ in when the condition is evaluated.
//while Loop (Pre-test): Evaluates the condition before executing the loop body. If the condition is false initially, the loop body runs 0 times.
//do-while Loop (Post-test): Executes the loop body first, then evaluates the condition. The loop body is guaranteed to run at least once, regardless of the initial condition.

//Example:
let k = 10;
// 1. while loop (condition is false initially -> runs 0 times)
while (k < 5) {
  console.log("While loop executed");
  k++;
}

// 2. do-while loop (runs body once before checking condition)
do {
  console.log("Do-while loop executed");
  i++;
} while (i < 5);

//The Output is
// Do-while loop executed


// Q23: What will be the output?

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

//The Output is
//1
//2
//3
//4
//5

//Q24: What is the difference between for-of and for-in?

//Ans
//Both for-in and for-of are used for iteration, but they iterate over completely different things.
//for-in: Iterates over the keys (or property names/indices) of an object or array. It is mostly used for iterating through properties of plain objects.
//for-of: Iterates over the values of iterable objects (like arrays, strings, maps, and sets). It is the standard way to loop through array elements. 
//It does not work on plain objects

//Example:

let fruits = ["Apple", "Banana", "Cherry"];

// 1. for-in: Gets the index (keys)
console.log("Using for-in:");
for (let index in fruits) {
  console.log(index);
}

// 2. for-of: Gets the actual items (values)
console.log("\nUsing for-of:");
for (let fruit of fruits) {
  console.log(fruit);
}

//Output
//Using for-in:
//0
//1
//2
//Using for-of:
//Apple
//Banana
//Cherry

//Q25: Write a program to find sum of numbers from 1 to 100 ?

//Ans

let sum = 0;

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
  sum += i; 
}

console.log("Sum:", sum);

//Output
//Sum: 5050

// Arrays (Questions 26-27)

//Q26: What is the difference between slice and splice?

//Ans
//Both slice() and splice() are built-in JavaScript methods used to work with arrays, but they differ fundamentally in whether they mutate the original array and what they return.
//slice(start, end): Returns a copy of a portion of an array into a new array. It does not modify the original array (non-mutating). The end index is non-inclusive.
//splice(start, deleteCount, ...items): Modifies the original array directly (mutating) by removing, replacing, or adding elements. It returns an array containing the deleted elements.

//Example

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let sliced = arr1.slice(1, 4); 
console.log("Sliced Result:", sliced);
console.log("Original arr1:", arr1); 


let spliced = arr2.splice(1, 2, 99);
console.log("Spliced Removed Items:", spliced);
console.log("Original arr2:", arr2); // Mu

///Output
//Sliced Result: [ 2, 3, 4 ]
//Original arr1: [ 1, 2, 3, 4, 5 ]
//Spliced Removed Items: [ 2, 3 ]
//Original arr2: [ 1, 99, 4, 5 ]

//Q27: What will be the output?

let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

//The Output is
//[1, 2,3 ]

//Functions (Questions 28-30)

//Q28: What is the difference between function declaration and function expression?

//Ans:
//Both Function Declarations and Function Expressions create functions in JavaScript, but they differ in syntax, hoisting behavior, and how they are parsed by the engine.
//Function Declaration: Defined using the function keyword as a standalone statement. It is hoisted completely to the top of its scope, allowing it to be called before its definition in the code.
//Function Expression: Defined by assigning an anonymous or named function to a variable. Variable hoisting rules apply (var is hoisted as undefined; let/const enter the Temporal Dead Zone), meaning it cannot be called before its line of definition.

Example:
 //Function Declaration (Can be called BEFORE definition)
greet(); // Works due to hoisting

function greet() {
  console.log("Hello from Function Declaration!");
}

// 2. Function Expression (MUST be defined BEFORE calling)
// sayHello(); // Throws ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function() {
  console.log("Hello from Function Expression!");
};

sayHello(); // Works fine here

//The Output is
//Hello from Function Declaration!
//Hello from Function Expression!

//Q29: What is an arrow function? Give an example.

//Ans:
//An arrow function is a syntactically concise way to write function expressions introduced in ES6 (ES2015). It uses the => ("fat arrow") syntax instead of the function keyword.
//Implicit Return: If the function body contains a single expression, you can omit the curly braces ({}) and the return keyword.
//Lexical this: Arrow functions do not have their own this binding; they inherit this from the surrounding (enclosing) scope.
//Not Constructible: They cannot be used as constructors with the new keyword.

//Example:

// Regular Function Expression
const addRegular = function(a, b) {
  return a + b;
};

// Arrow Function (explicit return with block body)
const addArrow = (a, b) => {
  return a + b;
};

// Concise Arrow Function (implicit return for single-line expression)
const addConcise = (a, b) => a + b;

console.log(addRegular(2, 3));
console.log(addArrow(2, 3));
console.log(addConcise(2, 3))

//The Output is
//5
//5
//5

//Q30: What will be the output?

function greet() {
    return "Hello";
}
let message = greet();
console.log(message);


//The Output is
//Hello
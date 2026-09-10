// Task-6


//Task 1 — Student Result Analyzer


function generateReportCard(studentName, department, mark1, mark2, mark3, mark4, mark5) {
  let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
  let average = totalMarks / 5;

  let status;
  let grade;

  if (mark1 >= 50 && mark2 >= 50 && mark3 >= 50 && mark4 >= 50 && mark5 >= 50) {
    status = "Pass";

    if (average >= 90) {
      grade = "A";
    } else if (average >= 75) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "Fail";
    }
  } else {
    status = "Fail";
    grade = "Fail";
  }
  console.log("       STUDENT RESULT CARD        ");
 
  console.log("Student Name : " + studentName);
  console.log("Department   : " + department);
  console.log("Marks : " + mark1 + ", " + mark2 + ", " + mark3 + ", " + mark4 + ", " + mark5);
  console.log("Total Marks : " + totalMarks);
  console.log("Average : " + average);
  console.log("Status  : " + status);

}

generateReportCard("Alex Morgan", "Computer Science", 85, 92, 78, 88, 90);

//The Output is
//STUDENT RESULT CARD        
//  Student Name : Alex Morgan
//Department   : Computer Science
//Marks        : 85, 92, 78, 88, 90
//Total Marks  : 433
//Average      : 86.6
//Status       : Pass



// Task 2 — Employee Salary Calculator

let employee = {
  name: "Arun",
  role: "Developer",
  salary: 45000,
  experience: 2
};

function calculateSalary(emp) {
  let basicSalary = emp.salary;
  let bonus = 0;

  if (emp.experience >= 5) {
    bonus = basicSalary * 0.15;
  } else if (emp.experience >= 2) {
    bonus = basicSalary * 0.10;
  }

  let finalSalary = basicSalary + bonus;

   console.log("   EMPLOYEE SALARY CALACULATOR        ");
  console.log("Employee Name : " + emp.name);
  console.log("Role: " + emp.role);
  console.log("Basic Salary : " + basicSalary);
  console.log("Bonus : " + bonus);
  console.log("Final Salary : " + finalSalary);
}

calculateSalary(employee);

//The Output is
// EMPLOYEE SALARY CALACULATOR        
// Employee Name : Arun
// Role: Developer
//Basic Salary : 45000
//Bonus : 4500
// Final Salary : 49500


// Task 3 — Product Filter System


let products = [
  { name: "Laptop", price: 55000, category: "electronics" },
  { name: "Mouse", price: 800, category: "electronics" },
  { name: "Shirt", price: 1200, category: "fashion" },
  { name: "Shoes", price: 2500, category: "fashion" },
  { name: "Phone", price: 30000, category: "electronics" }
];

let above2000 = products.filter(product => product.price > 2000);
let electronics = products.filter(product => product.category === "electronics");
let below1000 = products.find(product => product.price < 1000);
let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
let hasExpensive = products.some(product => product.price > 50000);
let allAbove500 = products.every(product => product.price > 500);

console.log("Products above ₹2000:", above2000);
console.log("Electronics:", electronics);
console.log("First product below ₹1000:", below1000);
console.log("Total Price:", totalPrice);
console.log("Any product > ₹50000?:", hasExpensive);
console.log("Every product > ₹500?:", allAbove500);


//The Output is
// Products above ₹2000: [
//   { name: 'Laptop', price: 55000, category: 'electronics' },
//   { name: 'Shoes', price: 2500, category: 'fashion' },
//   { name: 'Phone', price: 30000, category: 'electronics' }
// ]
// Electronics: [
//   { name: 'Laptop', price: 55000, category: 'electronics' },
//   { name: 'Mouse', price: 800, category: 'electronics' },
//   { name: 'Phone', price: 30000, category: 'electronics' }
// ]
// First product below ₹1000: { name: 'Mouse', price: 800, category: 'electronics' }
// Total Price: 89500
// Any product > ₹50000?: true
// Every product > ₹500?: true



//Task 4 — Employee Management



let employees = [
  { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
  { id: 102, name: "Priya", role: "Backend Developer", salary: 55000 },
  { id: 103, name: "Rahul", role: "UI/UX Designer", salary: 35000 },
  { id: 104, name: "Anita", role: "DevOps Engineer", salary: 60000 },
  { id: 105, name: "Suresh", role: "QA Engineer", salary: 42000 },
  { id: 106, name: "Divya", role: "Project Manager", salary: 75000 }
];

let allNames = employees.map(emp => emp.name);
let above40k = employees.filter(emp => emp.salary > 40000);
let emp103 = employees.find(emp => emp.id === 103);
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
let highestPaid = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);
let namesOnly = employees.map(emp => emp.name);

console.log("All Employee Names:", allNames);
console.log("Employees earning above ₹40,000:", above40k);
console.log("Employee with ID 103:", emp103);
console.log("Total Salary:", totalSalary);
console.log("Highest-paid Employee:", highestPaid);
console.log("Sorted by Salary (High to Low):", sortedEmployees);
console.log("Array of Names Only:", namesOnly);

//The Output is

// All Employee Names: [ 'Kavin', 'Priya', 'Rahul', 'Anita', 'Suresh', 'Divya' ]
// Employees earning above ₹40,000: [
//   { id: 102, name: 'Priya', role: 'Backend Developer', salary: 55000 },
//   { id: 104, name: 'Anita', role: 'DevOps Engineer', salary: 60000 },
//   { id: 105, name: 'Suresh', role: 'QA Engineer', salary: 42000 },
//   { id: 106, name: 'Divya', role: 'Project Manager', salary: 75000 }
// ]
// Employee with ID 103: { id: 103, name: 'Rahul', role: 'UI/UX Designer', salary: 35000 }
// Total Salary: 307000
// Highest-paid Employee: { id: 106, name: 'Divya', role: 'Project Manager', salary: 75000 }
// Sorted by Salary (High to Low): [
//   { id: 106, name: 'Divya', role: 'Project Manager', salary: 75000 },
//   { id: 104, name: 'Anita', role: 'DevOps Engineer', salary: 60000 },
//   { id: 102, name: 'Priya', role: 'Backend Developer', salary: 55000 },
//   { id: 105, name: 'Suresh', role: 'QA Engineer', salary: 42000 },
//   { id: 101, name: 'Kavin', role: 'Frontend Developer', salary: 40000 },
//   { id: 103, name: 'Rahul', role: 'UI/UX Designer', salary: 35000 }
// ]
// Array of Names Only: [ 'Kavin', 'Priya', 'Rahul', 'Anita', 'Suresh', 'Divya' ]

//Task 5 — Shopping Cart



let cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
  let totalCartValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discount = totalCartValue > 50000 ? totalCartValue * 0.10 : 0;
  let finalPayableAmount = totalCartValue - discount;

  console.log("Total Cart Value:", totalCartValue);
  console.log("Discount:", discount);
  console.log("Final Payable Amount:", finalPayableAmount);
}

calculateCart(cart);

// The Output is  
// Total Cart Value: 54000
// Discount: 5400
// Final Payable Amount: 48600


// Task 6 — Student Search System



let students = [
  { name: "Arun", age: 21, mark: 85 },
  { name: "Priya", age: 22, mark: 92 },
  { name: "Karthi", age: 20, mark: 67 },
  { name: "Dinesh", age: 23, mark: 45 }
];

let allNames1 = students.map(student => student.name);
let above80 = students.filter(student => student.mark > 80);
let priya = students.find(student => student.name === "Priya");
let averageMark = students.reduce((sum, student) => sum + student.mark, 0) / students.length;
let hasFailed = students.some(student => student.mark < 50);
let everyoneAbove40 = students.every(student => student.mark > 40);
let sortedByMarks = [...students].sort((a, b) => b.mark - a.mark);

console.log("All Names:", allNames1);
console.log("Scored above 80:", above80);
console.log("Found Priya:", priya);
console.log("Average Mark:", averageMark);
console.log("Has anyone failed?:", hasFailed);
console.log("Everyone scored above 40?:", everyoneAbove40);
console.log("Sorted by marks (High to Low):", sortedByMarks);

//The Output is
// All Names: [ 'Arun', 'Priya', 'Karthi', 'Dinesh' ]
// Scored above 80: [
//   { name: 'Arun', age: 21, mark: 85 },
//   { name: 'Priya', age: 22, mark: 92 }
// ]
// Found Priya: { name: 'Priya', age: 22, mark: 92 }
// Average Mark: 72.25
// Has anyone failed?: true
// Everyone scored above 40?: true
// Sorted by marks (High to Low): [
//   { name: 'Priya', age: 22, mark: 92 },
//   { name: 'Arun', age: 21, mark: 85 },
//   { name: 'Karthi', age: 20, mark: 67 },
//   { name: 'Dinesh', age: 23, mark: 45 }
// ]


//Task 7 — Array Transformation Challenge


let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let multipliedByTwo = numbers.map(num => num * 2);
let evenNumbers = numbers.filter(num => num % 2 === 0);
let greaterThan15 = numbers.filter(num => num > 15);
let firstAbove20 = numbers.find(num => num > 20);
let totalSum = numbers.reduce((sum, num) => sum + num, 0);
let hasAbove40 = numbers.some(num => num > 40);
let isAllPositive = numbers.every(num => num > 0);
let sortedDesc = [...numbers].sort((a, b) => b - a);

console.log("Numbers x 2:", multipliedByTwo);
console.log("Even numbers:", evenNumbers);
console.log("Numbers > 15:", greaterThan15);
console.log("First number > 20:", firstAbove20);
console.log("Total sum:", totalSum);
console.log("Any number > 40?:", hasAbove40);
console.log("Every number positive?:", isAllPositive);
console.log("Sorted (High to Low):", sortedDesc);

//The Output is 
// Output logged to the console:
// Numbers x 2: [ 24, 10, 16, 42, 88, 14, 60, 30 ]
// Even numbers: [ 12, 8, 44, 30 ]
// Numbers > 15: [ 21, 44, 30 ]
// First number > 20: 21
// Total sum: 142
// Any number > 40?: true
// Every number positive?: true
// Sorted (High to Low): [ 44, 30, 21, 15, 12, 8, 7, 5 ]


//Task 8 — String Analyzer


let sentence = "JavaScript is very powerful";

let totalCharacters = sentence.length;
let upperCase = sentence.toUpperCase();
let lowerCase = sentence.toLowerCase();
let containsJS = sentence.includes("JavaScript");
let firstChar = sentence.charAt(0);
let lastChar = sentence.slice(-1);
let wordsArray = sentence.split(" ");
let wordCount = wordsArray.length;
let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("Total characters:", totalCharacters);
console.log("Uppercase:", upperCase);
console.log("Lowercase:", lowerCase);
console.log("Contains 'JavaScript'?:", containsJS);
console.log("First character:", firstChar);
console.log("Last character:", lastChar);
console.log("Number of words:", wordCount);
console.log("Replaced sentence:", replacedSentence);
console.log("Array using split():", wordsArray);

//The Output is

// Total characters: 27
// Uppercase: JAVASCRIPT IS VERY POWERFUL
// Lowercase: javascript is very powerful
// Contains 'JavaScript'?: true
// First character: J
// Last character: l
// Number of words: 4
// Replaced sentence: Python is very powerful
// Array using split(): [ 'JavaScript', 'is', 'very', 'powerful' ]


// Final Mini Project — Employee Dashboard


let employees1 = [
  { id: 101, name: "Arun", department: "IT", salary: 45000, experience: 2 },
  { id: 102, name: "Priya", department: "HR", salary: 50000, experience: 4 },
  { id: 103, name: "Karthi", department: "IT", salary: 65000, experience: 6 }
];

let allEmployees = employees1;

function searchByName(query) {
  return employees1.filter(emp => emp.name.toLowerCase().includes(query.toLowerCase()));
}

function filterByDepartment(dept) {
  return employees1.filter(emp => emp.department === dept);
}

let salaryAbove50k = employees1.filter(emp => emp.salary > 50000);
let totalSalary1 = employees1.reduce((sum, emp) => sum + emp.salary, 0);
let highestPaid1 = employees1.reduce((max, emp) => emp.salary > max.salary ? emp : max);
let expAbove3Years = employees1.filter(emp => emp.experience > 3);
let lowToHigh = [...employees1].sort((a, b) => a.salary - b.salary);
let highToLow = [...employees1].sort((a, b) => b.salary - a.salary);

let totalEmployees = employees1.length;
let averageSalary = Math.round(totalSalary / totalEmployees);

console.log("1. All Employees:", allEmployees);
console.log("2. Search 'Arun':", searchByName("Arun"));
console.log("3. IT Department:", filterByDepartment("IT"));
console.log("4. Salary > ₹50,000:", salaryAbove50k);
console.log("5. Total Salary:", totalSalary);
console.log("6. Highest Paid Employee:", highestPaid1);
console.log("7. Experience > 3 Years:", expAbove3Years);
console.log("8. Sorted (Low to High):", lowToHigh);
console.log("8. Sorted (High to Low):", highToLow);

console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary1);
console.log("Highest Salary: ₹" + highestPaid.salary);
console.log("Average Salary: ₹" + averageSalary);


//The Output is :
// 1. All Employees: [
//   { id: 101, name: 'Arun', department: 'IT', salary: 45000, experience: 2 },
//   { id: 102, name: 'Priya', department: 'HR', salary: 50000, experience: 4 },
//   { id: 103, name: 'Karthi', department: 'IT', salary: 65000, experience: 6 }
// ]
// 2. Search 'Arun': [
//   { id: 101, name: 'Arun', department: 'IT', salary: 45000, experience: 2 }
// ]
// 3. IT Department: [
//   { id: 101, name: 'Arun', department: 'IT', salary: 45000, experience: 2 },
//   { id: 103, name: 'Karthi', department: 'IT', salary: 65000, experience: 6 }
// ]
// 4. Salary > ₹50,000: [
//   { id: 103, name: 'Karthi', department: 'IT', salary: 65000, experience: 6 }
// ]
// 5. Total Salary: 160000
// 6. Highest Paid Employee: { id: 103, name: 'Karthi', department: 'IT', salary: 65000, experience: 6 }
// 7. Experience > 3 Years: [
//   { id: 102, name: 'Priya', department: 'HR', salary: 50000, experience: 4 },
//   { id: 103, name: 'Karthi', department: 'IT', salary: 65000, experience: 6 }
// ]
// 8. Sorted (Low to High): [
//   { id: 101, name: 'Arun', department: 'IT', salary: 45000, experience: 2 },
//   { id: 102, name: 'Priya', department: 'HR', salary: 50000, experience: 4 },
//   { id: 103, name: 'Karthi', department: 'IT', salary: 65000, experience: 6 }
// ]
// 8. Sorted (High to Low): [
//   { id: 103, name: 'Karthi', department: 'IT', salary: 65000, experience: 6 },
//   { id: 102, name: 'Priya', department: 'HR', salary: 50000, experience: 4 },
//   { id: 101, name: 'Arun', department: 'IT', salary: 45000, experience: 2 }
// ]
// Total Employees: 3
// Total Salary: ₹160000
// Highest Salary: ₹65000
// Average Salary: ₹53333
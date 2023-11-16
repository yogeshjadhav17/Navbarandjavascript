
alert("Hello , This is my website");

// Task 1  object

let person = {
    name1:"Yogesh",
    classname:"Hubsem Private limited",
    city:"Pune",
    subject:"React Full Stack Development",
    
};

console.log(person);
/*document.write(person);*/

// Task 2 function

function Internship() {
   let Class="Hubsem Private limited";
    let  subject="React and Java";
   let message="I am learning " +subject+ "from " +Class+ " ";
   console.log(message);
   document.write(message);
}

Internship();



// array 

let Document = ["HTML", "CSS", "JavaScript", "Bootstrap"];

console.log(Document);
document.write(Document);
document.write(Document[2]);

//  Logical operators  &&  logical and

let k = 12;
let f=2;
result= k && f;

console.log(result);

// logical OR

let g=22;
let d=34;
result1 = g || d;

console.log(result1);

// logical NOT

let r=3;
let t=12;
let result3= r!=t;

console.log(result3);

/* let condition= true;
if(condition) console.log



let marks;
let school;
let message="Student has passed from kolhapur public school with 90 percent";

if school="Kolhapur Public School",
console.log(message);
else if school="New highschool"
console.log("Student passed from new hisghschool with 80 percent"); */

/* The object can be created in two ways in Javascript- 
a. object literal
b. object constructor */

// object literal

// Defining object
let person1= {
  first_name:"Yogesh",
  last_name:"Jadhav",

  // method
  function : myfunction() ,
  return : ('The name of the person is' +first_name+ '' +last_name),

  // object within object
  phone_number: {
    mobile: '9049020431',
    landline:'2638904',
}};

myfunction();

 console.log(myfunction());
 /*document.write(person1);*/


// b. object constructor

// using a constructor
function person2(first_name, last_name){
  this.first_name = first_name;
  this.last_name = last_name;
}

// creating new instances of person2 object
let person3= new person('Yogesh', 'Jadhav');
let person4= new person('Pratik', 'Kumar');

console.log(person2.first_name);
console.log('${person4.first_name} ${person4.last_name}');
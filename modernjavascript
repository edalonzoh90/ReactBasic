const X = function() {
  // "this" here is the caller of X
};

const Y = () => {
  // "this" here is NOT the caller of Y
  // It's the same "this" found in Y's scope
};

/*
  Regular functions give access to their "calling" environment while arrow functions give access to their "defining" environment  
  The value of the "this" keyword inside a regular function depends on HOW the function was CALLED (the OBJECT that made the call).
  The value of the "this" keyword inside an arrow function depends on WHERE the function was DEFINED (the SCOPE that defined the function).
  */

const testerObj = {
  func1: function() {
    console.log('In func1', this);
  },

  func2: () => {
    console.log('In func2', this);
  }
};

testerObj.func1();
testerObj.func2();

// const square1 = (a) => {
// 	return a * a;
// };
// const square2 = (a) => a * a;
// const square3 = a => a * a;

//display.log([1, 2, 3, 4].map(a => a * a));

const mystery = 'answer';
const pi = Math.PI;

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42,
  pi
}

console.log("##############");
//console.log(obj.mistery);
console.log(obj.answer);
console.log(obj.pi);

//#############################################################
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2}  = Math;

// Somewhere in a React App
// const {Component, Fragment, useState} = require('react');
// useState();

// const circle = {
//   label: 'circleX',
//   radius: 2,
// };

// const circleArea = ({radius}, {precision = 2} = {}) =>
//   (PI * radius * radius).toFixed(precision);

// console.log(
//   circleArea(circle, { precision: 5 })
// );

// const [first, second,, forth] = [10, 20, 30, 40];

// const [value, setValue] = useState(initialValue);

// ##############################################

const [first, ...restOfItems] = [10, 20, 30, 40];

// console.log(first);
// console.log(restOfItems);

const data = {
	temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const {temp1, temp2, ...person} = data;

const newArray = [...restOfItems];

const newObject = {
  ...person
}


//##############################################
backtick character -> Template strings
`esto es un string ${Math.random()}`

//################################################
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");
o3.greet = () => console.log('I am special!');

o1.greet();
o2.greet();
o3.greet();

//###################################################

// const fetchData = () => {
//   fetch('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     });
//   });
// };

const fetchData = async () => {
  const resp = await fetch('https://api.github.com');
  const data = await resp.json();
  console.log(data);
};

fetchData();


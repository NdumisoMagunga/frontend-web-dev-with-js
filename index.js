console.log('hello world');

const myArray = [1, 2, 3, 4, 5];

const sum = myArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0
);
console.log('Sum of array elements:', sum);

// assignment operator

let x = 10; // This is an assignment operator that adds 10 to the current value of x 
x = x + 5; // Now x is 15

let y = 20; // This is an assignment operator that adds 20 to the current value of y
y += 10; // Now y is 30 

y /= 2; // This is an assignment operator that divides the current value of y by 2
console.log('Value of x:', x);
console.log('Value of y:', y);

//comparison operator == === != !== < > >= <=
const result = 20 > 2;
console.log('Comparison result:', result);

const result2 = 20 === 20;
console.log('Comparison result 2:', result2);


console.log(
  'Comparison result 3:',
   20 !== 20,
   20 <= 20,
   20 >= 20,
   20 !== 20
  );

  const myObj = {
    property1: 'some value',
    property2: 42,
  };
  console.log('Object properties:', myObj.property1, myObj.property2);

  //ternary operator
  const age = 10;
  const canVote = age >= 18 ? 'Yes' : 'No';
  console.log('Can vote:', canVote);

  //equivalent to if else statement
  if (age >= 18) {
    console.log('Yes');
  } else {
    console.log('No');
  }

  //logical operator
  const isAdult = age >= 18;
  const hasPermission = true;
  const canEnter = isAdult && hasPermission;
  console.log('Can enter:', canEnter);

  // function declaration
  const resultw = (() => {
    return 20;
  })();
  console.log('Function result:', resultw);


  //chalenges 1
  let numberVariable = 0;

  numberVariable++;
  numberVariable++;
  numberVariable++;
  console.log('Number variable:', numberVariable);

//challenge 2
const firstNumber = 20;
const secondNumber = '20';
const resulr = firstNumber === secondNumber; // false because === does not do type coercion
console.log('Comparison result:', resulr);

//challenge 3 
// const expression1 = 100 % 50;
//const expression2 = 100 / 2;
// const expression3 = expression1 < expression2; //
// const expression4 = expression3 && 300 + 5 === 305;
// expression5 = !expression4; // 

const expresion5 = !(((100 % 50 ) < (100 / 2)) && ((300 + 5) === 305));
console.log('Challenge 3 result:', expresion5);

// challange 4 

const myObj1 = {
  prop1 : 'first value',
  prop2 : 20
};

const myArray1 = [40, 50, 2];
const result4 = myObj1.prop2 === (myArray1[0] / myArray1[2]);
console.log('Challenge 4 result:', result4);

//conditionals

if ('hello world' === "hello ndu") {
  console .log('the strings are the same');
}else {
  console.log('the strings are not the same');
}

if (1) {}else{};

const colors = [`red`, `green`, `blue`, `yellow`, `orange`];

// get a random number between 0 and 4 and stores in a variable
const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

//conditions
// if (randomColor === 'red') {
//   console.log('The color is red');
// }else if (randomColor === 'green') {
//   console.log('The color is green');
// }else if (randomColor === 'blue') {
//   console.log('The color is blue');
// }else if (randomColor === 'yellow') {
//   console.log('The color is yellow');
// }else if (randomColor === 'orange') {
//   console.log('The color is orange');
// }else {
//   console.log('The color is not in the list');
// }

//switch statement
switch(randomColor) {
  case 'red': 
  console.log('the color is red');
  break;
  case 'green':
  console.log('the color is green');
  break;
  case 'blue':
  console.log('the color is blue');
  break;
  case 'yellow':
  console.log('the color is yellow');
  break;
  case 'orange':
  console.log('the color is orange');
  break;
  default:
  console.log('the color is not in the list');
  break;
}
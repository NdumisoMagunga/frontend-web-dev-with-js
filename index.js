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
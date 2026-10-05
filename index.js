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
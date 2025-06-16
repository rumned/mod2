// FUNCTIONS AND SCOPES

/*

    How to define functions:

    function functionName(){
        code to execute
    }

    How to run/execute a function:
    functionName()

    parameters vs arguments (definition brackets: parameters, execution brackets: arguments)

    let vs var
 */
let i = 1;
while (i <= 15) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}
function sayHello(firstName, age) {
  console.log("Hello" + firstName + "my age is " + age);
}

sayHello("John", 42);

//FUNCTION EXPRESSIONS

const multiply = function (a, b) {
  return a * b;
};

let result3 = multiply(4, 5);
console.log(result3);

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isEven = (num) => num % 2 === 0;

console.log(isEven(2));
console.log(isEven(17));
console.log(isEven(22));

const isAdult = (age) => age >= 18;

console.log(isAdult(17));

// function toCelcius(fahrenheit) {
//   return (fahrenheit - 32) * (5 / 9);
// }

const toCelcius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
console.log(toCelcius(212));

//ARROW FUNCTIONS (syntactic sugar)
/*
    function substract(a,b){
        return a-b;
    }
*/
// you don't need RETURN keyword if you only have 1 line of code
const substract = (a, b) => a - b;

const minus = (a, b) => {
  return a - b;
};

console.log(substract(2, 1));
console.log(minus(2, 1));

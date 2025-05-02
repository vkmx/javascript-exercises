const add = function( num1, num2 ) {
  return num1 + num2;
};

const subtract = function( num1, num2 ) {
  return num1 - num2;
};

const sum = function( nums ) {

  return nums.reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0 );
};

const multiply = function( nums ) {
  return nums.reduce( (acc, curItem ) => acc * curItem, 1 );
};

const power = function( num, power ) {
  return num ** power;
};

const factorial = function( num ) {
  let fact = 1;

  for( let i = 1; i <= num; i++ ){
    fact = fact * i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

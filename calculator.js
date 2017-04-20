/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyer(num1, num2) {
  return Number(num1) * Number(num2);
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function adder(num1, num2) {
  return Number(num1) + Number(num2);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function suber(num1, num2) {
  return Number(num1) - Number(num2);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function diver(num1, num2) {
  return Number(num1) / Number(num2);
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("sub");
var divBtn = document.getElementById("divi");
var multiBtn = document.getElementById("multi");
var output = document.getElementById("output");

addBtn.addEventListener("click", function() {
  output.value = adder(num1.value, num2.value);
});
subBtn.addEventListener("click", function() {
  output.value = suber(num1.value, num2.value);
});
divBtn.addEventListener("click", function() {
  output.value = diver(num1.value, num2.value);
});
multiBtn.addEventListener("click", function() {
  output.value = multiplyer(num1.value, num2.value);
});


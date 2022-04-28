//Scope of the function

var num1 = 20,
    num2 = 3,
    name = 'Chamakh';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}

console.log(getScore()); // Returns "Chamakh scored 5"

// Recursion 
function loop(x) {
    if (x >= 10) 
      return;
   
    loop(x + 1); 
  }
console.log(loop(0));

// Nested functions
function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3);
  console.log(fn_inside) 
                          
  result = fn_inside(5); 
  console.log(result)
  
  result1 = outside(3)(5); 
  console.log(result1)
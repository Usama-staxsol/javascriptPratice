let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
myHeading.textContent = 'Hello world!';
console.log(myHeading)
function myfunc(num1, num2){
    result = num1 * num2;
    return result;
}
console.log(myfunc(5,4));
console.log(myfunc(7,2));
console.log(myfunc(0.5, 0.4));

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'My name is , ' + storedName;
  }
myButton.onclick = function() {
    setUserName();
  }

const fruits = ['apples', 'bananas', 'cherries'];
  for (const fruit of fruits) {
    console.log(fruit);
  }
// javascript object

const Person = {
    firstname:"üsama", 
    lastname:"muzaffar",
    age:23
};
console.log(Person["firstname"])

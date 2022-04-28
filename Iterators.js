console.log("This is iterators");

function fruitsIterator(values) {
let nextindex = 0;
// we will return an object
return {
   next: function(){
       if (nextindex < length.values)
       {
         return { // we will return this object 
           value : values[nextindex++],
           done : false
         }
       }
       else{
           return {
               done: true
           }
       }
   }
}

}

const myArr = ['Apple', 'Orange', 'Grapes'];
console.log(myArr);

// using the iterator

const fruits = fruitsIterator(myArr);
console.log(fruits.next().value)
console.log(fruits.next())

// Maps in javascript : We ca use any type of key or value

const myMap = new Map();

const key1 = 'mystr', key2 = function(){} ,key3={};

myMap.set(key1,'This is string');
myMap.set(key2,'This is blank function');
myMap.set(key3,'This is blank object');

console.log(myMap)

//Getting values from map
let value1 = myMap.get(key1);
console.log(value1);
console.log(myMap.size)

//Iterate Map
for(let [key,value] of myMap){
    console.log(key,value);
}

//Getting only keys of myMap
for(let key of myMap.keys()){
    console.log('key is ',key)
}

//Getting only values of myMap
for(let value of myMap.values()){
    console.log('values is ',value)
}

//Getting values and keys using for each loop
myMap.forEach((values,keys) => {
    console.log('value is ',values);
    console.log('key is',keys);
});

// Converting map into array
myArrmap = Array.from(myMap);
console.log(myArrmap)



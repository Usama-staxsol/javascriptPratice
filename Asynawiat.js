console.log("This is  async await");

async function func1(){
    const response = await fetch('usama.txt');
    console.log('Before response');
    const user = await response.text();
    console.log('user resolved');
    return user;

}
a = func1()
console.log(a)
a.then(data => console.log(data))


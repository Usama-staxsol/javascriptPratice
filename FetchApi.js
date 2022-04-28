console.log("This is fetch Api")

let myBtn = document.getElementById("myBtn");
//Div with id content

let content = document.getElementById("content")

function getData(){
    url = "usama.txt"
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
      console.log(data)
    })
}

console.log("Before runnig getdata")
getData()
console.log("After running getdata")
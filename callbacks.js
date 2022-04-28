console.log("This is callbacks")


//Pretend that response comming from server
const student = [
    {name: "usama", subject:"javaScript"},
    {name: "ahmad", subject:"ML"},

]

function enroolStudent(student){
    setTimeout(function () {
        students.push(student)
    },3000

    );
}

function getStudents(){
    let str = ""
    setTimeout(function(student){
        str+= `<li> ${student.name} <li>`
    });
}
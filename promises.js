//Promise
//- Resolve
//- Reject
//- Pending

function func1(){

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true
            if(!error){
            console.log("Function: your promise is resolved");
            resolve();
            }
            else{
                console.log("Function: your promise is rejected");
                reject(); 
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Thnaks for resloving")
}).catch(function(){
    console.log("very bad")
})
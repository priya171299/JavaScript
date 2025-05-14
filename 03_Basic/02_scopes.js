var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);//INNR: 10
    
}
// console.log(a);//300
// console.log(b);//error 
// console.log(c);//30

function one() {
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);        
    }
    // console.log(website);
    two()
}

//  one()//hitesh

 if(true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);  //hiteshyoutube      
    }
    // console.log(website);
    
 }

//  console.log(username);
 
// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5))//6

function addone(num){
    return num + 1
}



// addTwo(5)//Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));//7

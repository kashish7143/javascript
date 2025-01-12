//<,>,!=,<=,>=,==,===
//if
//syntax
//if (condition){

//}

const isuserlogin=true;

const temperature=21
if(temperature<40){
 //   console.log("less than 40")

}else{
//console.log("temperature more than 40")
}
//console.log("executed")


// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power:${power}`)
// }
// console.log(`user power:${power}`)         //block scope


const balance=1000
//if(balance>500) console.log("test"),console.log("test2")

// if(balance<500){
//     console.log("less than 500")

// }else if(balance<750){
//     console.log("less than")
// }else if(balance<900){
//     console.log("less than")
// }else{
//     console.log("more than")
// }

const userLoggedIn=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if(userLoggedIn && debitcard)
{
    console.log("allowed to purchase courses")
}
if(loggedinfromgoogle || loggedinfromemail){
    console.log("user loggedin")
}


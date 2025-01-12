// //primitive
// // string,number,boolean,null,undefined,symbol,bigInt



// //reference (non primitive)
 //array,objects,functions
const heroes=["spiderman","avengers","doraemon"];  //array
let myobj={
    name:"kashish",      //object
    age:19,
}
const myfunction=function(){
    console.log("hello world");    //functions
}




console.log(typeof myfunction)



//**************************************************************************************** 

//stack-(primitive),heap-(non primitive)

let myutube="alex.com"

let anothername=myutube;
anothername="chaiaurcode"

//console.log(anothername);
//console.log(myutube);

let user1={
    email:"user@google.com",
    upi:"user@bl",
}

let user2=user1;

user2.email="alex@google.com"
console.log(user1.email);
console.log(user2.email);


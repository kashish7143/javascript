function name(){
      console.log("h")
      console.log("e")                   //function definition
      console.log("l")
      console.log("l")
      console.log("o")
}
//name()

//function sum(num1,num2){          
  //  console.log(num1+num2)
//}
function sum(num1,num2){           //parameters->inputs at time of function definition
    return(num1+num2)
    //console.log("alex")       //after return no statement will execute
}
const result=sum(2,3)         //arguements->values pass during call of a function
//console.log("result:",result)

function loginusermsg(username){
    if(username===undefined){      // or   if(!username)
      //  console.log("pls enter a username")
        return
    }
    return`${username} just logged in`
}

//console.log(loginusermsg("alex"))
//console.log(loginusermsg())



function calculateCartPrice(...num1){        //...  ->rest operator returns array of values
    return num1

}
//console.log(calculateCartPrice(200,300,400))



const user={
    username:"alex",
    price:1000,
}
function handleObject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)


const arr=[100,200,300,400]                      //array
function return_second_val(getarray){              
    return getarray[1]
}
console.log(return_second_val(arr))

const user={
    username:"alex",
    price:999,
   welcomemsg:function(){
   // console.log(`${this.username}, welcome to website`);//this is used to refer to current context
// console.log(this)      //user values will be printed
}

}
//user.welcomemsg()
 //user.username="hello"
//user.welcomemsg()
//console.log(this)       //return {} empty object

function hi(){                                
    let username="alex"
   // console.log(this.username)     //this cannot be used inside function ->undefined
}
//hi()

const chai= () =>{
  let username="alex" 
  //console.log(this)           
}
//chai()

//arrow function syntax:  () => {}
//const addtwo=(num1,num2) => {           
  // return num1+num2             //explicit return
//}
//console.log(addtwo(3,4))

//const addtwo=(num1,num2) =>  num1+num2      //implicit return

//const addtwo=(num1,num2) =>  (num1+num2)

const addtwo=(num1,num2) => ({username:"alex"})

//console.log(addtwo(3,4))


const a= {
  name:"alex",
  role:"js developer",
  greetings:function(){
   // console.log(this)
    setTimeout (() => {
    //  console.log(`the name is ${this.name} and role is ${this.role}`)
    },2000)
  }
  }
  a.greetings()

  //********************************/
  const obj={
    name:"js",
    greet:()=>{
      console.log(this.name)      //undefined
    }
  
  }
  obj.greet()




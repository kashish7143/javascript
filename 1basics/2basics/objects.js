// singleton
//object.create


//object literals

const mySym=Symbol("key1")  //symbols declaration
const mySym2=Symbol("key1")

 const user={
     name:"alex",
    "full name":"alex abcd",
     [mySym]:"key1",            //syntax[ ]:" ";
     [mySym2]:"key2",
      mySym:"key1",
      email:"alex@google.com",
      location:"chd",
      IsLoggedIn:"false",
      LastLogIn:["monday","tuesday"],
       age:18,
     
 }
//  console.log(user.name)
// console.log(user["age"])
//  console.log(user[mySym])
//  console.log( user[mySym2])
//  console.log(user.mySym)
//  console.log(typeof user[mySym])
//  console.log(Object.keys(user))

// user.age=19
// Object.freeze(user)       //for freezing object
// user.age=20
// console.log(user)

//for function
user.greetings=function(){
    console.log("hello user");
}
console.log(user.greetings);
user.greetingstwo=function(){
    console.log(`hello user,${this.name}`)  //we can fetch user values by using "this"
}
console.log(user.greetingstwo());

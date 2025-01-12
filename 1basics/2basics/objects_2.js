//const tinderuser=new Object()   //singleton object

const tinderuser={}
  tinderuser.id="123a",
  tinderuser.name="alex"
  tinderuser.isLoggedIn="true"
//console.log(tinderuser)


const user={
    email:"alex@gmail.com",
    fullname:{                             //nesting of objects
        usersname:{
            firstname:"alexa",
            lastname:"hello",
        }
    }
}
//console.log(user.fullname.usersname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)          //Object.assign(target,source)
const obj3={...obj1,...obj2}                           //spread method
//console.log(obj3);

// const users1={
//     {
//     id:1
//     email:"hi@gmail.com"
// },
// {
//     id:2
// },
// }

//console.log(users1[1].email)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser));     //returns array of keys
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLoggedIn"));



//object destructure

const course={
    coursename:"js",
    price:1000,
    coursementor:"alex",
}
//console.log(course.price)

const{coursename:name}=course
console.log(name);

//json API (javascript object notation)
// {
//     "name":"alex",
//     "coursename":"js",                //in object form
//    "price":"free",
// }

[
    {},
    {},                     //in array form
    {},
]

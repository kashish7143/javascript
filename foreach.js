const coding=["js","ruby","java","python","cpp"]

 
//  coding.forEach( function (i){
//    console.log(i)
//  })

// coding.forEach( (i) =>{
//     console.log(i)
// })

// function printMe(i){
//     console.log(i);
// }
// coding.forEach(printMe)

// coding.forEach( (i,arr) =>{
// console.log(i,arr)
// })

const mycode=[                          //array of objects
    {
        languageName:"javascript",
        languageFilename:"js"
    },
    {
        languageName:"python",
        languageFilename:"py",
    },
    {
        languageName:"c++",
        languageFilename:"cpp",
    },

]
mycode.forEach((item)=>{
    console.log(item.languageName)
})
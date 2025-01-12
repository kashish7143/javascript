// Immediately invoked function expressions(IIFE)

(function chai(){
    console.log("db connected")
})(); //must be terminate

( ()=>{
    console.log("db connected")
})()
//(definition of function)(function call)


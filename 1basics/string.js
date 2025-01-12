const name="kashish"
const repocount=50

//console.log(name+repocount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
 const game= new String('cricket')
 console.log(game[0]);
// console.log(game.__proto__);
// console.log(game.length);
// console.log(game.charAt('2'));
//console.log(game.indexof('t'));

const newString=game.substring(0,4)
console.log(newString);

const anotherString=game.slice(2,3);
console.log(anotherString);

const newStringOne="  hello ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://google.com/google%20hello"

console.log(url.replace('%20','-'));
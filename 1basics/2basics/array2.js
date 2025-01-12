//const marvel_heroes=["thor","ironman","spiderman"]
//const dc =["superman","flash","batman"]
//marvel_heroes.push(dc);
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])           //output: flash

//const allheroes=marvel_heroes.concat(dc)     //concat 
//console.log(allheroes)

// const new_heroes=[...marvel_heroes,...dc]    //spread method
// console.log(new_heroes)


// const otherarr=[1,2,3,4,[4,5,6,],7,[6,7,[4,5]]]
// const realarr=otherarr.flat(Infinity)
// console.log(realarr)

 console.log(Array.isArray("kashish"))   //false
 console.log(Array.from("kashish"))      //converts into array
 console.log(Array.from({name: "kashish"}))  //empty array

 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3))

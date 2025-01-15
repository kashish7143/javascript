//for of

// [{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr){

//console.log(num)
}

const greet="hello world"
for(const i of greet){
    if(i==" "){
        continue;
    }
  //  console.log(i)
}

//maps -> unique key value pairs

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('fr',"France")
map.set('IN',"India")

//console.log(map)

for(const [key,value] of map){            //forof loop in map
   // console.log(key,':-',(value))
}

const obj={
    game1:'NFS',
    game2:'pubg',
}
for(const [key,value] of obj){            //forof not applicable on objects 
     console.log(key,':-',value)
}




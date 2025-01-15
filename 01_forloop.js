// for

for(let i=0;i<10;i++) {
    const element = i;
    if(element==5){
     //   console.log("5 is best no")
    }
  //  console.log(element)

}
// console.log(element)


//for(let i=1;i<=10;i++){
  //  console.log(`outer loop ${i}`)
   for(j=1;j<=10;j++){
   // console.log(`inner loop ${j}`)
 //  console.log(i + "*"+ j +'='+ i*j)
   }
  
   let arr=["mango","apple","banana","cherry"];
  // console.log(arr.length)
   for(i=0; i<arr.length;i++){
  //  console.log(arr[i])
   }

   //******************* */ break and continue

    for(let i=1;i<=20;i++){
        // if(i==5){
        // //    console.log(`five number is best`)
        //     break;
        // }
        if(i==5){
            console.log(`five number is best`)
            continue;
        }
        console.log(`value of i is:${i}`)
    }
  

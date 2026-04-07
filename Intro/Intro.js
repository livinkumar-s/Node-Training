const addFunc= require("./add.js")
const fileSystem = require("fs")

const jp=require("jp-flames")

// console.log(1);

// // promise 3 min

// console.log(2);
// console.log(3);


// console.log(1);

// setTimeout(()=>{
//     console.log("TVK");
// },1000)

// console.log(2);
// console.log(3);
// console.log(4);


function one(innerFnc) {
    innerFnc()
}

// function inner(){
//     console.log(1);
// }

// one(()=>{console.log(1)})


// setTimeout(() => {
//     console.log(12)    
// }, 0);

// for(let i = 0; i<10000000000;i++){
//     continue
// }

// console.log(11);

// fileSystem.readFile("./add.js","utf-8",(res,err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(res);
// })
// addFunc(2,2)

let res= jp("Manoj","Mani")
console.log(res);

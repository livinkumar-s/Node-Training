// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log("From time out Func");
// },0)
// console.log(3);
// console.log(4);
// console.log(5);

// const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Doe" },
// ];

// const orders = [
//     {
//         userId: 1, orderIds: [1, 2]
//     },
//     {
//         userId: 2, orderIds: [3, 4]
//     }, {
//         userId: 3, orderIds: [5, 6, 7, 8]
//     }
// ];

// const orderDetails = [
//     { orderId: 1, details: { item: "Laptop", price: 1000 } },
//     { orderId: 2, details: { item: "Phone", price: 500 } },
//     { orderId: 3, details: { item: "Tablet", price: 300 } },
//     { orderId: 4, details: { item: "Headphones", price: 100 } },
//     { orderId: 5, details: { item: "Monitor", price: 200 } },
//     { orderId: 6, details: { item: "Keyboard", price: 50 } },
//     { orderId: 7, details: { item: "Mouse", price: 30 } },
//     { orderId: 8, details: { item: "Printer", price: 150 } },
// ];

// function getUser(name, callback) {
//     setTimeout(() => {
//         const res = users.filter((a, b) => {
//             return a.name == name
//         })[0]

//         if (res) callback(res, undefined)
//         else callback(undefined, "Something went wrong...!")
//     }, 2000)
// }


// function getOrder(userId, callback) {
//     setTimeout(() => {

//         const res = orders.filter((a, b) => {
//             return a.userId == userId
//         })[0].orderIds

//         if (res) callback(res, undefined)
//         else callback(undefined, "Something went wrong")
//     }, 2000)
// }

// function getOrderDetails(orederId) {
//     setTimeout(() => {
//         console.log(orderDetails.filter((a, b) => {
//             return a.orderId == orederId
//         })[0])
//     }, 2000)
// }

// getUser("John", (data, err) => {
//     if (err) {
//         console.error(err);

//     } else {
//         console.log("Got the User Details details");

//         getOrder(data.id, (data, err) => {
//             if (err) {
//                 console.error(err);

//             } else {
//                 console.log(data);

//             }
//         })

//     }
// })



// const { log } = require("console");
// const fs = require("fs")

// fs.readFile("./Notes.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);

//     }else{
//         console.log(data);

//     }
// })

// const p1=new Promise((resolve,reject)=>{
//     const err=false;
//     if(err) reject("Something went Wrong...!")
//         else resolve("Livin")
// })



// p1
// .then((data)=>{console.log(data+"kumar")}) //Promise.resolve(undefined)
// .then((data)=>{console.log(data)})
// .catch((err)=>{
//     console.log(err);
// })

// function getUser(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = users.filter((a, b) => {
//                 return a.name == userName
//             })[0]

//             if (res) resolve(res)
//             else reject("Something went wrong...!")
//         }, 2000)
//     })
// }

// function getOrders(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = orders.filter((a, b) => {
//                 return a.userId == userId
//             })[0].orderIds

//             if (res) resolve(res)
//             else reject("Something went wrong...!")
//         }, 2000)
//     })
// }

// function getOrderDetails(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const res = orderDetails.filter((a, b) => {
//                 return a.orderId == orderId
//             })[0]

//             if (res) resolve(res)
//             else reject("Something went wrong...!")
//         }, 2000)
//     })
// }

// getUser("John")
// .then((data) => getOrders(data.id))
// .then((data)=> getOrderDetails(data[0]))
// .then((data)=>{console.log(data)})
// .catch((err) => {
//     console.error(err)
// })

// async function getFirstOrderDetails(username) {
//     try {
//         const userDetails = await getUser(username)
//         const orders = await getOrders(userDetails.id)
//         const details = await getOrderDetails(orders[0])
//         console.log(details);
//     }
//     catch (err) {
//         console.log("We are in error part...!");
//         console.log(err);

//     }

// }

// getFirstOrderDetails("Livin")



// fetch('https://jsonplaceholder.typicode.com/todos/2')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function fetchDummyAPI(id) {
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/'+id)
    const data= await res.json()
    console.log(data);
    
}

fetchDummyAPI(3)
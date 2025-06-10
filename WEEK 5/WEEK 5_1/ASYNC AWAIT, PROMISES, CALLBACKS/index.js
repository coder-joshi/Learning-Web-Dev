// console.log("One")
// console.log("Two")

// setTimeout(()=>{
//     console.log("Hello World")
// },4000)

// console.log("Three")
// console.log("Four")

// for(let i =1;i<=5;i++){
//     let str = ""
//     for(let j=1;j<=5;j++){
//         str+=j
//     }
//     console.log(i,str)
// }

// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },2000);
// }

// getData(1)
// getData(2)


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }


// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     });
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     // resolve("Success")
//     reject("Some error occurred")
// })


// Initially Promises remain pending, until unless we don't specify of them being fulfilled or rejected

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//             // reject("error")
//         if(getNextData){
//             getNextData();
//         }
//         },5000)
//     })
// }


// function AsyncFunc1() {
//     // Process of creating and returning a promise FYI setTimeout() not required
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data1");
//         resolve("Success");
//         },4000)
//     });

// }

// function AsyncFunc2() {
//     // Process of creating and returning a promise FYI setTimeout() not required
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data2");
//         resolve("Success");
//         },4000)
//     });
// }



// console.log("Fetching Data1...")


// // PROMISE CHAINING

// AsyncFunc1().then((res)=>{

//     console.log("Fetching Data2...")
//     AsyncFunc2().then((res)=>{
//     })
// })

// If we write promise; in console before 5s of code running it will show a promise that is pending and nothing else will be printed in console
// but after 5s I am a promise and Promise fulfilled can be seen and now when we write promise; it shows fulfilled with success as message

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("Success");
        }, 3000)
    })
}

getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    console.log(res);
})
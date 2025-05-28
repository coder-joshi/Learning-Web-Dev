// function greet(user){

//     if(user.gender == "Male"){
//         console.log("Hello Mr. "+user.name+" your age is "+user.age)
//     }else if(user.gender == "Female"){
//         console.log("Hello Mrs. "+user.name+" your age is "+user.age)
//     }else{
//         console.log("Nikal GAY BKL")
//     }

        

// }

// user_male = {
//     name : "Atharv",
//     age : 18,
//     gender : "Male"
// }

// user_female = {
//     name : "Prachi",
//     age : 21,
//     gender : "Female"
// }

// greet(user_male)

function check(arr){
    arrLength = arr.length
    for(let i = 0;i<arrLength;i++){
        if(arr[i].age>18 && arr[i].gender=="Male"){
            console.log(arr[i])}
    }  
}

arr = [
    user1 = {
        age : 19,
        gender : "Male"
    },
    user2 = {
        age : 24,
        gender : "Female"
    },
    user3 = {
        age : 12,
        gender : "Male"
    },
]
check(arr)
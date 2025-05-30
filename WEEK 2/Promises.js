// Learning about classes

// class Rectangle {
//     constructor(width,height,color){
//         this.width = width
//         this.height = height
//         this.color = color
//     }
//     area(){
//         const area = this.width * this.height
//         return area
//     }
// }

// const rect = new Rectangle(2,3)
// const area = rect.area()
// console.log(area)

// class Rectangle{
//     constructor(length,width,colour){
//         this.length = length
//         this.width = width
//         this.colour = colour
//     }
//     area(){
//         const area = this.length * this.width
//         return area
//     }
//     paint(){
//         console.log(`Painting with colour ${this.colour}`)
//     }
// }
 
// const rect = new Rectangle(2,3,"blue")
// const area = rect.area()
// console.log(area)
// rect.paint()


// SOME NEW IN BUILT CLASSES 

// DATE CLASS

// const date = new Date()
// const d = new Date()
// console.log(date.getFullYear())
// console.log(d.getFullYear())
// Both the above console.log() work same   

// MAP CLASS - You can use this class in place of key-value pair objects

// const map = new Map()
// map.set("Name","Atharv")
// map.set("Age",17)

// console.log(`Your name is ${map.get("Name")} and your age is ${map.get("Age")}`)



function firstName(){
    console.log("Atharv")
}

setTimeout(firstName,3000)

// Callback based approach
// Promise based approach
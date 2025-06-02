// let todo_arr = []

// function addTodo() {
//     todo_arr.push({
//         title :  document.querySelector("input").value
//     })
//     render()
// }


// function createTodoComponent(todo){
//     // Cooking stuff up
//     const div = document.createElement("div")
//     const title = document.createElement("h1")
//     const btn = document.createElement("button")

//     // Using the stuff (MAAL)
//     btn.innerHTML = "Delete"
//     title.innerHTML = todo.title
//     div.append(title)
//     div.append(btn)
//     return div
// }


// function render(){
//     document.querySelector("#todo_area").innerHTML  = ""
//     for (let i = 0; i < todo_arr.length; i++) {
//         const naam_ka_div = createTodoComponent(todo_arr[i])   //SHAREER BANAYA JAA RAHA HAI
//         document.querySelector("#todo_area").appendChild(naam_ka_div)
//     }
// }



// 2nd try


let todo_arr = []
function addTodo(){
    todo_arr.push({
        title : document.querySelector("input").value
    })
    render()
}

function createTodoComponent(todo) {
    const div = document.createElement("div")
    const mamla_paani = document.createElement("h1")
    const btn = document.createElement("button")
    mamla_paani.innerHTML = todo.title
    btn.innerHTML = "Delete"
    div.append(mamla_paani)
    div.append(btn)
    return div
}


function render(){
    document.querySelector("#todo_area").innerHTML = ""
    for (let i = 0; i < todo_arr.length; i++) {
        const baksa = createTodoComponent(todo_arr[i]);    // bakse main div store ho jayega
        document.querySelector("#todo_area").appendChild(baksa)
    }

}



































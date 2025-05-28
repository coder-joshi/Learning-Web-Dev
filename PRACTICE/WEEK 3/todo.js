ctr = 1
const InputEl = document.querySelector("input")

function deleteTodo(ctr){
    const deletionId = document.getElementById(ctr)
    document.querySelector("body").removeChild(deletionId)
}

function addTodo(){
    const value = InputEl.value
    console.log(value)


    const divEl = document.createElement("div")
    divEl.setAttribute("id",ctr)

    divEl.innerHTML = `<div>${value} <button onclick=deleteTodo(${ctr})>Delete</button></div>`
    document.querySelector("body").appendChild(divEl)
    ctr+=1
}
ctr = 1

function deleteTodo(ctr){
    const El = document.getElementById(ctr)
    El.parentNode.removeChild(El)
    // console.log("id is"+ctr)
}




function addTodo(){
    const txt = document.getElementById("input_txt")
    const value = txt.value
    const divEl = document.createElement("div")

    divEl.setAttribute("id",ctr)

    divEl.innerHTML = `<div>${value}</div><button onclick="deleteTodo(${ctr})">Delete</button>`
    document.querySelector("body").appendChild(divEl)
    ctr+=1
}

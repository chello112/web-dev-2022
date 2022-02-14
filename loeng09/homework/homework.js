
 
function textOutput(innerText) {
    let outputElement = document.getElementById("output")
    outputElement.innerHTML += "<div>" +  innerText + "</div>"
}

const goals = [];

function addGoal() {
    let innerText = document.getElementById("insert").value
    goals.push(document.getElementById("insert").value)
    textOutput(innerText)
    console.log(goals)
    document.getElementById("insert").value = ""
}

function showList() {
    for(let index = 0; index < goals.length; index++)
    document.getElementById("show").innerHTML += "<li>" + goals[index] + "</li>"
    }



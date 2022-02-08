/* let kasutajaNimi = ''
while (kasutajaNimi == '') {
    kasutajaNimi = prompt("Sisesta nimi")
} 

let tervitus = "Tere <strong>" + kasutajaNimi + "</strong>"
let tervitusElement = document.getElementById("tervitus")


if(kasutajaNimi == "Nipitiri") {
    tervitus = 'Tere sõber!'
}


tervitus = tervitus + "<h2>Tähed sinu nimes:</h2>"


for (let index = 0; index < kasutajaNimi.length; index++) {
    tervitus += "<div>Täht nr. " + (index + 1) + ": " + kasutajaNimi[index] + "</div>"
}



tervitusElement.innerHTML = tervitus
console.log(tervitus) */

let user = ''
while (user == '') {
    user = prompt("Palun sisesta oma nimi:")
}

let shortName ='<h2>' + user + ', sul on vabseeee lühike nimi!  </h2>'
let longName =  '<h2>' + user + ', issand, kui pikk nimi sul on! </h2>'

if (user.length <= 6) {
   user = shortName +  '<img  id="bean" src="./assets/bean.jpg" alt=""></img>'
} else if (user.length > 6) {
   user = longName + '<img  id="fun" src="./assets/fun.jpg" alt=""></img>'
}

let terv = user
let tervElement = document.getElementById("terv")


tervElement.innerHTML = user
console.log(terv)



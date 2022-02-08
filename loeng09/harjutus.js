let varvid = ["roheline", "punane", "must", "sinine"]


function valjastaTekst(sisendTekst) {
    let väljundElement = document.getElementById("valjund")
    väljundElement.innerHTML += "<div>" + sisendTekst + "</div>"

    console.log(sisendTekst)
}


function varviArvamine() {
    let sisendTekst = document.getElementById("sisend").value
    if(varvid.includes(sisendTekst)) {
        valjastaTekst("Arvasid ära! Kõik minu lemmikvärvid on:")
   for(let index = 0; index < varvid.length; index++) {
       valjastaTekst([index + 1] + '. ' + varvid[index])
   }
    }else{
        valjastaTekst(sisendTekst + " ei ole see päris õige värv")
    }
}


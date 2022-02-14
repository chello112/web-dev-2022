let mercedesBenz = {
    type: "car",
    mark: "Mercedes-benz",
    model: "S-class",
    releaseDate: "2015",
    price: "30000",
    picture: "./assets/mercedes-benz.jpg"
}
let audi = {
    type: "car",
    mark: "Audi",
    model: "S6",
    releaseDate: "2018",
    price: "40000",
    picture: "./assets/audi-s6.jpg"
}
let bmw = {
    type: "car",
    mark: "BMW",
    model: "M5",
    releaseDate: "2020",
    price: "50000",
    picture: "assets/bmw-m5.jpg"
}

let cars = [mercedesBenz, audi, bmw]

function createCarHTML(car) {
    return `
    <div class="col-4 card">
    <img class="card-img-top" src="${car.picture}"
    <div class="card-body">
        <div class="card-title">${car.mark} : </div>
        <div class="card-text">
        <p>
        Model: ${car.model} 
        <br>
        Release date: ${car.releaseDate} 
        <br>
        Price: ${car.price} 
        </p>
    </div>
    </div>
`
}

function addCar() {
    let markText = document.getElementById("mark").value
    let modelText = document.getElementById("model").value
    let releaseDateText = document.getElementById("releaseDate").value
    let priceText = document.getElementById("price").value
    let displayImage = document.getElementById("image").value
    let car = {
        mark: markText,
        model: modelText,
        releaseDate: releaseDateText,
        price: priceText,
        image:  displayImage
    }
    cars.push(car)
    showCars()
}


function showCars() {
    let outputElement = document.getElementById("output")
    outputElement.innerHTML = ''
    let outputHTML = ''
    outputHTML += '<div class="row">'
    for(let i = 0; i < cars.length; i++) {
        outputHTML += createCarHTML(cars[i])
    }
    outputHTML += '</div>'
    outputElement.innerHTML = outputHTML
}

showCars()


let stars = document.getElementById("stars")
let pinkStar = document.getElementById("pinkstar")
let blueStar = document.getElementById("bluestar")
let logo = document.getElementById("logo")
let email = document.getElementById("email")
let textColor = document.querySelector("output[for=email-color]")

let starRotate = document.getElementById("star-rotate")
let pinkRotate = document.getElementById("pink-rotate")
let blueRotate = document.getElementById("blue-rotate")
let logoRotate = document.getElementById("logo-rotate")
let wordInput = document.getElementById("word-input")
let emailColor = document.getElementById("email-color")
let starsX = document.getElementById("stars-x")
let starsY = document.getElementById("stars-y")
let pinkStarX = document.getElementById("pinkstar-x")
let pinkStarY = document.getElementById("pinkstar-y")
let blueStarX = document.getElementById("bluestar-x")
let blueStarY = document.getElementById("bluestar-y")
let logoX = document.getElementById("logo-x")
let logoY = document.getElementById("logo-y")


function updateOutput(element, input) {
    element.textContent = input.value
}

function changeText(element, textInput) {
    element.textContent = textInput.value
}
 function changeColor(element, colorInput) {
    element.style.color = colorInput.value
 }

 function changePosition(element, xInput, yInput) {
    element.style.transform = `translate(${xInput.value}px, ${yInput.value}px)`
 }

 function changeRotation(element, logoRotate) {
    element.style.rotate = `${logoRotate.value}deg`
 }

  function changeBlueRotation(element, blueRotate) {
    element.style.rotate = `${blueRotate.value}deg`
 }
function changePinkRotation(element, pinkRotate) {
    element.style.rotate = `${pinkRotate.value}deg`
 }

 function changeStarRotation(element, starRotate) {
    element.style.rotate = `${starRotate.value}deg`
 }

//  function changeScale(element, scaleInput){
//     element.style.scale = scaleInput.value
//  } <-- maybe add scale to all elements

wordInput.addEventListener("input", function () {
    changeText(email, wordInput)
})

emailColor.addEventListener("input", function () {
    changeColor (email, emailColor);
    updateOutput (textColor, emailColor)
})

starsX.addEventListener("input", function (event) {
    changePosition(stars, starsX, starsY);
})

starsY.addEventListener("input", function (event) {
    changePosition(stars, starsX, starsY);
})

pinkStarX.addEventListener("input", function (event) {
    changePosition(pinkStar, pinkStarX, pinkStarY)
})

pinkStarY.addEventListener("input", function (event) {
    changePosition(pinkStar, pinkStarX, pinkStarY)
})

blueStarX.addEventListener("input", function (event) {
    changePosition(blueStar, blueStarX, blueStarY)
})

blueStarY.addEventListener("input", function (event) {
    changePosition(blueStar, blueStarX, blueStarY)
})

logoX.addEventListener("input", function (event) {
    changePosition(logo, logoX, logoY)
})

logoY.addEventListener("input", function (event) {
    changePosition(logo, logoX, logoY)
})

logoRotate.addEventListener("input", function (event){
    changeRotation(logo, logoRotate)
})

blueRotate.addEventListener("input", function (event) {
    changeBlueRotation(blueStar, blueRotate)
})
pinkRotate.addEventListener("input", function (event) {
    changePinkRotation(pinkStar, pinkRotate)
})

starRotate.addEventListener("input", function (event) {
    changeStarRotation(stars, starRotate)
})

changePosition(stars, starsX, starsY);
changePosition(pinkStar, pinkStarX, pinkStarY);
changePosition(blueStar, blueStarX, blueStarY);
changePosition(logo, logoX, logoY);
updateOutput(textColor, emailColor);
changeRotation(logo, logoRotate);
changeBlueRotation(blueStar, blueRotate)
changePinkRotation(pinkStar, pinkRotate)
changeStarRotation(stars, starRotate)
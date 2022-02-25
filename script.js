var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".randomBtn");
var h4 = document.querySelector("h4");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h4.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", function() {
	// random color code from : https://www.educative.io/edpresso/how-to-generate-a-random-color-in-javascript
	color1.value = "#" +  Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
	color2.value = "#" +  Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
	setGradient();
})
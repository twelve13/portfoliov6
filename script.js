let websitesButton = document.querySelector("#websites-button");
let dataVisButton = document.querySelector("#data-vis-button");
let articlesButton = document.querySelector("#articles-button");
let toolsButton = document.querySelector("#tools-button");
let illustrationsButton = document.querySelector("#illustrations-button");

let houseplant = document.querySelector("#houseplant");
let plant1 = document.querySelector("#plant1");
let plant2 = document.querySelector("#plant2");
let plant3 = document.querySelector("#plant3");
let flower1 = document.querySelector("#flower1");
let flower2 = document.querySelector("#flower2");
let flower3 = document.querySelector("#flower3");
let rake = document.querySelector("#rake");
let grass = document.querySelector("#tools-graphic-content");
let carrot1 = document.querySelector("#carrot1");
let carrot2 = document.querySelector("#carrot2");
let carrot3 = document.querySelector("#carrot3");

function activateWebsites(){
	houseplant.classList.add("activated");
}

function activatePlants(){
	plant1.classList.add("activated");
	plant2.classList.add("activated");
	plant3.classList.add("activated");
}

function activateFlowers(){
	flower1.classList.add("activated");
	flower2.classList.add("activated");
	flower3.classList.add("activated");
}

function activateTools(){
	rake.classList.add("activated");
	grass.classList.add("activated");
}

function activateIllustrations(){
	carrot1.classList.add("activated");
	carrot2.classList.add("activated");
	carrot3.classList.add("activated");
}

websitesButton.addEventListener("click", activateWebsites);
dataVisButton.addEventListener("click", activatePlants);
articlesButton.addEventListener("click", activateFlowers);
toolsButton.addEventListener("click", activateTools);
illustrationsButton.addEventListener("click", activateIllustrations);
let websitesButton = document.querySelector("#websites-button");
let dataVisButton = document.querySelector("#data-vis-button");
let articlesButton = document.querySelector("#articles-button");
let toolsButton = document.querySelector("#tools-button");
let illustrationsButton = document.querySelector("#illustrations-button");

let sectionGraphics = document.querySelectorAll(".section-graphic");

let websitesGraphic = document.querySelector("#websites-graphic");
let dataVisGraphic = document.querySelector("#data-vis-graphic");
let articlesGraphic = document.querySelector("#articles-graphic");
let toolsGraphic = document.querySelector("#tools-graphic");
let illustrationsGraphic = document.querySelector("#illustrations-graphic");



function activateWebsites(){
	websitesGraphic.classList.add("activated");
}

function activateDataVis(){
	dataVisGraphic.classList.add("activated");
}

function activateArticles(){
	articlesGraphic.classList.add("activated");
}

function activateTools(){
	toolsGraphic.classList.add("activated");
}

function activateIllustrations(){
	illustrationsGraphic.classList.add("activated");
}

websitesButton.addEventListener("click", activateWebsites);
dataVisButton.addEventListener("click", activateDataVis);
articlesButton.addEventListener("click", activateArticles);
toolsButton.addEventListener("click", activateTools);
illustrationsButton.addEventListener("click", activateIllustrations);
let websitesButton = document.querySelector("#websites-button");

let houseplant = document.querySelector("#houseplant");

function activateWebsites(){
	houseplant.classList.add("activated");
}

websitesButton.addEventListener("click", activateWebsites);
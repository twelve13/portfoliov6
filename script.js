let sectionGraphics = document.querySelectorAll(".section-graphic");

function debounce(func, wait = 20, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//adapted from Wes Bos video
function checkActivation(e) {
	sectionGraphics.forEach(section => {
		//scrollY will tell you how far scrolled with respect to top of the page.  Add inner height to get pixel level at bottom of page
		const windowBottom = (window.scrollY + window.innerHeight);
		const sectionBottom = section.offsetTop + 300;
		const showTheSection = windowBottom > section.offsetTop + 300;
		const isNotScrolledPast = window.scrollY < sectionBottom;
		if (showTheSection && isNotScrolledPast) {
			section.classList.add("activated");
		} else {
			section.classList.remove("activated");
		}
	});
}

window.addEventListener("scroll", debounce(checkActivation));
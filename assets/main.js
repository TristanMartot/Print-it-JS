function preload_image() {
	for (i=0; i < slides.length; ++i) {
		let img = new Image()
		img.src = "./assets/images/slideshow/" + slides[i].image
	}
}

function changeImgAndText(slideActive) {
	let img = document.querySelector("#banner img")
	let text = document.querySelector("#banner p")
	let infoSlides = slides[slideActive]
	const chemin = "./assets/images/slideshow/"
	
	img.src = chemin + infoSlides.image
	text.innerHTML = infoSlides.tagLine
}

function dots(slideActive){
	let dotPlace = 0

	const removeDots = document.querySelector(".dots");
	while (removeDots.firstChild) {
		removeDots.removeChild(removeDots.firstChild);
	}

	for (dotPlace; dotPlace < slides.length; dotPlace++) {
		if (dotPlace === slideActive) {
		let createDot = document.createElement("div");
		createDot.classList.add("dot")
		createDot.classList.add("dot_selected")
		let place = document.querySelector(".dots")
		place.appendChild(createDot);
		}
		else {
		let createDot = document.createElement("div");
		createDot.classList.add("dot")
		let place = document.querySelector(".dots")
		place.appendChild(createDot);
		}
	}
}

function defilementClic(slideActive, callback) {
    let arrowLeft = document.getElementById("arrow_left");
    arrowLeft.addEventListener("click", () => {
		if (slideActive === 0) {
			slideActive = slides.length -1
			callback(slideActive);
		}
		else {	
		slideActive--
        callback(slideActive);
		}
    });

    let arrowRight = document.getElementById("arrow_right");
    arrowRight.addEventListener("click", () => {
		if (slideActive === slides.length -1) {
			slideActive = 0
			callback(slideActive);
		}
		else {	
		slideActive++
        callback(slideActive);
		}
    });
}

function updateslideActive(resultCallback) {
	changeImgAndText(resultCallback);
	dots(resultCallback)
}

let slideActive = 0;
preload_image()
dots(slideActive)

defilementClic(slideActive, updateslideActive);


/*
function changeImgAndText(slideActive) {
    const img = document.querySelector("#banner img");
    const text = document.querySelector("#banner p");
    const slide = slides[slideActive];
    const chemin = "./assets/images/slideshow/";

    img.src = chemin + slide.image;
    text.innerHTML = slide.tagLine;
}

function updateDots(slideActive) {
    const dotContainer = document.querySelector(".dots");
    dotContainer.innerHTML = ""; // Efface tous les points précédents

    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === slideActive) {
            dot.classList.add("dot_selected");
        }
        dotContainer.appendChild(dot);
    });
}

let slideActive = 0;
changeImgAndText(slideActive);
updateDots(slideActive);

function changeSlide(offset) {
    slideActive += offset;
    if (slideActive < 0) {
        slideActive = slides.length - 1;
    } else if (slideActive >= slides.length) {
        slideActive = 0;
    }
    changeImgAndText(slideActive);
    updateDots(slideActive);
}

document.getElementById("arrow_left").addEventListener("click", () => {
    changeSlide(-1);
});

document.getElementById("arrow_right").addEventListener("click", () => {
    changeSlide(1);
});
*/
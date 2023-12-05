// Mobile Menu Animating
const header = document.querySelector(".header");
const burgerButton = document.querySelector(".burger");
burgerButton.addEventListener("click", () => {
	document.body.classList.toggle("scroll-lock");
	header.classList.toggle("active");
});

// init Swiper:

new Swiper(".card-slider", {
	// Optional parameters
	spaceBetween: 24,
	direction: "horizontal",
	loop: false,
	width: 384,
	navigation: {
		nextEl: ".slider-next",
		prevEl: ".slider-prev",
	},
	breakpoints: {
		// when window width is >= 640px
		840: {
			width: 384,
		},
		768: {
			width: 332,
		},
		640: {
			width: 282,
		},
		480: {
			width: 220,
		},
		0: {
			spaceBetween: 16,
			width: 208,
		},
	},
});

new Swiper(".features__card-list", {
	// Optional parameters
	spaceBetween: 24,
	direction: "horizontal",
	// loop: true,
	// width: 588,
	loopedSlides: 2,
	navigation: {
		nextEl: ".features-slider-next",
		prevEl: ".features-slider-prev",
	},
	breakpoints: {
		// when window width is >= 640px
		1000: {
			width: 588,
		},
		768: {
			width: 436,
		},
		480: {
			width: 332,
		},
		375: {
			width: 323,
			slidesPerview: 1,
		},
		0: {
			spaceBetween: 16,
		},
	},
});

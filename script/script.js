// Работаем с кнопкой  -  Посмотреть трейлер
const btnShow = document.querySelector('.film-trailer__btn');
const videoYoutube = document.querySelector('.video');
const video = document.querySelector('.video-youtube');

btnShow.addEventListener('click', function () {
	videoYoutube.style.display = 'block';
	video.src =
		'https://www.youtube.com/embed/o705uydkgew?enablejsapi=1&autoplay=1';
});

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		videoYoutube.style.display = 'none';
		video.src = '';
	}
});

document.addEventListener('click', function (e) {
	// e.preventDefault(); поставил и не работал checkbox
	if (e.target === videoYoutube) {
		videoYoutube.style.display = 'none';
		video.src = '';
	}
});
// END Работаем с кнопкой  -  Посмотреть трейлер

// Работаем с табами

// получаем все табы(переключатели)
const tabs = document.querySelectorAll('.cast__tabs-title');

const tabsContainer = document.querySelector('.cast__tabs');

// получаем коннент
const contents = document.querySelectorAll('.tabs-content');

tabsContainer.addEventListener('click', function (e) {
	const clickedButton = e.target.closest('.cast__tabs-title');
	if (!clickedButton) return;

	tabs.forEach((tab) => tab.classList.remove('cast__tabs-title--active'));
	clickedButton.classList.add('cast__tabs-title--active');

	contents.forEach((tab) => tab.classList.remove('tabs-content--active'));
	document
		.querySelector(`.tabs-content--${clickedButton.dataset.tab}`)
		.classList.add('tabs-content--active');
});
// END Работаем с табами

// Модальное окно
const sideMenu = document.getElementById('side-menu');

sideMenu.addEventListener('click', function () {
	if (sideMenu.checked) {
		document.body.style.position = 'fixed';
		document.body.style.top = `-${window.scrollY}px`;
	} else {
		document.body.style.position = '';
		document.body.style.top = '';
	}
	console.log(sideMenu.checked);
});

// END Модальное окно

// slider

const slides = document.querySelectorAll('.slide');
const slidesNumber = slides.length - 1;
let currentSlide = 0;

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const moveToSlide = function (slide) {
	slides.forEach(
		(s, index) =>
			(s.style.transform = `translateX(${(index - slide) * 100}%)`),
	);
};

moveToSlide(0);

const nextSlide = function () {
	if (currentSlide === slidesNumber) currentSlide = 0;
	else currentSlide++;
	moveToSlide(currentSlide);
	activateCurrentDot(currentSlide);
};
const prevSlide = function () {
	if (currentSlide === 0) currentSlide = slidesNumber;
	else currentSlide--;
	moveToSlide(currentSlide);
	activateCurrentDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//dots
const dotContainer = document.querySelector('.dots');

const createDots = function () {
	slides.forEach(function (_, index) {
		dotContainer.insertAdjacentHTML(
			'beforeend',
			`<button class="dots__dot" data-slide="${index}"></button>`,
		);
	});
};

const activateCurrentDot = function (slide) {
	document
		.querySelectorAll('.dots__dot')
		.forEach((dot) => dot.classList.remove('dots__dot--active'));
	document
		.querySelector(`.dots__dot[data-slide="${slide}"]`)
		.classList.add('dots__dot--active');
};

dotContainer.addEventListener('click', function (e) {
	if (e.target.classList.contains('dots__dot')) {
		const slide = e.target.dataset.slide;
		moveToSlide(slide);
		activateCurrentDot(slide);
	}
});

createDots();
activateCurrentDot(currentSlide);

setInterval(nextSlide, 3500);
// END slider

// TEST TEST TEST
// TEST TEST TEST РАБОТАЮЩИЙ
// TEST TEST TEST
// или можно менять слайды с помощью классов
// const prev = document.getElementById('btn-prev');
// const next = document.getElementById('btn-next');
// const sliders = document.querySelectorAll('._slide');
// const dots = document.querySelectorAll('.dot');

// const numSlide = sliders.length - 1;
// let current = 0;

// const activeSlide = function (numberSlide) {
// 	// slide
// 	sliders.forEach((slide) => slide.classList.remove('active'));
// 	sliders[numberSlide].classList.add('active');

// 	// dots
// 	dots.forEach((slide) => slide.classList.remove('active'));
// 	dots[numberSlide].classList.add('active');
// };

// activeSlide(0);

// const nextSlide = function () {
// 	if (current === numSlide) {
// 		current = 0;
// 	} else {
// 		current++;
// 	}
// 	activeSlide(current);
// };

// const prevSlide = function () {
// 	if (current === 0) {
// 		current = numSlide;
// 	} else {
// 		current--;
// 	}
// 	activeSlide(current);
// };

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

// dots.forEach((dot, idx) => {
// 	dot.addEventListener('click', function () {
// 		activeSlide(idx);
// 	});
// });

// TEST TEST TEST
// TEST TEST TEST SWIPER https://swiperjs.com/
// TEST TEST TEST
const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,
	slidesPerView: 4,
	spaceBetween: 25,
	// width: 260,
	breakpoints: {
		992: { slidesPerView: 4 },
		768: { slidesPerView: 2 },
		320: { slidesPerView: 1 },
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		// prevEl: '.swiper-button-prev' ,
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});

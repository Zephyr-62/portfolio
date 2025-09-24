const images = [
	"images/pic01.jpg",
	"images/pic02.jpg",
	"images/pic03.jpg",
	"images/pic04.jpg",
	"images/pic05.jpg",
	"images/pic06.jpg",
	"images/pic07.jpg",
	"images/pic08.jpg",
	"images/pic09.jpg",
	"images/pic10.jpg",
	"images/pic11.jpg",
	"images/pic12.jpg",
	"images/pic13.jpg",
	"images/pic14.jpg",
    "images/pic15.jpg"
];
let current = 0;

window.addEventListener('DOMContentLoaded', function () {
	const img = document.getElementById('slider-image');
	const prevBtn = document.getElementById('prev-btn');
	const nextBtn = document.getElementById('next-btn');

	function showImage(index, direction) {
		img.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;
		setTimeout(() => {
			img.src = images[index];
			img.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`;
			setTimeout(() => {
				img.style.transform = 'translateX(0)';
			}, 20);
		}, 500);
	}

	nextBtn.onclick = function () {
		current = (current + 1) % images.length;
		showImage(current, 'next');
	};
	prevBtn.onclick = function () {
		current = (current - 1 + images.length) % images.length;
		showImage(current, 'prev');
	};
});
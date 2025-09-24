// @ts-check

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

window.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.image-slider').forEach(function (slider, sliderIndex) {
		const img = slider.querySelector('.slider-image');
		const img2 = slider.querySelector('.slider-image2');
		const prevBtn = slider.querySelector('.prev-btn');
		const nextBtn = slider.querySelector('.next-btn');
		let currentImg = sliderIndex % images.length;

		// why is this code not working. Answer: because the image paths are incorrect
		// which ones are incorrect? All of them. Tell me the line numbers. Lines 4 to 18
		// those are correct, there is something in this function that is wrong
		// I think the problem is with the way the images are being loaded

		function showImage(index, direction) {
			img.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;
			img2.style.transform = `translateX(0)`;
			setTimeout(() => {
				img.src = images[index]; //new image to show
				let slideDir2 = '';

				if (direction === 'next') {
                    img2.src = images[(index - 1 + images.length) % images.length]; // old image to slide out
					img.style.transform = `translateX(-100%)`;
					slideDir2 = `translateX(-100%)`;
				} else {
					img2.src = images[(index + 1) % images.length];  // old image to slide out
					img.style.transform = `translateX(100%)`;
					slideDir2 = `translateX(100%)`;
				}

				setTimeout(() => {
					img.style.transform = 'translateX(0)';
					img2.style.transform = slideDir2;
				}, 20);
			}, 500);
		}

		nextBtn.onclick = function () {
			currentImg = (currentImg + 1) % images.length;
			showImage(currentImg, 'next');
		};
		prevBtn.onclick = function () {
			currentImg = (currentImg - 1 + images.length) % images.length;
			showImage(currentImg, 'prev');
		};
	});
});
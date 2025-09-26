// @ts-check
const slideshowSpeed = 1750; // in ms

const images = [
	"images/pic01.jpg",
	"images/pic02.jpg",
	"images/pic03.jpg",
	"images/pic04.jpg",
	"images/pic05.jpg",
];

window.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.image-display-container').forEach(function (slider, sliderIndex) {
		const img = slider.querySelector('.image-display1');
		const img2 = slider.querySelector('.image-display2');
		let currentImg = sliderIndex % images.length;
		let nSlidings = 0;
		let activeSlideshow = false;

		/**
		 * Shows the image at the given index with a fade transition.
		 * @param {number} index
		 */
		function showImage(index) {
			if(nSlidings%2 === 1){
				img2.src = images[index];
				img2.style.opacity = "1";
				img.style.opacity = "0";
			}else{
				img.src = images[index];
				img2.style.opacity = "0";
				img.style.opacity = "1";
			}
		}
		
		let timeoutId = -1;
		function slideshow() {
			if (activeSlideshow) {
				nSlidings++;
				currentImg = (currentImg + 1) % images.length;
				showImage(currentImg);
				timeoutId = setTimeout(slideshow, slideshowSpeed);
			}
		}

		slider.addEventListener('mouseenter', function () {
			activeSlideshow = true;
			slideshow();
		});

		slider.addEventListener('mouseleave', function () {
			activeSlideshow = false;
			currentImg = 0;
			nSlidings++;
			showImage(currentImg);
			if (timeoutId != -1) {
				clearTimeout(timeoutId);
				timeoutId = -1;
			}
		});

	});
});
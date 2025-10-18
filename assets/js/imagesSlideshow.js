// @ts-check
const slideshowSpeed = 1750; // in ms

document.addEventListener("DOMContentLoaded", function() {  
	fetch(projectsUrl)
		.then(res => res.json())
		.then(projects => {
		document.querySelectorAll('.image-display-container').forEach(function (imgContainer, imgIndex) {
			const img = imgContainer.querySelector('.image-display1');
			const img2 = imgContainer.querySelector('.image-display2');

			let project = projects[imgContainer.dataset.projectId];
			let images = project.images;
			
			let currentImg = imgIndex % images.length;
			let nSlidings = 0;
			let activeSlideshow = false;
			
			if(images.length == 0) return;
			setImage(img, 0);
			if(images.length == 1) return;
			setImage(img2, 1);

			/**
			 * Shows the image at the given index with a fade transition.
			 * @param {number} index
			 */
			function showImage(index) {
				if(nSlidings%2 === 1){
					setImage(img2, index);
					img2.style.opacity = "1";
					img.style.opacity = "0";
				} else {
					setImage(img, index);
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

			function setImage(imgTarget, index){
				let image = images[index];
				imgTarget.src = image.path;
				imgTarget.alt = image.alt;
			}

			imgContainer.addEventListener('mouseenter', function () {
				activeSlideshow = true;
				slideshow();
			});

			imgContainer.addEventListener('mouseleave', function () {
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
});
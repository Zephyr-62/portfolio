// @ts-check
const slideshowSpeed = 2200; //1750; // in ms
const transitionDuration = 500; // in ms

document.addEventListener("projectsReady", function() {
	// Use the existing global `projects` object (instead of fetching a non-existent URL)
	if (typeof projects === 'undefined') {
		console.error('projects not found');
		return;
	}

	let startDelay = 350;
	let startDelayAcc = 0;

	document.querySelectorAll('.image-display-container').forEach(function (imgContainer, imgIndex) {
		/** @type {HTMLElement} */
		const container = /** @type {HTMLElement} */ (imgContainer);

		// ensure we can access dataset and the project exists
		const projectId = container.dataset && container.dataset.projectId;
		//if (!projectId) return;
		const project = projects[projectId];
		if (!project || !Array.isArray(project.images)) return;

		const images = project.images;
		const img = container.querySelector('.image-display1');
		const img2 = container.querySelector('.image-display2');

		let currentImg = 0; // explicit start index per container
		let frontIsImg = true; // true when img2 is transparent, false when img2 is opaque
		let activeSlideshow = false;

		if (images.length === 0) return;

		// Initialize images and opacities to a consistent state
		frontIsImg = true;
		img.style.opacity = "1";
		img2.style.opacity = "0";
		img2.style.transition = `opacity ${transitionDuration}ms ease`;

		setImage(img, 0);
		if (images.length === 1) return;

		/**
		 * Shows the image at the given index with a fade transition.
		 * @param {number} index
		 */
		function showNextImage(index) {
			if (frontIsImg) {
				// FIX: How can i await for setImage to update the source before starting the fade-in
				// This is a bit hacky but it ensures the image is loaded before starting the transition
				setImage(img2, index);				
				img2.onload = () => {					
					img2.style.opacity = "1";
				}
			} else {
				setImage(img, index);
				img.onload = () => {
					img2.style.opacity = "0";
				}
			}
			frontIsImg = !frontIsImg;
		}
		
		let timeoutId = -1;
		function slideshow() {
			currentImg = (currentImg + 1) % images.length;
			showNextImage(currentImg);
			// return;
			timeoutId = setTimeout(slideshow, slideshowSpeed);			
		}

		/**
		 * Set the source and alt of an image element.
		 * @param {HTMLImageElement} imgTarget
		 * @param {number} index
		 */
		function setImage(imgTarget, index){
			const image = images[index];
			if (!image) return;
			imgTarget.src = image.thumbnail || image.path;
			imgTarget.alt = image.alt || '';
		}

		// Start the slideshow with a staggered delay to avoid all containers changing at the same time
		setTimeout(slideshow, slideshowSpeed + startDelayAcc);
		startDelayAcc += startDelay;
	});
});
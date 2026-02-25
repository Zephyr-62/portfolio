// @ts-check
const slideshowSpeed = 2200; //1750; // in ms
const transitionDuration = 500; // in ms

document.addEventListener("projectsReady", function() {
	// Use the existing global `projects` object (instead of fetching a non-existent URL)
	if (typeof projects === 'undefined') {
		console.error('projects not found');
		return;
	}

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
				setImage(img2, index);
				img2.style.opacity = "1";
			} else {
				setImage(img, index);
				img2.style.opacity = "0";
			}
			frontIsImg = !frontIsImg;
		}
		
		let timeoutId = -1;
		function slideshow() {
			if (activeSlideshow) {
				currentImg = (currentImg + 1) % images.length;
				showNextImage(currentImg);
				timeoutId = setTimeout(slideshow, slideshowSpeed);
			}
		}

		/**
		 * Set the source and alt of an image element.
		 * @param {HTMLImageElement} imgTarget
		 * @param {number} index
		 */
		function setImage(imgTarget, index){
			const image = images[index];
			if (!image) return;
			imgTarget.src = image.path;
			imgTarget.alt = image.alt || '';
		}

		container.addEventListener('mouseenter', function () {
			activeSlideshow = true;
			if (timeoutId !== -1) {
				clearTimeout(timeoutId);
				timeoutId = -1;
			}
			slideshow();
		});
		
		container.addEventListener('mouseleave', function () {
			if (timeoutId !== -1) {
				clearTimeout(timeoutId);
				timeoutId = -1;
			}
			activeSlideshow = false;

			// reset to a consistent initial state to avoid parity/skipping issues
			setImage(img, 0);
			currentImg = 0;
			frontIsImg = true;
			
			// Instantly set transparency to 0
			img2.style.transition = `opacity 0ms ease`;
			img2.style.opacity = "0";
			img2.style.transition = `opacity ${transitionDuration}ms ease`;
		});
	});
});
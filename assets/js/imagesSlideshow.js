// @ts-check
const slideshowSpeed = 1750; // in ms

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

		// Ensure both DOM nodes are HTMLImageElement instances
		// if (!(img instanceof HTMLImageElement) || !(img2 instanceof HTMLImageElement)) return;

		let currentImg = 0; // explicit start index per container
		let frontIsImg = true; // track which image element is currently front
		let activeSlideshow = false;

		if (images.length === 0) return;

		// Initialize images and opacities to a consistent state
		setImage(img, 0);
		if (images.length === 1) {
			img.style.opacity = "1";
			img2.style.opacity = "0";
			return;
		}
		setImage(img2, 1);
		img.style.opacity = "1";
		img2.style.opacity = "0";
		frontIsImg = true;

		/**
		 * Shows the image at the given index with a fade transition.
		 * @param {number} index
		 */
		function showImage(index) {
			if (frontIsImg) {
				setImage(img2, index);
				img2.style.opacity = "1";
				img.style.opacity = "0";
			} else {
				setImage(img, index);
				img.style.opacity = "1";
				img2.style.opacity = "0";
			}
			frontIsImg = !frontIsImg;
		}

		let timeoutId = -1;
		function slideshow() {
			if (activeSlideshow) {
				currentImg = (currentImg + 1) % images.length;
				showImage(currentImg);
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
			if (!activeSlideshow) {
				activeSlideshow = true;
				if (timeoutId !== -1) {
					clearTimeout(timeoutId);
					timeoutId = -1;
				}
				slideshow();
			}
		});

		container.addEventListener('mouseleave', function () {
			activeSlideshow = false;
			if (timeoutId !== -1) {
				clearTimeout(timeoutId);
				timeoutId = -1;
			}
			// reset to a consistent initial state to avoid parity/skipping issues
			currentImg = 0;
			setImage(img, 0);
			if (images.length > 1) setImage(img2, 1);
			img.style.opacity = "1";
			img2.style.opacity = "0";
			frontIsImg = true;
		});
	});
});
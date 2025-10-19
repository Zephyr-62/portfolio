


document.addEventListener("projectsReady", function(){

    document.querySelectorAll(".project-image").forEach(function (imgContainer) {
        const project = projects[imgContainer.dataset.projectId];
        const img = project.images[imgContainer.dataset.imageIdx];
        imgContainer.src = img.path;
        imgContainer.alt = img.alt;
        imgContainer.parentElement.href = img.path;
        imgContainer.parentElement.dataset.description = img.footnote;
    });

    document.querySelectorAll(".project-image-dev").forEach(function (imgContainer) {
        const project = projects[imgContainer.dataset.projectId];
        const img = project.imagesDev[imgContainer.dataset.imageIdx];
        imgContainer.src = img.path;
        imgContainer.alt = img.alt;
        imgContainer.parentElement.href = img.path;
        imgContainer.parentElement.dataset.description = img.footnote;
    });
    
	const coverViewer = GLightbox({
        selector: '.glightbox-cover',
		loop: true,
		closeButton: true,
        zoomable: true,
        descPosition: "bottom",
	});

    const galleryViewer1 = GLightbox({
        selector: '.glightbox1',
		loop: true,
		closeButton: true,
        zoomable: true,
        descPosition: "bottom",
	});

    const galleryViewer2 = GLightbox({
        selector: '.glightbox2',
		loop: true,
		closeButton: true,
        zoomable: true,
        descPosition: "bottom",
	});

});
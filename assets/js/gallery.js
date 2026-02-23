
document.addEventListener("projectsReady", function(){

    document.querySelectorAll(".project-image").forEach(function (imgContainer) {
        const project = projects[imgContainer.dataset.projectId];
        const img = project.images[imgContainer.dataset.imageIdx];

        setImageSrc(img, imgContainer);
    });
    
    document.querySelectorAll(".project-image-dev").forEach(function (imgContainer) {
        const project = projects[imgContainer.dataset.projectId];
        const img = project.devImages.find(img => img.id == imgContainer.dataset.imageId);
        if(!img) {
            for (const img of project.devImages) {
                console.error(`Target ${img.id}`)
            }
            
            console.error(`Dev image with id ${imgContainer.dataset.imageId} not found in project ${imgContainer.dataset.projectId}`);
            return;
        }

        setImageSrc(img, imgContainer);
    });

    function setImageSrc(img, imgContainer) {
        if (img.thumbnail){
            imgContainer.src = img.thumbnail;
            imgContainer.parentElement.classList.add("video"); 
        }
        else {
            imgContainer.src = img.path;
        }

        imgContainer.alt = img.alt;
        imgContainer.parentElement.href = img.path;
        imgContainer.parentElement.dataset.description = img.footnote;
    }

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
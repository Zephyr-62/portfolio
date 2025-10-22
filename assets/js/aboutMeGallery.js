
document.addEventListener("DOMContentLoaded", function(){
    
    document.querySelectorAll(".game-img").forEach(function (imgContainer) {
        imgContainer.parentElement.href = imgContainer.src;
        imgContainer.parentElement.dataset.description = imgContainer.alt;
    });

    const galleryViewer1 = GLightbox({
        selector: '.glightbox1',
		loop: true,
		closeButton: true,
        zoomable: true,
        descPosition: "bottom",
	});
});
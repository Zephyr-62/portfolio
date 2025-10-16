document.addEventListener("DOMContentLoaded", function() {  
	fetch(projectsUrl)
    .then(res => res.json())
    .then(projects => {
        document.querySelectorAll('.reel-project-container').forEach(function (projectContainer, imgIndex) {
            let project = projects[projectContainer.dataset.projectId];
			let images = project.images;
            const imgContainer = projectContainer.querySelector('img');
            imgContainer.src = images[0].path;
        });
    })
});
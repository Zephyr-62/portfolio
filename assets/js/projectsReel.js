document.addEventListener("DOMContentLoaded", function() {  
	fetch(projectsUrl)
    .then(res => res.json())
    .then(projects => {

        document.querySelectorAll(".reel").forEach(function (parentReel) {            
            const projectContainers = Array.from(parentReel.children);
            
            // Set their corresponding images and URIs
            projectContainers.forEach(function (projectContainer) {
                let project = projects[projectContainer.dataset.projectId];
                let images = project.images;
                const imgContainer = projectContainer.querySelector('img');
                imgContainer.src = images[0].path;
            });
            
            projectContainers.sort((a,b) =>{
                let projectA = projects[a.dataset.projectId];
                let projectB = projects[b.dataset.projectId];
                const diff = projectB.relevance - projectA.relevance;
                
                // If same relevance → random order (-0.5 to 0.5)
                if (diff === 0) return Math.random() - 0.5;
                return diff;
            });
            
            projectContainers.forEach(proj => parentReel.appendChild(proj));
        });
    })
});
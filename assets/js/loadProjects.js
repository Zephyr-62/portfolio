let projects = []
document.addEventListener("DOMContentLoaded", function() {  
	fetch(projectsUrl)
    .then(res => res.json())
    .then(projectsData => {
        projects = projectsData;
        document.dispatchEvent(new Event('projectsReady'));
    }); 
});
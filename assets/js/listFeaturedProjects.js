// @ts-check

document.addEventListener("DOMContentLoaded", function() {  
	fetch(projectsUrl)
    .then(res => res.json())
    .then(projects => {

        const featuredProjects = projects.filter(project => project.featured === true);
        const container = document.getElementById("featured-projects");

        
        featured.forEach((project, index) => {
            
            if (index > 0){
                container.appendChild(document.createElement("hr"));
            }

            const columnContainerDiv = document.createElement("div");
            columnContainerDiv.className = "column-container"
            const emptyColumn = document.createElement("article");
            emptyColumn.className = "column10";
            const article = document.createElement("article");
            article.className = "column80";
            // Left Column
            if (index % 2 == 1){   
                article.innerHTML = `{% include featuredProject.html project=project left=true %}`
            }
            // Right Column
            else{
                article.innerHTML = `{% include featuredProject.html project=project left=false %}`                
            }
            columnContainerDiv.appendChild(emptyColumn);
            columnContainerDiv.appendChild(article);
            container.appendChild(columnContainerDiv);
        });

    });
});
// @ts-check

function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  queryString.split("&").forEach(pair => {
    if (!pair) return;
    const [key, value] = pair.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value || "");
  });
  return params;
}

let queryParams = getQueryParams();
let projects = []
let featuredFilter = false;

document.addEventListener("DOMContentLoaded", function() {  
	fetch(projectsUrl)
    .then(res => res.json())
    .then(projectsData => {
        projects = projectsData;
        processProjects();
    });
    
    updateFilterButtons();
});


function updateFilterButtons(){
    const sortBtn = document.querySelector('.sort-btn');
    if(sortBtn != null){
        switch (queryParams.sort) {
            case "date":   
                sortBtn.innerHTML = "Sorted By Date ↓"
                break;        
            case "dateInv":   
                sortBtn.innerHTML = "Sorted By Date ↑"
                break;    
            default:
                sortBtn.innerHTML = "Sorted By Relevance"
                break;
        }
    }

    buttonUpdate('.game-btn', "Game");
    buttonUpdate('.software-btn', "Software");
    buttonUpdate('.research-btn', "Research");
}

function buttonUpdate(btnClass, categoryName){
    const gamesBtn = document.querySelector(btnClass);
    if(gamesBtn != null){
        if (queryParams.filter != null && queryParams.filter.split(";").includes(categoryName))
            gamesBtn.style.filter = "";        
        else gamesBtn.style.filter = "grayscale()";
    }
}


function toggleFilter(filterName){
    const url = new URL(window.location);
    const params = url.searchParams;

    let filtersStr = params.get("filter");
    if (filtersStr == null){
        params.append("filter", filterName);     
    } else {
        let filters = filtersStr.split(";");

        if(filters.includes(filterName))
            filters = filters.filter(x => ! (x === filterName));
        else{
            filters.push(filterName);
        }
        filtersStr = filters.join(";");
        if(filtersStr === "") params.delete("filter");    
        else params.set("filter", filtersStr);
    }


    // Update URL without reloading
    window.history.replaceState({}, "", `${url.pathname}?${params.toString()}`);

    queryParams = getQueryParams();
    processProjects();    
    updateFilterButtons();
}


function toggleSort(){
    const url = new URL(window.location);
    const params = url.searchParams;

    if (params.get("sort") === "date") {
        params.set("sort", "dateInv");
    }
    else if (params.get("sort") === "dateInv"){
        params.delete("sort");        
    } else {
        params.append("sort", "date");        
    }

    // Update URL without reloading
    window.history.replaceState({}, "", `${url.pathname}?${params.toString()}`);

    queryParams = getQueryParams();
    processProjects();    
    updateFilterButtons();
}

function processProjects(){
    const listParentContainer = document.querySelector('.projects-list');
    const projectContainers = Array.from(listParentContainer.children);

    let buttonContainer = null;
    if(listParentContainer.dataset.showAllButtonEnabled === "true")
        buttonContainer = projectContainers.pop();        
    
    projectContainers.sort((projectAContainer, projectBContainer) =>{
        let projectA = projects[projectAContainer.dataset.projectId];
        let projectB = projects[projectBContainer.dataset.projectId];
        
        // Sort by date
        if("sort" in queryParams){
            const projectAActive = !projectA.endDate;
            const projectBActive = !projectB.endDate;

            if (projectAActive && projectBActive) {
                // Both active → sort by startDate descending
                return new Date(projectB.startDate).getTime() - new Date(projectA.startDate).getTime();
            } else if (projectAActive) {
                // A active, B finished → A first
                return -1;
            } else if (projectBActive) {
                // B active, A finished → B first
                return 1;
            } else {
                // Both finished → sort by endDate descending
                return new Date(projectB.endDate).getTime() - new Date(projectA.endDate).getTime();
            }
        }
        // Sort by relevance        
        else{
            const diff = projectB.relevance - projectA.relevance;
            // If same relevance → random order (-0.5 to 0.5)
            if (diff === 0) return Math.random() - 0.5;
            return diff;
        }
    });

    // Reverse if flag is set
    if("sort" in queryParams && queryParams.sort == "dateInv") 
        projectContainers.reverse();

    // Reappend in order
    let projShownCount = 0;
    let categories = queryParams.filter?.split(";");

    projectContainers.forEach(projContainer => {
        listParentContainer.appendChild(projContainer)

        let project = projects[projContainer.dataset.projectId];
        let projectShown = true;

        // Filter by category
        if("filter" in queryParams){                
            if(!project.categoryTags.some(x => categories.includes(x)))
                projectShown = false;
        }
        // Filter by featured
        if(featuredFilter || "featured" in queryParams){
            projectShown = project.featured;
        }

        // Alternate left and right if shown
        if(projectShown){

            if(projShownCount %2 == 1){
                let projColumn = projContainer.querySelector('.project-column');
                let projContentColumns = Array.from(projColumn.children)
                projContentColumns.reverse();
                projContentColumns.forEach(content => projColumn.append(content));
            }
            projShownCount++;
            projContainer.style.display = "";
        }
        else{
            projContainer.style.display = "none";
        }
    });

    // Append button at the end if it exists
    if(buttonContainer != null)
        listParentContainer.append(buttonContainer);        

}
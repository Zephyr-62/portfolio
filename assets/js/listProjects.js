// @ts-check

// Which metadata a project shows depends on the active portfolio version
// (`game` by default, see _layouts/default.html). Every `_swe` field falls back
// to its game counterpart, so projects that were not given a software
// engineering presentation yet keep working.
const portfolioVersion = document.documentElement.getAttribute("data-version") || "game";
const isSoftwareVersion = portfolioVersion === "swe";

document.addEventListener("projectsReady", function() {
    processProjects();
    updateFilterButtons();
});

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
let featuredFilter = false;

// Filter dropdown of the active version (_includes/projectsFilterBar.html),
// rendered from the categories declared in _data/versions.yml.
function filterSelect(){
    return document.querySelector('.projFilter');
}

function defaultFilters(){
    const filterSelectElem = filterSelect();
    return filterSelectElem ? filterSelectElem.dataset.defaultFilter.split(";") : [];
}

// Categories requested by the URL, limited to the ones the active version
// knows. A `filter` that only exists in the other version (cross version link
// or bookmark) falls back to this version's default categories.
function activeFilters(){
    if(!("filter" in queryParams))
        return null;

    const known = Array.from(filterSelect().options)
        .map(option => option.value)
        .join(";")
        .split(";");

    const requested = queryParams.filter.split(";").filter(filter => known.includes(filter));

    return requested.length > 0 ? requested : defaultFilters();
}

function projectCategories(project){
    return (isSoftwareVersion && project.categoryTags_swe) ? project.categoryTags_swe : project.categoryTags;
}

function projectRelevance(project){
    return (isSoftwareVersion && project.relevance_swe != null) ? project.relevance_swe : project.relevance;
}

// A relevance of 0 keeps the project out of that version's portfolio.
function shownInVersion(project){
    return projectRelevance(project) > 0;
}

function updateFilterButtons(){
    const sortBtn = document.querySelector('.sort-btn');
    if(sortBtn != null){
        switch (queryParams.sort) {
            case "date":   
                sortBtn.innerHTML = "Date ↓"
                break;        
            case "dateInv":   
                sortBtn.innerHTML = "Date ↑"
                break;    
            default:
                sortBtn.innerHTML = "Relevance ↓"
                break;
        }
    }

    const filterSelectElem = filterSelect();
    if(filterSelectElem != null){
        // Make selected option in dropdown selected on projFilter element
        queryParams.filter = queryParams.filter || filterSelectElem.dataset.defaultFilter;
        filterSelectElem.value = queryParams.filter;
        // A `filter` coming from the other version is not one of the options
        if(filterSelectElem.value === "")
            filterSelectElem.value = filterSelectElem.dataset.defaultFilter;

        Array.from(filterSelectElem.options).forEach(option => {
            option.style.filter = option.value == queryParams.filter ? "" : "grayscale()";
        });
    }
}


function toggleFilter(filterName){
    const url = new URL(window.location);
    const params = url.searchParams;

    let filtersStr = params.get("filter");
    if(filtersStr == filterName)
        params.delete("filter");
    else
        params.set("filter", filterName);     

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
            const diff = projectRelevance(projectB) - projectRelevance(projectA);
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
    let categories = activeFilters();

    let disableImageAlternation = screen.orientation.type.includes('portrait');

    projectContainers.forEach(projContainer => {
        listParentContainer.appendChild(projContainer);

        let project = projects[projContainer.dataset.projectId];
        let projectShown = shownInVersion(project);

        // Filter by category
        if(projectShown && categories != null){                
            if(!projectCategories(project).some(x => categories.includes(x)))
                projectShown = false;
        }
        // Filter by featured
        if(projectShown && (featuredFilter || "featured" in queryParams)){
            projectShown = project.featured;
        }

        // Alternate left and right if shown
        function swapColumns(){
            let projColumn = projContainer.querySelector('.project-column');
            let projContentColumns = Array.from(projColumn.children);
            projContentColumns.reverse();
            projColumn.innerHTML = "";
            projContentColumns.forEach(content => projColumn.append(content));
        }

        // Must use ids, since every click of the button will alternate the order of the elements, so we can't rely on their position in the DOM
        if(projectShown){
            let imgColumn = projContainer.querySelector('#projListItemImg');
            let parentImgContainer = imgColumn.parentElement;

            if(projShownCount%2 == 0 || disableImageAlternation) {
                if (imgColumn != parentImgContainer.children[0])
                    swapColumns();
            }
            else {
                if (imgColumn == parentImgContainer.children[0])
                    swapColumns();
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

if (screen.orientation) {
    screen.orientation.addEventListener('change', (e) => {
        // e.target.type will be 'landscape-primary', 'portrait-secondary', etc.
        console.log(`Current orientation: ${e.target.type}`);
        processProjects();
    });
}

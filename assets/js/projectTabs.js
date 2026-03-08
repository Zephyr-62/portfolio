document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".projectTab");
    const sections = document.querySelectorAll("#overview, #levelDesign, #tool");


    function switchToSection(sectionId, updateHash = true) {
        // Remove selected style from all tabs
        tabs.forEach(t => t.classList.remove("projectTabSelected"));

        // Hide all sections
        sections.forEach(section => {
            if (section) section.style.display = "none";
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
            // Add selected style to clicked tab
            document.querySelector(`#${sectionId}Button`)?.classList.add("projectTabSelected");
            targetSection.style.display = "block";
            if(updateHash)
                history.pushState(null, null, `#${sectionId}`);
        }

    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const targetId = this.dataset.target;
            switchToSection(targetId);
        });
    });

    let hash = window.location.hash;
    switchToSection(hash ? hash.substring(1) : "overview", false);
    
});
document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".projectTab");
    const sections = document.querySelectorAll("#overview, #levelDesign, #tool");

    function hideAllSections() {
        sections.forEach(section => {
            if (section) section.style.display = "none";
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            // Remove selected style from all tabs
            tabs.forEach(t => t.classList.remove("projectTabSelected"));

            // Hide all sections
            hideAllSections();

            // Add selected style to clicked tab
            this.classList.add("projectTabSelected");

            // Show target section
            const targetId = this.dataset.target;
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    // Ensure only overview shows on load
    hideAllSections();
    document.getElementById("overview").style.display = "block";
});
/*
 * Section tabs of the project detail pages. Which tabs exist depends on the
 * active portfolio version (see _layouts/projectDetail.html and
 * _data/versions.yml), and the bar stays under the site navigation while the
 * page is scrolled, so the shown section can always be changed.
 */
document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".projectTab");
    const tabBar = document.querySelector(".projectTabs");
    const sections = document.querySelectorAll(".projectTabContent > [id]");


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
            document.querySelector(`.projectTab[data-target="${sectionId}"]`)?.classList.add("projectTabSelected");
            targetSection.style.display = "block";
            if(updateHash)
                history.pushState(null, null, `#${sectionId}`);
        }

    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            switchToSection(this.dataset.target);
        });
    });

    let hash = window.location.hash;
    switchToSection(hash ? hash.substring(1) : "overview", false);


    // Keep the bar right below the navigation chrome that is currently on
    // screen: the sticky nav bar on wide viewports, the fixed nav button on
    // narrow ones.
    if (tabBar) {
        function navigationChrome() {
            return ["nav", "navButton"]
                .map(id => document.getElementById(id))
                .filter(el => {
                    if (!el) return false;
                    const style = getComputedStyle(el);
                    return style.display !== "none" && (style.position === "sticky" || style.position === "fixed");
                });
        }

        function updateTabsPosition() {
            const offset = Math.round(navigationChrome()
                .reduce((height, el) => height + el.getBoundingClientRect().height, 0));

            document.documentElement.style.setProperty("--nav-height", `${offset}px`);

            // Only once the bar reached the navigation it needs to stand out
            // from the content scrolling behind it.
            tabBar.classList.toggle("stuck", offset > 0 && tabBar.getBoundingClientRect().top <= offset + 1);
        }

        updateTabsPosition();
        window.addEventListener("scroll", updateTabsPosition, { passive: true });
        window.addEventListener("resize", updateTabsPosition);
    }

});

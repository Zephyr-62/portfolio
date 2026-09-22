/*
 * Keeps the DOM in sync with the active portfolio version.
 *
 * The version (`<html data-version="game|swe">`) is resolved in
 * _layouts/default.html, from the page front matter, the `v` query parameter or
 * the last visited version.
 *
 * Pages render both versions of every version dependent piece of markup
 * (`.v-game` / `.v-swe`, see main.css). The CSS rule alone is enough for the
 * desktop layout, but the mobile nav panel is regenerated from the `#nav`
 * anchors by util.js' `navList()`, which rebuilds them as plain HTML and drops
 * their classes. Removing the unused version here, before main.js builds that
 * panel, keeps it out of the mobile navigation too.
 *
 * Has to be loaded before main.js.
 */
(function () {
	var version = document.documentElement.getAttribute("data-version");
	var unused = version === "swe" ? ".v-game" : ".v-swe";
	var nodes = document.querySelectorAll(unused);

	for (var i = 0; i < nodes.length; i++)
		nodes[i].remove();

	// Links to pages that are shared by both versions (the project detail
	// pages) carry the version along, so that opening, bookmarking or sharing
	// one of them always renders the portfolio the link was taken from.
	document.querySelectorAll("[data-v-param]").forEach(function (link) {
		var url = new URL(link.getAttribute("href"), window.location.href);
		url.searchParams.set("v", version);
		link.setAttribute("href", url.pathname + url.search + url.hash);
	});
})();

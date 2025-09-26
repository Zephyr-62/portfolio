---
layout: default
title: "My Portfolio"
---

<h1>Featured Projects</h1>

<div class="projects">
  {% for project in site.projects %}
    <div class="project">
      <a href="{{ project.url }}">
        <img src="{{ project.display_img }}" alt="{{ project.title }}">
        <h2>{{ project.title }}</h2>
        <p>{{ project.short_description }}</p>
      </a>
    </div>
  {% endfor %}
</div>
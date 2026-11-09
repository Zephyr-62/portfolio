---
layout: projectDetail
projId: levelPrototypeTool
title: "Mesh Editor and Generator in C++"
subtitle: "Personal Project"
startDate: "2026-09-16"
endDate: ""
halted: false
featured: false
relevance: 90
relevance_swe: 80
categoryTags:
    - Software
    - Tool
categoryTags_swe:
    - DevTools
    - AlgorithmsSystems
techTags: 
    - Custom Engine C++
    - OpenGL 
    - Procedural Mesh Generation
    - Interactive Tool
techTags_swe:
    - C++
    - OpenGL
    - Procedural Mesh Generation
    - Editor Tooling
summary: "WIP Custom editor tool designed to quickly prototype level blockouts. It will also include functionality to visualize/edit meshes, and also generate them procedurally."
shortDescription: "This is a WIP project that I'm currently using to learn C++. The idea is to create a lightweight tool to prototype level blockouts and export them as a glb scene. The UI mirrors closely to Unity's editor, following the same architecture of scene objects that hold components. More details to come in the future."
longDescription:
  - type: text
    content: "This page is a <i><b>Work In Progress</b></i>"
  - type: text
    content: "I started this project as a mean to learn C++ and implementing tools from scratch, with no graphical engine underneath to support me."
  - type: text
    content: "The current stack is GLFW (window/input), GLAD (GL 3.3 core loader), GLM, Dear ImGui, and CMake."
  - type: link
    url: "https://github.com/Zephyr-62/Cpp-Level-Design-Editor"
    text: Click here to see the project on GitHub

  - type: plain_html
    content: "<h3>Features</h3>"

  - type: text
    content: "Here is the list of all the default meshes I implemented. The user can also define custom meshes by code using the mesh builder class."
  - type: media
    id: meshesList

  - type: text
    content: "I found relevant the inclusion of an isometric camera, to have support for games with this kind of projection."
  - type: media
    id: camProj

  - type: text
    content: "I implemented three types of camera movement: free camera flight (default), panning camera, and orbital camera (arcball)."
  - type: galleryStart
  - type: media
    id: freeCam
  - type: media
    id: panCam
  - type: media
    id: arcballCam
  - type: galleryEnd

teamSize: 1
contributions-short:
  - Basic structure and rendering

images:
  - name: Cover.png
    alt: "Editor Thumbnail"
  - name: cameraProjections.png
    alt: "Perspective VS Isometric projections"
  - name: freeCam.gif
    alt: Gif of the free camera movement
  - name: arcballCam.gif
    alt: Gif of the arcball camera movement
  - name: panCam.gif
    alt: Gif of the panning camera movement

devImages:
    - id: camProj
      name: cameraProjections.png
      alt: "Perspective VS Isometric projections"
      footnote: "Perspective VS Isometric projections"
    - id: meshesList
      name: meshes.png
      alt: "A list of all implemented default meshes"
    - id: freeCam
      name: freeCam.gif
      alt: Gif of the free camera movement
      footnote: Free camera
    - id: arcballCam
      name: arcballCam.gif
      alt: Gif of the arcball camera movement
      footnote: Arcball camera
    - id: panCam
      name: panCam.gif
      alt: Gif of the panning camera movement
      footnote: Panning camera

---
---
layout: projectDetail
projId: VoxelEngine
title: "C# Voxel Engine"
subtitle: "Course Project ~ Game Engine Architecture"
startDate: "2024-01-12"
endDate: "2024-03-23"
halted: false
featured: false
relevance: 70
categoryTags:
    - Software 
    - Tool
techTags: 
    - C#
    - OpenGL
    - Graphics Engine
    - Raytracing
    - Rasterizing
summary: "Basic game engine with a gameobject system and a hybrid renderer of rasterized 3D meshes and raytraced objects (e.g. voxels)."
shortDescription: "I participated in the development of this basic game engine in a team of 4 people. The game engine counts on a gameobject system that supports rasterized meshes instancing, an audio manager system, and CPU raytraced objects (cubes, spheres, and octrees).<br><br> I was personally in charge of building the hybrid renderer (rasterization + raytracing), the implementation of octrees, and the post-processing pipeline."
longDescription:
  - type: text
    content: "This page is a <i><b>Work In Progress</b></i>"

  - type: text
    content: "These gifs show how the engine runs in real time. Each of these displays a specific feature:"
  - type: list
    items: 
      - type: text
        content: "<b>1.</b> This shows how the raytraced objects (octree) can overlap with the rasterized ones (RGB cubes). This works thanks to how I implemented a custom depth texture for raytraced objects, which I then merge with the one automatically generated for the rasterized objects. Raytraced objects are rendered into their own texture and then merged with the final frame buffer as a post-process effect."
      - type: text
        content: "<b>2.</b> Here I display how quickly octrees are generated (7 levels deep)."
      - type: text
        content: "<b>3.</b> Rendering the Octrees on the CPU is quite expensive, since they are intended to be used on non-runtime environments. For this reason, when the camera is moving I undersample its render texture, which creates the smearing effect. This allows the user to move around the scene without losing responsiveness due to low framerates."
  - type: galleryStart
  - type: media
    id: cubesIntersection
  - type: media
    id: octreeRegen
  - type: media
    id: octreeSmear
  - type: galleryEnd

teamSize: 4
contributions-short:
  - Hybrid Renderer (Rasterizer + CPU Raytracer)
  - Post-Processing Pipeline
  - Voxel Octree Generation
  - Camera Implementation
images:
  - name: treeView.png
    alt: "Thumbnail"
    footnote: "Randomly generated octree with color shifting on branches."
  - name: rayCastAndRasterized.png
    alt: "Raycasted-Rasterized interaction"
    footnote: "Raycasted cube (pink) intersects with rasterized cubes (RGB gradient)."
  - name: treeview2.png
    alt: "Octree Scene"
    footnote: "Overview of a randomly generated octree."
  - name: blocks1.png
    alt: "Cubic Octree"
    footnote: "Blocky octree with fractal colors."
  - name: blocks2.png
    alt: "Cubic Octree 2"
    footnote: "Blocky octree with fractal colors."
  - name: postprocess.png
    alt: "CRT"
    footnote: "Dummy implementation of a CRT shader."
  - name: postprocess1.png
    alt: "Pixelization shader"
    footnote: "Implementation of a pixelization shader."
  - name: postprocess2.png
    alt: "CRT & Pixel Shaders"
    footnote: "Combination of both implemented example shaders."
devImages:
  - id: cubesIntersection
    name: cubesIntersection.gif
    alt: "Octree Cubes Intersection"
    footnote: "This gif shows how the raytraced octree intersects with the rasterized cubes."
  - id: octreeRegen
    name: octreeRegen.gif
    alt: "Octree Regen"
    footnote: "Here is a display of several random octrees being generated."
  - id: octreeSmear
    name: octreeSmear.gif
    alt: "Octree Smear"
    footnote: "This gif displays how I undersample the raytraced objects to improve performance and allow the user to move around the scene without losing responsiveness."
  
---
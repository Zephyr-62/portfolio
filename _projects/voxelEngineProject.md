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
---
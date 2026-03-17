---
layout: projectDetail
projId: EES
title: "Ecosystem Evolution Simulator"
subtitle: "Bachelor's Thesis"
startDate: "2022-01-12"
endDate: "2023-01-24"
halted: false
featured: true
relevance: 85
categoryTags:
    - Software 
    - Research
    - Tool
techTags: 
    - Unity
    - Compute Shaders
    - Genetic Algorithm
    - Data Visualization
summary: "Simulator that tests the prey-predator model with bushes and trees, and trains a genetic algorithm to fine tune the parameters."
shortDescription: "This project was my computer science's bachelor's thesis. I worked on it for over a year, and it encompased working on an ecosysten simulator where I managed to implement 2 competing entity types: <ul style='list-style-type:circle'>
 <li>Implementing rules for evolution such as genomes, mutation and gene crossover</li>
 <li>Implementing several data analysis tools</li>
 <li>Implementing a genetic algorithm that runs the simulator dozens of times to fine-tune the parameters and find stability between both types of entities: bushes and trees</li>
 <li>Working on all the UI and data serialization</li>
 </ul>"
longDescription:
  - type: text
    content: "The simulator implemented two entity types: bushes and trees. These would compete for the available soil and light by evolving their genes that define their energy requirements and consumption. The general consensus for the design of these genes was for them to have a visual impact on the entity. These genes affected the scale, color, and type of seeds of every plant. You can find the details of my thesis in the final document:"
  - type: link
    url: '/portfolio/docs/bachThesis.pdf'
    text: Bachelor's Thesis Final Document

  - type: text
    content: "The application I implemented encompassed many systems. These are divided into four subsystems: the simulator, the statistics gathering and generation system, the genetic algorith, and the GUI." 
  - type: list
    items: 
      - type: text
        content: "<b>The Simulator</b>: This is the core system of the thesis. It was in charge of configuring and running a single simulation. It envolved many advanced performance optimizations, to ensure a simulation could run as quickly as possible. The most interesting bits are the generation of the 'Plants Requirements' Tracker Texture' (Appendix D) and the encoding of the specific evolution rules for both trees and bushes, so that they could drastically interact with one another."
  - type: galleryStart
  - type: media
    id: simExec1
  - type: media
    id: simExec2
  - type: media
    id: simNav
  - type: galleryEnd
  
  - type: list
    items: 
      - type: text
        content: "<b>Statistics Gathering and Generation</b>: This system serializes the data of a simulation step. I named these instances 'mementos'. With a collection of mementos, this system, detects species and generates several data visualization graphs such as the species distributions and heatmaps. Here, the most interesting implementation is the Spatio-Temporal Clustering algorithm I designed to detect the different species."
  - type: galleryStart
  - type: media
    id: bushes_balance
  - type: media
    id: species_detection
  - type: galleryEnd
  
  - type: list
    items: 
      - type: text
        content: "<b>The Genetic Algorithm</b>: A genetic algorithm can be run on top of the simulation subsystem to find an initial configuration that leads to every entity type coexisting, instead of one dominating over the other."
      - type: text
        content: "<b>The GUI</b>: I designed the whole interface myself. This was a massive task given the amount of fields the user can tweak, and the many visualization modes the application presents. I had to implement the plotting visualization myself, since Unity does not provide a 'line' or 'circle' renderer."
  - type: text
    content: "Here is a video that displays all the functionalities of the simulator I implemented, and the timestamps are listed below:" 
  - type: yt
    videoId: PkzSpne3oLk
  - type: plain_html
    content: "<h3>Timestamps</h3>" 
  - type: list
    items: 
      - type: text
        content: "0:00 - Configure a new simulation"
      - type: text
        content: "0:48 - Run the simulation"
      - type: text
        content: "1:36 - Load/delete simulations"
      - type: text
        content: "2:00 - View simulation statistics"
      - type: text
        content: "2:46 - Navigate simulation"
      - type: text
        content: "3:35 - Configure experiment with the Genetic Algorithm"
      - type: text
        content: "3:59 - Run experiment with the Genetic Algorithm"
      - type: text
        content: "4:37 - Auto-configure simulator with the Genetic Algorithm results"
############################################################
############################################################
############################################################
toolDescription:
  - type: text
    content: "This page is a <i><b>Work In Progress</b></i>"
  - type: text
    content: "These two images were generated in the GPU, running a Connected-Component Labeling (CCL) algorithm. This was used to detect conectivity between trees so that every group of interconnected trees could share their resources with the rest of the group, improving their chances of survival as a species."
  - type: galleryStart
  - type: media
    id: clustersSmall
  - type: media
    id: clustersLarge
  - type: galleryEnd

teamSize: 1
contributions-short:
  - GPU Compute Shaders
  - Spatio-temporal Clustering Algorithm
  - Simulation Snapshots
  - Data Serialization
contributions: 
  - Spatio-temporal clustering algorithm
  - GPU compute shaders to detect collisions and calculate interactions between entities
  - Genetic Algorithm that runs dozens of simulations to fine-tune the simulator itself
  - Data Analysis tools like heatmaps, distribution plots, entity attributes, and more
  - Snapshot system to revisit past simulation instances in a 3D scene

images:
    - name: Miniatura_1.png
      alt: "Thumbnail"
    - name: loadSim.png
      alt: "load save menu"
      footnote: "Simulation file selection menu"
    - name: loadingScreen.png
      alt: "loading screen"
      footnote: "2D animation that plays on the loading screen when a simulation is finished and the program processess all data."
    - name: niceSimRender.png
      alt: "scene view"
      footnote: "Nice looking results of a simulation, where both trees and bushes coexist."
    - name: gaResult.png
      alt: "GA Scene Result"
      footnote: "This is a visualization of the result of the execution of the genetic algorithm finetunning the parameters of the simulator."
    - name: niceSim.gif
      alt: "simulation species animation"
      footnote: "This clip shows how the different species of both bushes (left) and trees (right) evolutioned in a simulation."
    - name: heatMaps.png
      alt: "heatmaps"
      footnote: "Results of a simulation. Here is shown the heatmaps of both bushes (left) and trees (right) in a specific point in time."
    - name: simResults1.png
      alt: "simulation results 1"
      footnote: "Here you can see the statistics of how the species of bushes existed in a specific point in time (left), and how the heatmaps of trees looked at the same time (right)."
    - name: simResults2.png
      alt: "simulation results 2"
      footnote: "Here you can see the evolution of a specific gene in bushes across different species (left) and the tree population size (right)."

devImages:
    - id: species_detection
      name: Overview/species_detection.png
      alt: "Species Detection"
      footnote: "This diagram shows how the raw data from every entity is collected and then processed in clusters to identify different species and their evolution."
    - id: bushes_balance
      name: Overview/bushes_balance.gif
      alt: "simulation species result"
      footnote: "This animation shows how different species of bushes evolved through a simulation"
    - id: simExec1
      name: Overview/simExec1.png
      alt: "simulation execution"
      footnote: "Simulation in progress screen. Here you can see loads of statistics to understand how the evolution is progressing."
    - id: simExec2
      name: Overview/simExec2.png
      alt: "simulation execution"
      footnote: "Simulation in progress screen. Here you can see loads of statistics to understand how the evolution is progressing."
    - id: simNav
      name: Overview/simNav1.png
      alt: "simulation navigation"
      footnote: "You can pause a simulation to inspect the scene and see how it is currently looking"

################################################
    - id: clustersSmall
      name: Tool/clustersSmall.png
      alt: "clusters gpu 1"
      footnote: "This image was generated in the GPU. It labeled all randomly generated circles based on conectivity (CCL), where each group has a different colour."
    - id: clustersLarge
      name: Tool/clustersLarge.png
      alt: "clusters gpu 2"
      footnote: "This image was generated in the GPU. It labeled all randomly generated circles based on conectivity (CCL), where each group has a different colour. This was a stress test to see how large the texture could get while having good performance, since this algorithm had to be executed per simulation step."

---
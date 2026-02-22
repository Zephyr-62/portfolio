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
shortDescription: "This project was my computer science's bachelor's thesis. I worked on it for over a year, and it encompased working on an ecosysten simulator: <ul style='list-style-type:circle'>
 <li>Implementing rules for evolution such as genomes, mutation and gene crossover</li>
 <li>Implementing several data analysis tools</li>
 <li>Implementing a genetic algorithm that runs the simulator dozens of times to fine-tune the parameters and find stability between both types of entities: bushes and trees</li>
 <li>Working on all the UI and data serialization</li>
 </ul>"
longDescription: "
                  <header><h3>Description of Systems</h3></header>
                  <p>
                  This is my very long description, it could go on, and on, and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on,and on, but it wont. It can also include html tags like <strong>this one</strong>...
                  </p>
                 "
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
      footnote: ""
    - name: gaResult.png
      alt: "GA Scene Result"
      footnote: "This is a visualization of the result of the execution of the genetic algorithm finetunning the parameters of the simulator."
    - name: heatMaps.png
      alt: "heatmaps"
      footnote: "Results of a simulation. Here is shown the heatmaps of both bushes (left) and trees (right) in a specific point in time."
    - name: loadingScreen.png
      alt: "loading screen"
      footnote: "2D animation that plays on the loading screen when a simulation is finished and the program processess all data."
    - name: loadSim.png
      alt: "load save menu"
      footnote: "Simulation file selection menu"
    - name: niceSimRender.png
      alt: "scene view"
      footnote: "Nice looking results of a simulation, where both trees and bushes coexist."
    - name: niceSim.gif
      alt: "simulation species animation"
      footnote: "This clip shows how the different species of both bushes (left) and trees (right) evolutioned in a simulation."
    - name: simExec1.png
      alt: "simulation execution"
      footnote: "Simulation in progress screen. Here you can see loads of statistics to understand how the evolution is progressing."
    - name: simExec2.png
      alt: "simulation execution"
      footnote: "Simulation in progress screen. Here you can see loads of statistics to understand how the evolution is progressing."
    - name: simNav1.png
      alt: "simulation navigation"
      footnote: "You can pause a simulation to inspect the scene and see how it is currently looking"
    - name: simResults1.png
      alt: "simulation results 1"
      footnote: "Here you can see the statistics of how the species of bushes existed in a specific point in time, and how the heatmaps of trees looked at the same time."
    - name: simResults2.png
      alt: "simulation results 2"
      footnote: "Here you can see the properties of the different species in a graph view"
imagesDev:
    - name: species_detection_3.png
      alt: "species detection design"
      footnote: "This is a demonstration of how the species detection algorithm is supposed to work within a specific gene attribute. It explains how a species can be born, extinct, or mutate into new species"
    - name: bushes_balance.gif
      alt: "simulation species result"
      footnote: "This animation shows how different species of bushes evolved through a simulation"
    - name: clustersSmall.png
      alt: "clusters gpu 1"
      footnote: "This image was generated in the GPU. It labeled all randomly generated circles based on conectivity, where each different group has a different colour."
    - name: clustersLarge.png
      alt: "clusters gpu 2"
      footnote: "This image was generated in the GPU. It labeled all randomly generated circles based on conectivity, where each different group has a different colour. This was a stress test to see how large the texture could get while having good performance, since this algorithm had to be executed per simulation step."
---
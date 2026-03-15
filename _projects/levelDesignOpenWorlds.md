---
layout: projectDetail
projId: level-design-pcg
title: "Level Design in Open Worlds using PCG"
subtitle: "Master's Thesis"
startDate: "2024-11-18"
endDate: ""
halted: false
featured: true
relevance: 90
categoryTags:
    - Software
    - Research
    - LevelDesign
    - Tool
techTags: 
    - Unity
    - C#
    - Level Design
    - PCG
    - Research
summary: "Research that explores how to influence open-world experiences through level design using procedural content generation."
shortDescription: "This is my master's thesis project, in which I did some deep research about <i>Level Design</i> and how it relates to game experiences and open-world games. I also explored how to implement level design principles algorithmically with Procedural Content Generation (PCG)."
  ############################################
  ############################################
  ############################################

longDescription:  
  - type: text
    content: "The work of this thesis spanned over a year and a half. It consisted of 6 months of research, 2 months of design & implementation, and 4 months of writting the final document. This project presents two artefacts, a theoretical one (Level Design Guidelines) and a practical one (Two Prototypes in Unity)."
  - type: text
    content: "Although level design has a purely theoretical nature in this project, it has served me as a foundation to understand the core principles and become a better designer. Additionally, the two prototypes portray my current experience in tool development and algorithmic coding challenges. In this portfolio entry I will explain a summary of my findings and implementation details. However, you can find my full thesis in the next link:"
  - type: link
    url: '/portfolio/docs/mastersThesis.pdf'
    text: Master's Thesis Current Draft (before final corrections)
  - type: plain_html
    content: "<h3>Level Design Taxonomy</h3>"
  - type: text
    content: "My work on level design research focused on describing a list of guidelines that could serve future designers (such as myself) understand level design principles in a way that they are applicable and easy to grasp. I explored dozens of professional resources and GDC talks to gather a collection of level design concepts, tips, practices, patterns, etc. Then, I arranged them in a diagram, grouping and linking concepts until my current taxonomy of level design emerged. It is not perfect nor finished, but rather a foundation of knoledge that can be expanded methodically."
  - type: text 
    content: "I define level design through two main categories: <i>Guidance</i> and <i>Spatial Communication</i>. "
  - type: list
    items:
      - "<b>Guidance</b>. "
      - "<b>Spatial Communication</b>. "
  - type: text
    content: "Here you can find the tree of concepts of level design:"
  - type: media
    id: LDgraph
  - type: text
    content: "Here I present the guidelines and some way to apply them in a production pipeline:"
  - type: galleryStart
  - type: media
    id: guidelines
  - type: media
    id: pipeline
  - type: galleryEnd
  ############################################
  - type: plain_html
    content: "<h3>The Prototypes</h3>"
  - type: text
    content: "Gameplay prototype + island generation, map generation as Tools. Show off character controller + interaction system + inventory. Present result imgs of generations"
  - type: text
    content: ""
  - type: galleryStart
  - type: media
    id: guidelines
  - type: media
    id: pipeline
  - type: galleryEnd
  - type: list
    items:
      - "Elem"
      - "Elem"
      - "Elem"
  - type: galleryStart
  - type: media
    id: guidelines
  - type: media
    id: pipeline
  - type: galleryEnd
  ############################################
  - type: plain_html
    content: "<h3>My other research</h3>"
  - type: text
    content: "My research about Game Experiences, Open-world games, and PCG can be summarized in the following diagrams:"
  - type: galleryStart
  - type: media
    id: mainGraph
  - type: media
    id: PCG
  - type: galleryEnd
  - type: text
    content: "Game Experiences are approached with the MDA framework. I explain the nature of goals as game objectives that are born from the player desires. These desires can be self-imposed or induced by the game designers. The relation between game experience and level design lies in the concept of <i>Goal Negotiation</i>."
  - type: text
    content: "'Open World' does not consitute a game genre, but a qualifier that sits on top of the genre that defines some additional characteristics. These characteristics include large continuous worlds, exploration and progression mechanics, non-linearity, and emergent gameplay among others. Some examples of games that share the open-world qualifier but that are quite different from each other include: Minecraft, Assasin's Creed, Firewatch, Satisfactory, Elden Ring, and Goat Simulator."
  - type: text
    content: "For the PCG research I merged several taxonomies I run into and made them general purpose. I also listed several types of methods depending on their recurring characteristics of the taxonomy. With that, I listed several benefits, drawbacks, and considerations which then I related to the needs of open-world games. Finally, I looked into how other people have tried to integrate PCG with handcrafted content and level design principles."

  ############################################
  ############################################
  ############################################

ldDescription:
  - type: text
    content: "taxonomy 4 categories, 11 guidelines, structure of a guideline, key LD concepts, diagrams..."

  ############################################
  ############################################
  ############################################

toolDescription:
  - type: text
    content: "Island generation & Map generation process (as explained in Thesis) --> usage of AET + ref"
  
  ############################################
  ############################################
  ############################################

teamSize: 1
contributions-short:
  - Level Design Taxonomy
  - Procedural Generation
  - Floating Islands Generator
  - Map Prototype Generator
images:
  - name: islands.png
    alt: "Islands"
    footnote: "Procedurally generated islands following the specific biome generation parameters."
  - name: biomes.png
    alt: "Biomes Cells"
    footnote: "Cells used to represent an area of the prototype that belongs to a specific biome."


devImages:
  - id: LDgraph
    name: Overview/LD.png
    alt: "LD Graph"
    footnote: "Here Level Design is divided into the concepts of guidance and spatial communication, and then other concepts branch from these two."
  - id: guidelines
    name: Overview/Guidelines_tree.png
    alt: "Guidelines Tree"
    footnote: "This tree diagram presents all the 11 guidelines, explaining what concepts define them, and what concepts are used to apply them practically."
  - id: pipeline
    name: Overview/Guidelines_pipeline.png
    alt: "Guideliens Pipeline"
    footnote: "This flow diagram represents an example sorting of the guidelines to apply them in production."
  - id: mainGraph
    name: Overview/mainGraph.png
    alt: "Main Concept Diagram"
    footnote: "Concept diagram I used to structure all my findings in a graph."
  - id: PCG
    name: Overview/PCG.png
    alt: "PCG Diagram"
    footnote: "PCG Diagram I used to arrange benefits/drawbacks, taxonomy, methods, and its integration with Level Design."
---
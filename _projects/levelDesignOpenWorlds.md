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
    content: "In this portfolio entry I summarize my research outcomes (Level Design tab) and implementation details (Tools Programming tab). You can find my full thesis in the next link:"
  - type: link
    url: '/portfolio/docs/mastersThesis.pdf'
    text: Master's Thesis Current Draft (before final corrections)
    
  - type: text
    content: "The work of this thesis spanned over a year and a half. It consisted of 6 months of research, 2 months of design & implementation, and 4 months of writting the final document. The research is framed around four pillars: Game Experiences, Open Worlds, Level Design and Procedural Content Generation (PCG). The two more important pillars are Level Design and PCG, each of which is treated in the 'Level Design' and 'Tools Programming' tabs of this project's description. Here is a summary of the two resulting artefacts of the work in this thesis:"
  - type: list
    items:
      - type: text
        content: "<b>Theoretical artefact</b>: Level Design Guidelines. These are a collection of level design concepts, principles, tips, practices, patterns, etc. that serve as the foundation of a taxonomy. Although level design has a purely theoretical nature in this project, it has served me as to grasp the core design principles and practices and become a better designer."
      - type: text
        content: "<b>Practical artefacts</b>: Two Prototypes in Unity. My first idea consisted of building a small scale open-world prototype. However, due to implementation challenges and time constraints I ditched this project for a simpler proof of concept. The second prototype generates a map following specific level design guidelines."
 
  ############################################
  - type: plain_html
    content: "<h3>The Discarded Prototype</h3>"
  - type: text
    content: "My first work hours on this prototype after the design phase focused on getting the character controller and interaction systems running. I implemented gliding controls, health, stamina, and an inventory system."
  - type: galleryStart
  - type: media
    id: metrics
  - type: media
    id: items
  - type: media
    id: door
  - type: galleryEnd

  - type: text
    content: "To implement the character controller I built a metrics playground to test the game feel and measure the distances between platforms. I also made use of a museum to display all my items and test their interactions and looks both on the scene and inside the inventory."
  - type: galleryStart
  - type: media
    id: flight
  - type: media
    id: inventory
  - type: galleryEnd

  - type: text
    content: "Although I spent quite some time on getting all these previous systems, I came to the realization that I could no longer work on this prototype when I run into a massive hurdle in the level generation, as I imposed myself the task to create an open-world level generator with verticality at its core. Here I decided to jump into the second prototype to use as a proof of concept, instead of a playable artefact. Still, there are several interesting implementation details about the world generation of this first prototype in the 'Tools Programming' tab."
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
    content: "Game Experiences are defined through the MDA framework. I explain the nature of goals as game objectives that are born from the player desires. These desires can be self-imposed or induced by the game designers. Game experiences are related to level design through the concept of <i>Goal Negotiation</i>, which determines what the player wishes to do, and what the game offers through its systems and objectives."
  - type: text
    content: "'Open World' does not consitute a game genre, but a qualifier that sits on top of the genre that defines some additional characteristics. These characteristics include large continuous worlds, exploration and progression mechanics, non-linearity, and emergent gameplay among others. I used these characteristics to identify specific level design principles and guidelines that were applicable in this context. This is because I wanted the level design guidelines to be broad enough so that they could be applicable to many different contexts. Some examples of games that are considered open-world but that are quite different from one another include: Minecraft, Assasin's Creed, Firewatch, Satisfactory, Elden Ring, and Goat Simulator."
  - type: text
    content: "For the PCG research I merged several taxonomies I run into and framed them in a general purpose, since some of them had specific considerations for the game genres they were aiming for. I then listed several types of methods grouping them by recurring properties they shared. With that, I listed several benefits, drawbacks, and considerations which then I related to the needs of open-world games. Finally, I looked into how other people have tried to integrate PCG with handcrafted content and level design principles, finding a major research gap in the latter topic."

  ############################################
  ############################################
  ############################################

ldDescription:

  ## taxonomy 4 categories, 11 guidelines. which are they and what do they mean?  
  - type: plain_html
    content: "<h3>The Taxonomy</h3>"
  - type: text
    content: "My work on level design research focused on describing a list of guidelines that could serve future designers (such as myself) understand level design principles in a way that they are applicable and easy to grasp. I explored dozens of professional resources and GDC talks to gather a collection of level design concepts, tips, practices, patterns, etc. Then, I arranged them in a diagram, grouping and linking concepts until my current taxonomy of level design emerged. It is not perfect nor finished, but rather a foundation of knoledge that can be expanded methodically."
  - type: text
    content: "Here is a diagram where I summarize and link all the concepts I ran into during my research:"
  - type: media
    id: LDgraph

  - type: text 
    content: "These concepts were then translated into 4 different categories, which were then subdivided into 11 guidelines. I define level design as <i>Guidance</i> and <i>Spatial Communication</i>, but <i>Goals</i> and <i>Engagement</i> also serve a crucial role."
  - type: list
    items:
      - type: text
        content: "<b>Goals</b>. This category doubles up as a guideline, explaining how to design objectives and how to apply 'Goal Negotiation'. It links my research on game experiences with level design, and it explains the role of player motivation and desires. It also introduces the concepts of layering goals, presenting goals clearly and reinforcing them, and it talks about the importance of rewards."
      - type: text
        content: "<b>Engagement</b>. This category explains how to get the player involved with the game and how to keep them invested in spending more time with it. It groups the following three guidelines, while it also acknowledges other important factors such as <i>Challenge</i>, <i>Unpredictability</i>, <i>Variety</i>, and <i>Game Feel</i>:"
      - type: list
        items: 
          - type: text
            content: "<t><b>Choices</b>. This is the main characteristic that defines video games as a media. It is related to player agency, and it explains how to create meaningful and conscious choices through several tools: consequences, risk VS reward, not involving randomness, variety, and signposting. It also defends the importance of player intentionality."
          - type: text
            content: "<t><b>Meaning</b>. This guideline explains the connections the player experiences with the game. These connections can be cognitive, spatial, personal, and emotional. In terms of level design, the pertinent category is the spatial one. Here, we can make use of environmental storytelling and <i>psychogeography</i>."
          - type: text
            content: "<t><b>Pacing</b>. This refers to the speed at which experiences unfold over time. It defines how quickly events, information, or actions are presented to the player. Level design plays a crucial role here, as it is the one in charge of the order in which goals are presented to the player. Here, the usage of variety, layering of goals, and downtime is essential."
      - type: text
        content: "<b>Guidance</b>. This category refers to how all the design decissions are directed towards conducting the player through the intended game experience. It presents several conceptual and practical tools to effectively apply this guidance."
      - type: list
        items: 
        - type: text
          content: "<b>POIs</b>. (Points of Interest) These are locations that have a visually distinctive appearance and which are usually linked to gameplay opportunities. Players can use them as weenies to orient themselves in a space. POIs have several properties (density, frequency, uniqueness, complexity, visual impact...), which both determine and should be determine by the level of interest of the location. Some examples of POIs include HUBs, landmarks, enemy camps, etc."
        - type: text
          content: "<b>Pathing (resources)</b>. This guideline serves as a collection of tools we have to construct levels. These should be used following the principles explained by the rest of the guidelines (meaning, pacing, variety...). These can be divided in four categories:"
        - type: list
          items: 
            - type: text
              content: "<b>Sightlines</b>. Used to transmit specific bits of information to the player. Some tools include corners, pitch points, and vistas."
            - type: text
              content: "<b>Flow Control</b>. These include one-way valves, branching, choke points (funnelling)... ."
            - type: text
              content: "<b>Revisiting Areas</b>. Some tools are shortcuts, backtracking, and bidirectional gameplay."
            - type: text
              content: "<b>Obstacles</b>. This is an important sub-guideline. It explains how to define limits in the player space. It describes boundaries and gates, where gates are types of boundaries that can change state. These can be soft or hard depending on how strict they are. This guideline explains in detail different types of locks and keys, which are quite useful to arrange progression graphs.  "
        - type: text
          content: "<b>Curiosity</b>. This guideline explains how to construct mystery to encourage player agency over the intended experience. It has both theoretical and practical tools to incentivize this curiosity. Some theoretical tools include partial information, uncertainty, foreshadowing, denial spaces, and the usage of pockets of tension. The most important practical tool is spatial lures, which are used as 'breadcrumbs'. These are used to create contrast through means such as color, light, sound, scale, or even motion."
      - type: text
        content: "<b>Spatial Communication</b>. This category also serves as a guideline that explains how to transmit information and emotions through layouts and placement of level elements. An important concept this guideline explains is the <i>visual language</i>. This is a type of implicit communication that makes use of affordances to guide the player. Affordances have to be readable and consistent. This allows players to make conscious <i>choices</i>."
      - type: list
        items: 
        - type: text
          content: "<b>Spatial Structure</b>. This guideline explains the physical structure of layouts and their properties. Some of these properties include scale, verticality, openness, tightness, symmetry, etc. It also describes different types of spaces, such as sandbox, playgrounds, or arenas. An important concept explained in this guideline are cognitive maps, which consist of the mental representation the player has of the space. This guideline explains how to construct layouts following a graph approach, describing cycles, backtracking, shortcuts, branching, gating, etc. It essentially explains how to put to practice the tools explained in the rest of the guidelines, with a especial attention to Pathing resources."
  - type: text
    content: "Here are two representations of the guidelines. The first image shows a synthesis of the previous block of text. The second image displays a possible sorting of the guidelines in a way that they could be applicable in a production pipeline."
  - type: galleryStart
  - type: media
    id: guidelines
  - type: media
    id: pipeline
  - type: galleryEnd
  
  ## structure of a guideline, list LD concepts...
  - type: plain_html
    content: "<h3>Building a Toolkit</h3>"
  - type: text
    content: "While researching level design I run into the realization that many of the concepts explained throughout the sources didn't quite work as guidelines. These sources provided knowledge of many different shapes: design patterns, considerations, practices, developer insights, consequences, tips... For this reason, I divided these concepts into three separate categories: Design Considerations, Design Practices, and Design Guidelines. In particular, I wanted the guidelines to be easy to grasp, informative, and actionable. For these reasons, I designed the following structure for a guideline:"
  - type: list
    items: 
    - type: text
      content: "<b>Description</b>."
    - type: list
      items: 
      - type: text
        content: "<b>'What is it?'</b>. This section describes the nature of the guideline, the theory that supports it and its relevance."
      - type: text
        content: "<b>'What it achieves/focuses on'</b>. This section explains the practical application of the guideline, why it is important to consider and what effect it is intended to have over the game experience."
      - type: text
        content: "<b>'How to apply'</b>. This section covers practical ways of applying the guideline. It describes how to achieve all the effects described on the previous sections."
      - type: text
        content: "<b>'Counter Effects'</b>. This section explains different outcomes of not following this guideline. Some of these might be desirable given the intended game experience."
    - type: text
      content: "<b>Real Industry Examples</b>. This section grounds the theory in real examples, asserting when a guideline is implemented or not, and the effect it has over a game."
    - type: text
      content: "<b>Metrics and Validation</b>. This section explains tools to ensure you are properly applying the guideline."
    - type: text
      content: "<b>Related to</b>. This section explains the connection the guideline has with the rest of the body of knowledge, crucial to understand how everything works together."

  - type: plain_html
    content: "<h3>Guideline Example</h3>"
  - type: text
    content: "Here I present a quick look into the 'Goals' guideline, in a very syntheitc and summarized manner:"
  - type: list
    items: 
    - type: text
      content: "<b>Description</b>."
    - type: list
      items: 
      - type: text
        content: "<b>'What is it?'</b>. Goals are objectives born from player desires. These are a direct representation of the game's core mechanics."
      - type: text
        content: "<b>'What it achieves/focuses on'</b>. Goals are closely related to the MDA framework. They are heavily linked to the concept of goal negotiation. Available goals should align with the intended gameplay experience."
      - type: text
        content: "<b>'How to apply'</b>. Goals should encourage the intended experience, but not enforce it. Goals can be layered: provide opportunities to the player to decide which goal to engage with. Goals should be stated clearly, reinforced throughout the game, and offer rewards when completed."
      - type: text
        content: "<b>'Counter Effects'</b>. Too few goals can lead to restrictive gameplay. Too many can become overwhelming."
    - type: text
      content: "<b>Real Industry Examples</b>. Zelda BOTW has a deep layering of goals. The Last of Us presents and reinforces goals by attatching them to visual level elements. Sable offers little to no rewards to achieving its goals, which makes it more unpopular."
    - type: text
      content: "<b>Metrics and Validation</b>. List your goals and arrange them spatially and chronologically. Assess that there is enough variety and flexibility for your player to choose from. Track the rewards/consequences each goal offers."
    - type: text
      content: "<b>Related to</b>. Heavily related to Engagement, choices, meaning, pacing, POIs, and Curiosity."
  
  - type: plain_html
    content: "<h3>Results</h3>"
  - type: text
    content: "Although I didn't have enough time to write down and evaluate all the guidelines, they served me as a foundation of knowledge and as a starting point to better understand how to approach level design. I intend to further develop these, most probably as a community work instead of writting it all down myself. I also intend to validate them in the future through crowdsourcing and contact senior level designers to provide their insights on them."

  ############################################
  ############################################
  ############################################

toolDescription:
    ## "Island generation & Map generation process (as explained in Thesis) --> usage of AET + ref"
  - type: text
    content: "The implementation of these procedural generators is deeply looked at in my thesis (check the Overview tab). Here I present a summary of the algorithms I had to implement and some of the design decissions I took during the development." 

  - type: plain_html
    content: "<h3>Prototype 1: Floating Islands Generation</h3>"
  - type: text
    content: "In this prototype I wanted to generate a world with floating islands, where the character could glide and fly across them, slowly gathering better materials and resources and improving their movement capabilities. I wanted to have different biomes, which would determine both the looks of the islands and their scale and distribution. I run into the issue of the complexity of measuring distances and constraints between islands, so this prototype wasn't fully implemented. However, here is a quick look at how far I got into it." 
  - type: media
    id: islands_overview 

  - type: text
    content: "Firstly, I defined a 3D grid space where each cell represents a biome, with its particular generation properties. These properties determine the shape, scale, scarcity, and sparsity of the islands. Biomes have specific settings that define where in the world they can appear. e.g. The green biome appears only at the bottom center layer, and purple can only appear in the shape of a torus in higher altitudes. The following image represents the process of populating the grid with biomes. The first image shows how the game occurs inside a dome. In the second image I sample random locations for every biome (following the previous constraints). In the third image I grow these samples to fill up the space. Each of these cells will then contain what I defined as a 'cluster of islands'." 
  - type: media
    id: BiomeGeneration 

  - type: text
    content: "To generate each individual cluster of islands, I sample a Perlin Noise texture filtered with a Sigmoid function and a threshold. This method provides a highly controllable result that looks like the image to the left. Then, to soften the hard cuts of the edges I discard every pixel that is outside the circumscripted circle area. With this texture, I run a CCL (Connected-component labeling) algorithm to identify individual islands, so that I can treat them separately and vary their Y position. For each individual island, I use the brightness of each pixel to discretely determine the altitude of an island piece (given a verticality factor). This translates in the three coloured levels on the image to the right. Once every island piece (1x1) has a set altitude, I group the pieces into larger squares and rects. This serves several purposes: aesthetic, performance, and instancing requirements. The islands look better from below, there are less individual pieces to render, and I can make sure I can instantiate large structures on top of large tiles without them overlapping with other geometry." 
  - type: galleryStart 
  - type: media
    id: islands_noise 
  - type: media
    id: islands_noise_CCL 
  - type: media
    id: island_tiling 
  - type: galleryEnd 

  ## Different new approach: generate islands with texture, save their looks, discard the ones touching the edges, save metrics --> more organic and faster generation.
  - type: text
    content: "I my current implementation I run this process for each biome cell. At the scale I built the world that implied over 500 cells, which then resulted in about 12 seconds of generation time. This is a bit over 2ms of compute time for each cluster, which is quite good given I implemeted this logic on the CPU." 
  - type: text
    content: "While writting down my results on the thesis I realized a much better and performant way of approaching this generation. Instead of creating every island cluster in runtime for each biome cell, I could generate individual islands offline, discard the islands that collide with the edges of the texture (to avoid weird cutsoffs), and have precalculated metrics to easen the process of placing the islands on the generation step. I intend to implement this in a not so distant future, since I am quite curious about the performance improvement this could pose. This also means that I could generate infinite chunkable worlds if I were to change the biome generation algorithm as well." 

#####################################################
  - type: plain_html
    content: "<h3>Prototype 2: Adventure Map Generation</h3>"

  ## Intention of this prototype: create map following specific design guidelines/constraints (towns close to water, enemies follow distributions, POIs sampling (frequency, density), towns clustering, ) and testing different types of PCG methods (distribution sampling, absolute input control (water), noise, )
  - type: text
    content: "This prototype was born from the idea to propose a one to one translation of design ideas into algorithms. I didn't want to spend more time implementing game mechanics, I just wanted to get to the point of the thesis, which was to show the feasibility of translating the level design guidelines into procedural algorithms. I also wanted to showcase different types of PCG methods, that's why you can find a diversity of disconnected algorithms, instead of a cohesive generation structure. With this, I decided to create a map generator as a proof of concept (not-playable prototype). Here are some generation results. The first picture shows a top-down view of the map, where rivers, mountains, and paths between towns are visisble. The other two pictures display how buildings are spawned in clusters, usually close to the water. Paths connect nearby buildings."

  ## Here are some examples of the results
  - type: galleryStart 
  - type: media
    id: Map 
  - type: media
    id: river_house 
  - type: media
    id: Town 
  - type: galleryEnd 

  - type: text
    content: "The map generation starts with the terrain. I first generate the altitude map with 3 octaves of Perlin Noise. I then use a hand-painted texture as input to showcase the integration of an algorithm with high designer controllability. This texture is used to define bodies of water. In the example portrayed in the thesis this texture is shaped as rivers. I calculate a new texture called 'near-water map', where brightests pixels are the ones closest to the water. Then I use this second texture to mask the elevation texture. This method 'paints' the water in the elevation map, and smooths out the areas around it to have more realistic-looking results. Finally, I calculate the gradient of the elevation map, which provides a new texture where brightest pixels represent the steepness of the terrain. These textures are the basic elements required to define spawn constraints of level elements later on."
  ## Explain generated terrain textures
  - type: galleryStart 
  - type: media
    id: Elevation 
  - type: media
    id: NearWater 
  - type: media
    id: Inclination 
  - type: galleryEnd 

  - type: text
    content: "An interesting type of spawnable element are town buildings, of which there are two types: houses and towers. Towers in particular can alter the terrain and smooth it out in a 3x3 unit area. As design constraints, buildings should be more likely to spawn near water bodies, and they shoud also avoid too steep terrains. I also want to create villages, so that buildings cluster together instead of being randomly scattered across the whole map. To do so, I first sample random pixels with these previous constraints (using the 'near water' texture and the inclination map), and then paint circles at those locations with a random radius (up to 7 units). Then, I use these circles as a mask to create a spawn map for town buildings."
  - type: galleryStart 
  - type: media
    id: Vista3 
  - type: media
    id: Vista4 
  - type: galleryEnd 
  - type: text
    content: "Two other helper textures I generated are the 'global map' and some A* weights. I use the global map to determine safe locations to spawn elements without overlapping. This texture is always applied as a mask on top of the constraints textures of every spawnable element. For every type of spawnable element, I first pick all the required locations following its spawn constraints, and then I update the global map marking all these locations as unavailable all at once for the next pass."
  - type: galleryStart 
  - type: media
    id: GlobalMap 
  - type: media
    id: A_StarWeights 
  - type: galleryEnd 
  - type: text
    content: "The A* weights texture is used to connect town buildings with paths withing a maximum reach (which avoid paths being created across the whole map between two different buildings). This texture is created using both the water input texture and the 'inclination map' to determine areas where creating a path is more costly."
  - type: media
    id: Pathing 

  - type: text
    content: "As a general rule for spawnable elements, I wanted to have configurable parameters to determine their distribution following the POIs guideline. With these, I can define if an element is unique (can only be spawned once). Specific unique locations include the player's spawn point, a dungeon, and the castle. For non-unique elements, I can define their frequency, which is configured through distribution settings such as mean, standard deviation, and min/max thresholds. Each spawnable object also defines its area of influence, which determines its radius to black out from the global map. Some example spawnable elements I included were forest tiles, chests, quest markers, crystal caves, campfires, NPCs, and enemies."
  - type: text
    content: "Enemies are quite interesting. The specific type of enemy to instantiate is ruled by two variables: intensity and difficulty. There are 3 levels of intensity (minion, enemy camp, and boss fight), each of which has variations with increasing difficulty. The spawn constraints for enemies are also governed by these two variables. Additionally, enemies are more likely to spawn in higher altitudes. To determine areas with higher difficulty and intensity, I created a system to generate Perlin Noise textures, one for each variable. With these two designer inputs, the system offers a highly controllability over the pacing of the game. One can define pockets of tension and spikes of difficulty organically, and how these combine with each other."
  ## Unique POIs, frequency, spawn constraints (elevation, inclination, ) explain enemy requirements.
  - type: media
    id: EnemyRanking 

  - type: text
    content: "In the future, I want to come back to this project and integrate some specific guidelines on these maps. I particularly want to focus on the Pathing guideline, which would probably require implementing some kind of progression graph generator on top of the map generator. I also want to move some of these generation algorithms into the GPU to get faster results (right now generating this map takes about 15 seconds on an Ryzen 7 2700). A further improvement I would look into would be changing some of the generation rules to allow for infinite worlds generation."

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
  - name: vista.png
    alt: "Procedural vista"
    footnote: "Preview of a procedurally generated map, with a town spawned in a flat area close to the water, and enemy settlements dominating over a mountain."
  - name: Map_Overview.png
    alt: "Map_Overview"
    footnote: "Overview of a procedurally generated map, where water bodies were handpainted."
  - name: islands.png
    alt: "Islands"
    footnote: "Procedurally generated islands following the specific biome generation parameters."
  - name: biomes.png
    alt: "Biomes Cells"
    footnote: "Cells used to represent an area of the prototype that belongs to a specific biome."
  - name: metrics.png
    alt: "metrics playground"
    footnote: "Metrics playground I built to measure distances and to design the character controller."
  - name: items.png
    alt: "items"
    footnote: "Museum of items I used to test how they would look like on the sceen and on the inventory once they are picked up."
  - name: door.gif
    alt: "door interaction"
    footnote: "Implementation of interactable objects."
  - name: inventory.gif
    alt: "inventory preview"
    footnote: "Here is how the inventory gets populated when items are picked up."
  - name: flight.gif
    alt: "glide mechanics"
    footnote: "Here is an overview of the flight controls around the metrics playground."



devImages:
  - id: metrics
    name: metrics.png
    alt: "metrics"
    footnote: "Metrics playground I built to measure distances and to design the character controller."
  - id: items
    name: items.png
    alt: "items"
    footnote: "Museum of items I used to test how they would look like on the sceen and on the inventory once they are picked up."
  - id: door
    name: door.gif
    alt: "door"
    footnote: "Implementation of interactable objects."
  - id: flight
    name: flight.gif
    alt: "flight"
    footnote: "Here is an overview of the flight controls around the metrics playground."
  - id: inventory
    name: inventory.gif
    alt: "inventory"
    footnote: "Here is how the inventory gets populated when items are picked up."
  
  - id: mainGraph
    name: Overview/mainGraph.png
    alt: "Main Concept Diagram"
    footnote: "Concept diagram I used to structure all my findings in a graph."
  - id: PCG
    name: Overview/PCG.png
    alt: "PCG Diagram"
    footnote: "PCG Diagram I used to arrange benefits/drawbacks, taxonomy, methods, and its integration with Level Design."
########################################
  - id: LDgraph
    name: LD/LD.png
    alt: "LD Graph"
    footnote: "Here Level Design is divided into the concepts of guidance and spatial communication, and then other concepts branch from these two."
  - id: guidelines
    name: LD/Guidelines_tree.png
    alt: "Guidelines Tree"
    footnote: "This tree diagram presents all the 11 guidelines, explaining what concepts define them, and what concepts are used to apply them practically."
  - id: pipeline
    name: LD/Guidelines_pipeline.png
    alt: "Guidelines Pipeline"
    footnote: "This flow diagram represents an example sorting of the guidelines to apply them in production."
########################################
  - id: Map
    name: Tool/Map/Map.png
    alt: "Map"
    footnote: "Top down view of a generated map. You can see the mountains' shadows, the painted rivers"
  - id: river_house
    name: Tool/Map/river_house.png
    alt: "river_house"
    footnote: "This house has spawned near the water, and it's connected to the main village through a path across the river."
  - id: Town
    name: Tool/Map/Town.png
    alt: "Town"
    footnote: "A small town generated near a body of water."

  - id: Elevation
    name: Tool/Map/Elevation_Fixed.png
    alt: "Elevation map"
    footnote: "This texture represents the elevation map, where brighter pixels stand for more altitude. Black pixels represent water."
  - id: Inclination
    name: Tool/Map/Inclination_Fixed.png
    alt: "Inclination map"
    footnote: "Gradient of the elevation map. This texture represents the inclination of the terrain, used to determine where certain game elements can spawn."
  - id: NearWater
    name: Tool/Map/NearWater.png
    alt: "Near Water map"
    footnote: "This texture uses a hand-painted input texture (used to define water), and calculates the surrounding areas. This is helpful to smooth down the elevation map around the areas with water."

  - id: Vista3
    name: Tool/Map/Vista3.png
    alt: "Village Vista"
    footnote: "Small village with a far off castle visible at the top of a mountain."
  - id: Vista4
    name: Tool/Map/Vista4.png
    alt: "Castle Vista"
    footnote: "Vistas from a castle, with two villages "

  - id: GlobalMap
    name: Tool/Map/GlobalMap.png
    alt: "Global Map"
    footnote: "This is the global map. It is used to detect locations where game elements can be spawned without colliding with others already in place."
  - id: A_StarWeights
    name: Tool/Map/A_StarWeights.png
    alt: "a* weights"
    footnote: "This texture represents the A* weights of the pathfinding algorithm used to create paths between different towns."
  
  - id: Pathing
    name: Tool/Map/Pathing.png
    alt: "Pathing example"
    footnote: "This path between a town and a castle has been created randomly avoiding water and areas of high inclination as much as possible."
  - id: EnemyRanking
    name: Tool/Map/EnemyRanking.png
    alt: "Enemy Rankings"
    footnote: "This is a representation of the two variables that determine what type of enemy to spawn. Difficulty ramps up the challenge in the same type of enemy. Intensity varies the nature of the combat challenge (minion, enemy camp, boss fight)."


  - id: islands_overview
    name: Tool/Islands/islands_overview.png
    alt: "islands overview"
    footnote: "A cluster of procedurally generated islands."
  - id: BiomeGeneration
    name: Tool/Islands/BiomeGeneration.png
    alt: "Biome Generation"
    footnote: "This is the process of generating biome cells. First I instantiate samples with specific location constraints. Then I grow those samples to cover the space."
  - id: islands_noise
    name: Tool/Islands/islands_noise.png
    alt: "islands noise"
    footnote: "Perlin Noise texture filtered with a threshold and a sigmoid function to create random island shapes. Brighter pixels represent higher elevation on each individual island."
  - id: islands_noise_CCL
    name: Tool/Islands/islands_noise_CCL.png
    alt: "islands noise"
    footnote: "Perlin Noise texture where I ran a CCL algorithm to detect individual islands."
  - id: island_tiling
    name: Tool/Islands/Island_tiling.png
    alt: "island tiling"
    footnote: "An island where each altitude level is colored differently. Its pieces have been merged for performance and practical reasons."

---
---
layout: projectDetail
projId: molinillo
title: "Amenaza en el Molinillo"
subtitle: "<i>Numae Games</i> First Released Game"
startDate: "2023-06-12"
endDate: ""
halted: false
featured: true
relevance: 95
categoryTags:
    - Game
    - LevelDesign
    - Tool
techTags: 
    - Godot
    - Level Design
    - Engine Tools
summary: "Action-Adventure 3D Sidescroller game <b><i>to be released</i></b> <a href='https://store.steampowered.com/app/2542580/Rodolfo_Mascarpone_y_Ramn_Cazanuecos_Amenaza_en_el_Molinillo/'>on Steam</a> by <a href='https://x.com/numaegames'>Numae Games</a>, with the collaboration of several famous Spanish streamers."
shortDescription: "This game is a 2-player coop action-adventure 3D sidescroller, currently being developed by a team of 3 people. It was born as a small tribute to the famous spanish streamers <a href='https://www.twitch.tv/borjapavon'>Borja Pavón</a> and <a href='https://www.twitch.tv/thecatacroquer'>TheCatacroquer</a> and their GTA V roleplay characters, but the project grew quite large. Now we count with their <b>collaboration</b> and support of their communities."

# ---------------------------------------------------- 
# ---------------------------------------------------- 
# ----------------------------------------------------
longDescription: 
  - type: text
    content: "This is the first game to be released by <a href='https://x.com/numaegames'>Numae Games</a>, a co-founded game dev studio based in Spain. It started as a small tribute to two spanish streamers, but over the course of the years the project developed a narrative and now the streamers are giving active feedback and provide the voicelines. The game currently has over 2000 wishlists on Steam. We also released a vertical slice as a proof of concept, which the streamers played live."
  - type: link
    url: "https://store.steampowered.com/app/2542580/Rodolfo_Mascarpone_y_Ramn_Cazanuecos_Amenaza_en_el_Molinillo/"
    text: Click here to see the game on Steam
  - type: link
    url: "https://x.com/TheCatacroquer/status/1685020428526313472"
    text: Watch a clip of TheCatacroquer playing the demo here! 
  - type: text
    content: "The game is being built using Godot Engine, and it features combat and platforming bits, along with puzzles and a strong driving narrative. You can watch the cinematographic and gameplay trailers here (in spanish)."
  - type: yt
    videoId: EgrzzQubbuI
  - type: yt
    videoId: 07g8WOh6sjI
# ---------------------------------------------------- 
# ---------------------------------------------------- 
# ----------------------------------------------------

ldDescription:
  - type: text
    content: "Since the game is still in development, this section is <b>Under Construction</b>."
  - type: text
    content: "The process of level design started by acquiring metrics for both playable characters, and assessing their different ways in which they can interact with the space. With this, different paths can be created for both characters, which gives some variety and independence to each player. For note taking purposes, Rodolfo is identified with the purple color, while Ramon's color is orange."
  - type: galleryStart
  - type: media
    id: metricsNotes
  - type: media
    id: metricsLevel
  - type: galleryEnd

  - type: text
    content: "As my first introduction to level design, the original sketches were very crude, but this improved as I got feedback from professional level designer <a href='https://linktr.ee/Jesus_Machina' target='_blank'>Jesus Machina</a>. Here is a before and after look at a puzzle I designed. "
  - type: galleryStart
  - type: media
    id: puzzle1_old
  - type: media
    id: puzzle1
  - type: galleryEnd

  - type: text
    content: "However, the original designs still provided interesting gameplay opportunities, accounting for the range of actions each player had at any point. It featured branching paths, enemy encounters, secret collectables, and situations of tension."
  - type: media
    id: firstSketch

  - type: text
    content: "Here I haven't shared any design decissions nor I have explained the intent of the layouts I created, but these will be acknowledged in the future when more progress is made."
  - type: text
    content: "<i>More updates coming soon!</i>"

# ---------------------------------------------------- 
# ---------------------------------------------------- 
# ----------------------------------------------------
toolDescription:
  - type: text
    content: "My main role in this project is as lead level designer, but at the very beginning I also implemented a couple helper tools. I worked on two of them: the dialogue manager, and the building generator tool."
  - type: text
    content: "<h3>Dialogue Manager</h3>"
  - type: text
    content: "This tool started with the need to have an easy system to automatize the process of writting lines of dialogue that could be attributed to different characters, in such a way that they would display their character image in their dialogue box. With this, more necessities arrived, which were implemented into the tool:"
  - type: list
    items:
      - Rich text tags (bold, italics, colors, and wave effects)
      - Possibility to execute game events and call remote methods
      - Playing the voicelines as the text spawns 
      - Dialogue choices that lead to alternate lines and consequences
      - Online sync support
  - type: text
    content: "Along with these functionalities, an IDE was in development, and it supported syntax highlighting. However, during the end phase of development of this tool we found a working free asset published in Godot's AssetLib, which fullfilled all the necessities. At this stage, our custom tool was still a work in process with the choices functionality and the IDE usability."
  - type: text
    content: "For this reason, the custom dialogue manager ended up being discarded to cut development time and focus on problems that weren't already solved by other users."
  
  # ---------------------------------------------------- 
  # ---------------------------------------------------- 

  - type: text
    content: "<h3> Building Generator Tool </h3>"
  - type: text
    content: "Our 3D artist prepared all the assets pertinent to buildings in a modular way, so that he could choose a building style and texture and place doors, windows, awning, and more decorative elements. The level art of the first vertical slice was built entierly by hand, which took several dozens of hours."

  - type: media
    id: firstLevel

  - type: text
    content: "I built this tool to automatically assemble all the modular elements. The user can simply type the dimensions of the building, and select the style and material with a dropdown menu. The tool generates all the walls, skirtings, columns, and ceiling pieces automatically."
  - type: media
    id: buildingStyles

  - type: text
    content: "With this base, the user can then select a facade and indicate what elements to place in every wall. Here I display all the building elements that can be placed. These include empty walls, windows, several types of doors and garages, balconies, awnings, and decorations like columns and AC units."
  - type: galleryStart
  - type: media
    id: buildingFacade
  - type: media
    id: buildingFacade2
  - type: galleryEnd
  
  - type: text
    content: "The tool is divided into three tabs, as seen in the following image (in spanish)"
  - type: list
    items:
      - "The first one defines the dimensions, style, and materials of the building."
      - "On the second tab the user can select a facade and type the specific layout they desire for every building level. They do so by typing letters each element has assigned, which are explained in the tool through a tooltip."
      - "The final tab is used to set the random distribution parameters of the height of the window blinds. These include mean and standard deviation."
  - type: media
    id: buildingTool

  - type: text
    content: "Other functionalities and QOL features implemented in this tool include:"
  - type: list
    items:
      -  "You can set a facade empty, which will remove all of its skirtings and columns so that several buildings can be put together without wasting resources."
      -  "The tool serializes all the settings per building, so if a building needs to change in future iterations it just needs to be selected to tweak those parameters."
      -  "The most useful feature is the pattern repetition. When the input for walls and elements is parsed, if the end of the pattern is reached before finishing the row of walls or all the building stories, the pattern is reset and repeated. This means that if you only define the first layer of a building with a sequence of wall and window, this pattern will spread through the whole building. This behavior is visualized in the next image."
  - type: media
    id: patternRepetition

# ---------------------------------------------------- 
# ---------------------------------------------------- 
# ----------------------------------------------------
teamSize: 3
contributions-short:
  - Lead Level Designer
  - Building Generator Tool
  - Custom Dialogue System
contributions:
  - GPU Compute Shaders
  - Spatio-temporal Clustering Algorithm
  - Simulation Snapshots
  - Data Serialization
images:
  - name: cover.jpg
    alt: "Cover Image"
  - name: town.jpg
    alt: "Town"
    footnote: "The streets"
  - name: office.jpg
    alt: "Office"
    footnote: "The Office"
  - name: train.jpg
    alt: "Subway"
    footnote: "The Subway"
  - name: sewers.jpg
    alt: "Sewers"
    footnote: "The Sewers"
  - name: beach.jpg
    alt: "Beach"
    footnote: "The Beach"
  - name: "demoSteam.gif"
    alt: "Demo Video"
    footnote: "Display of the demo sceneries"
  - name: "enemyHitSteam.gif"
    alt: "Enemy Being Hit"
    footnote: "Enemy being hit by Rodolfo's whisky bottle"

devImages:
  - id: firstLevel
    name: Tool/FirstLevel.png
    alt: "Level1Building"
    footnote: "The first level implemented was fully handcrafted"
  - id: buildingStyles
    name: Tool/BuildingStyles.png
    alt: "Building Styles"
    footnote: "Selection of different styles and materials"
  - id: buildingFacade
    name: Tool/BuildingFacade.png
    alt: "BuildingAssets"
    footnote: "Display of all the building wall elements"
  - id: buildingFacade2
    name: Tool/BuildingFacade2.png
    alt: "BuildingAssets2"
    footnote: "Display of balconies and awnings"
  - id: buildingTool
    name: Tool/BuildingGeneratorTool.png
    alt: "BuildingEditorView"
    footnote: "This is how different tabs show in the building editor tool"
  - id: patternRepetition
    name: Tool/PatternRepetition.png
    alt: "WindowPatterns"
    footnote: "This displays how a simple pattern configuration repeats throughout the whole building. The left editor defines the left side of the building. It shows how in the left facade the bottom floor is all walls and the next floor is all windows. The right editor shows how to alternate this pattern. (w → window | q → wall)"
# ---------------------------------------------------- 
  - id: puzzle1_old
    name: LD/puzzle1_old.png
    alt: "Puzzle 1 Sketch"
    footnote: "First sketch of puzzle #2"
  - id: puzzle1
    name: LD/puzzle1.png
    alt: "Puzzle 1 Sketch"
    footnote: "Updated sketch of puzzle #2"
  - id: metricsNotes
    name: LD/metricsNotes.png
    alt: "Metrics Notes"
    footnote: "Metrics for Ramon's jump with and without vaulting, along with a plot that explains the fall distance. A grid cell is 1 meter."
  - id: metricsLevel
    name: LD/metricsLevel.png
    alt: "Metrics Level"
    footnote: "Metrics for both characters fall, jump, and unique abilities like double jump or dashing."
  - id: firstSketch
    name: LD/firstSketch.png
    alt: "First sketch of a level"
    footnote: "This is the original sketch of part of a level in Act 1"
  
---
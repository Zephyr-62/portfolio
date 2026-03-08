---
layout: projectDetail
projId: bubbleBuilder
title: "Bubble Builder"
subtitle: "Global Gamejam 2025 Entry"
startDate: "2025-01-24"
endDate: "2025-01-26"
halted: true
featured: false
relevance: 60
categoryTags:
    - Game
    - LevelDesign
techTags: 
    - Godot
    - Grid Based
    - Puzzle Design
summary: "48h Gamejam where the theme was 'bubbles'. Maneuver a bubble around a spike maze with fans in this bubble factory."
shortDescription: "This project was an entry to the <a href='https://globalgamejam.org/jam-sites/2025/ggj-gothenburg-25' target='_blank'>Global Gamejam 2025</a> in Gothenburg, with the theme <i>'bubbles'</i>. I took part in a team of 4 people, where my role consisted of game design (ideation phase), gameplay programming, and most importantly <i>Puzzle Design</i>. <br> The game features 5 distinct levels (plus the tutorial), where the mechanics are taught in a paced manner. The status of the game is considered to be halted since I want to eventually return to it and design more puzzles and mechanics."
longDescription:
  - type: text
    content: "In this puzzle game, the player has to direct a bubble from the generator into the collector while avoiding spikes. To do so, they can  place fans in a grid to push the bubble around. You can try the game here:"
  - type: link
    url: https://devune.itch.io/bubble-builder
    text: Click here to check the game on Itch.io

  - type: text
    content: "During the ideation phase, many ideas were considered about different mechanics on how to manage bubbles. These included simple elements like buttons, gates, or dividers. Some more complex and intricate ideas also showed up, like different types of bubbles, delayers, activators..."
  - type: text
    content: "At the end, we stuck to the basics of just having walls, spikes, and fans. We also included backplates to define areas where the player wouldn't be able to place elements."
  - type: galleryStart
  - type: media
    id: ideationPhase
  - type: media
    id: levelElements
  - type: galleryEnd

  - type: text
    content: "During the presentation of the game in the gamejam, the judges managed to get to the 4th level. With further playtests with friends and family people really seemed to enjoy the looks, feel, and level of challenge of the game. The <i>most satisfying</i> part about this project was that playtesters fell in most of the pitfalls I purposefully designed for them to learn the specifics of the mechanics."
  - type: text
    content: "The next few days after the gamejam we fixed a few errors and polished some features. While the project got closed then, I still consider it as an interesting thing to eventually come back to. Since the foundation is already implemented, I want to try my hands on it and design more interesting puzzles in the future, and maybe some new mechanics..."

ldDescription:
  - type: text
    content: "In this section I'm going to present all the 5 levels implemented during the gamejam, and the design decissions behind them. Although, most levels were designed in one evening, they had to undergo some tweaks to improve readability and teaching of new concepts. I highly encourage you to play through the levels (5-10 minutes), and then check how much of your though process I could predict. Many of our playtesters exactly followed the steps explained in this section."
  - type: media
    id: levelsOverview
  - type: text
    content: "The process of designing all these puzzles has not only been quite fun, but also instructing, as I learned to follow a methodic design approach. One of my design goals was to have no explicit tutorials. Everything the player is supposed to understand they had to learn through playing. Let's start with the basics:"

  - type: plain_html
    content: "<h3>Level 0</h3>"
  - type: text
    content: "This is the entry level. I used it to give players the freedom to familiarize with the controls and explore how pushing the bubble works. There is no puzzle here, just a playground to encourage experimentation. There are no hazards, and the level is surrounded by walls to provide a sensation of safe space. Since the bubble always floats upwards, this also hints towards the goal, since  the collector has the only other open gap in the boundaries of the level."
  - type: galleryStart
  - type: media
    id: level0
  - type: media
    id: level0_1
  - type: galleryEnd
  
  - type: plain_html
    content: "<h3>Level 1</h3>"
  - type: text
    content: "This is the first actual puzzle. Here, players are presented with the first obstacle, with which they can learn how to push the bubble around them. In this level, they learn that the bubble always spawns from the middle grid tile of the generator. In this level the boundary walls are also removed to provide the opportunity to push the bubble outside the play area." 
  - type: text
    content: "At this point, players might feel inclined to use a fan to push the bubble upwards since they might not be aware that it can float on its own when not influenced by a fan <b><i>[Figure 2]</i></b>. To solve this, a limited amount of fans prevents such solution. Additionally, the bottom row of spikes extends all the way to the left to discourage players from trying this behaviour on that side of the board. Although a solution wouldn't be possible, they could learn about a mechanic early on which could hinder their understanding of the basics."
  - type: text
    content: "Once they realize they don't need to push the bubble upwards, they can approach the correct solution. At this point they might learn that fans push bubbles 3 square units away from them by getting stuck as shown in <b><i>[Figure 3]</i></b>."
  - type: text
    content: "With this, the correct solution is most likely to be reached by the player. The level still provides some flexibility in the exact position of the fans, allowing the player to feel confident in the choices they made."
  - type: galleryStart
  - type: media
    id: level1
  - type: media
    id: level1_1
  - type: media
    id: level1_2
  - type: media
    id: level1_3
  - type: galleryEnd
  
  - type: plain_html
    content: "<h3>Level 2</h3>"
  - type: text
    content: "This level is a twist on the previous one. Here, the player might try to approach the puzzle in the same way as the previous, but they will quickly realize that this time they only have two fans to place." 
  - type: text
    content: "Here they can also point out the altered position of the collector, which is one unit to the right. This allows the solution to have the bubble float up the right-most column. However, the absence of boundaries in the level will most likely have players push the bubbles off the play area, which can reinforce the idea that bubbles get pushed by fans 3 square units. To help understand this measurement, the length of the spike obstacles are also 3 units long. This level still provides some flexibility on the exact position of both fans, although it does get a bit more restrictive than the previous one."
  - type: galleryStart
  - type: media
    id: level2
  - type: media
    id: level2_1
  - type: media
    id: level2_2
  - type: galleryEnd

  - type: plain_html
    content: "<h3>Level 3</h3>"
  - type: text
    content: "In this level two new elements are introduced: the walls and the back plates. The walls prevent the bubble from crossing the direction they are blocking, and the plates prevent the player from placing elements on top. The level is intentionally designed to look more daunting, with spikes acting as boundaries and a convoluted collection of elements. Although the path the bubble has to take in this puzzle is very explicit, the specific way to achieve is not, and it is intended to show new interactions to the player:"
  - type: list
    items:
      - First of all, they can learn how pushing a bubble against a vertical wall will prevent it from moving sideways and will keep floating instead.
      - Then they realize they can push bubbles with a fan being on the other side of a wall
      - Then, if they havent thought about it yet, they can learn to push bubbles downwards. 
      - As seen in <b><i>[Figure 2]</i></b>, if the player hasn't been careful with the placement of the first fan, the bubble might be pushed against the bottom spikes with the third fan. This can result in them using their last fan to correct this, but then they would need a fifth one to make the final move, so they realise they can reuse the first fan if they place it higher up.
      - Once the bubble is past the U turn, players will most likely run into the situation of <b><i>[Figure 3]</i></b>, where the second fan pushes the bubble away. Here they realize they have to move this fan further to the left so that it doesn't interact with the bubble at that position.
  - type: text
    content: "The metal plates serve several purposes. The leftmost plate helps create the negative space that encourages players to place fans right underneath it. The middle and right plates allow the last bullet point situation to happen, while also they limit the amount of choices the player can make. Although this is already getting into actual puzzle territory we didn't want judges to be overwhelmed at this stage so we kept their options limited."
  - type: galleryStart
  - type: media
    id: level3
  - type: media
    id: level3_1
  - type: media
    id: level3_2
  - type: media
    id: level3_3
  - type: galleryEnd

  - type: plain_html
    content: "<h3>Level 4</h3>"
  - type: text
    content: "With this level I wanted to test the player in their understanding on how far they can push bubbles. For this reason, the first obstacle is designed to seem impossible to solve, since the spike barrier up ahead is 4 units long. The barrier that sits closer to the generator also seems impossible at first glance, since the player cannot use a fan to push a bubble in the same column it spawns."
  - type: text
    content: "This level has been designed to provide a sensation of openness but also a feeling of constrainment, since the amount of available locations to place elements is quite limited. The outer barrier is made out of walls to drive the player into thinking they can get away with pushing the bubble all the way into the right. However, they can then come to the realization that they won't be able to push the bubble away from the wall anymore."
  - type: galleryStart
  - type: media
    id: level4
  - type: media
    id: level4_1
  - type: galleryEnd

  - type: text
    content: "When the player finally figures out they have to use the left path, and achieve to do so, they will be likely running into a new problem, where they have no way to push a bubble back into the right without overshooting. This is designed to prompt them into using a fan to push the bubble upwards. I avoided this behaviour before, so it was necessary to explicitly implement it this way. This action teaches them about the basics of fan priority, at least intuitively, where a bubble influenced by two fans will follow the direction of the one that is closer. As a small addition to this, the number of available fans (5 in this case), also serves as a hint that they are not using all the tools they are provided."
  - type: galleryStart
  - type: media
    id: level4_2
  - type: media
    id: level4_3
  - type: galleryEnd  

  - type: plain_html
    content: "<h3>Level 5</h3>"
  - type: text
    content: "This puzzle is a step up in difficulty, and tests all the knowledge of the player. An additional puzzle before this one would have helped with pacing the difficulty, but due to the time constraints of the gamejam a 6th puzzle couldn't make it into the released version."
  - type: text
    content: "This level has been constructed to present many apparently possible paths, but only one of them is a solution. In the second image you can see marked all these possible paths in blue. There is also a red square that indicates where the bubble could be without being stuck next to a wall. Paths 1 and 6' exit this red square, so they are impossible. Path 2 is blocked by the back plate under the path number 1 and by fan B."
  - type: galleryStart
  - type: media
    id: level5
  - type: media
    id: level5_1
  - type: galleryEnd

  - type: text
    content: "Once players reach to the conclussion they have to approach the fork at position #3, they learn to use a fan to block the bubble from following the 2nd path. They can either have opposing fans that cancel eachother, or they can just use a fan as a wall. Once they reach the fork, players are more likely to try the paths on the right (as intended and as seen in friends' playthroughs), since this side has more open space. With paths #4 and #5 players are likely to learn more about the fan priority mechanic. Even if they manage to surpass the obstacles, they will always be one fan short before reaching a solution."
  - type: galleryStart
  - type: media
    id: level5_2
  - type: media
    id: level5_3
  - type: galleryEnd

  - type: text
    content: "Finally, to try the path on the left they have to be aware of the rule of opposition of fans and fan priorities. This implies that they need a fan pushing upwards to cancel fan D, and they need a horizontal one to push the bubble outwards closer to the exit."
  - type: galleryStart
  - type: media
    id: level5_4
  - type: media
    id: level5_5
  - type: galleryEnd


  

teamSize: 4
contributions-short:
  - Game Ideation
  - Lead Puzzle Designer
  - Physics Implementation
images:
  - name: cover.png
    alt: "Thumbnail"
    footnote: "Game thumbnail"
  - name: levelSpawn.gif
    alt: "Level Spawn"
    footnote: "Visualization of a level being loaded"
  - name: levelPlay1.gif
    alt: "Level 2"
    footnote: "This is how the game looks while on construction mode."
  - name: levelPlay2.png
    alt: "Level 3"    
  - name: levelPlay3.png
    alt: "Bubble running"
    footnote: "This is how the game looks while on simulation mode."

devImages:
  - id: ideationPhase
    name: Overview/ideationPhase.jpg
    alt: "First game ideas"
    footnote: "These are all the level elements we thought about implementing in the first couple hours of the gamejam."
  - id: levelElements
    name: Overview/levelElements.png
    alt: "Level Elements"
    footnote: "These are all the level elements that ended up being part of the game."

##################################################
  - id: levelsDesign
    name: LD/levelsDesign.jpg
    alt: "Levels Prototype"
    footnote: "These drawings represent the collection of the first iteration of puzzle design."
  - id: levelsOverview
    name: LD/levelsOverview.png
    alt: "Levels Overview"
    footnote: "These are the final designs of all the levels."
##################################################
  - id: level0
    name: LD/level0.png
    alt: "Level 0"
    footnote: "Level 0 initial state."
  - id: level0_1
    name: LD/level0_1.png
    alt: "Level 0_1"
    footnote: "Player plays around with fans in level 0."

  - id: level1
    name: LD/level1.png
    alt: "Level 1"
    footnote: "Level 1 initial state."
  - id: level1_1
    name: LD/level1_1.png
    alt: "Level 1_1"
    footnote: "Player tries to push bubble upwards and runs out of fans."
  - id: level1_2
    name: LD/level1_2.png
    alt: "Level 1_2"
    footnote: "Player might learn that fans push bubbles 3 square units away from them by getting stuck in this situation."
  - id: level1_3
    name: LD/level1_3.png
    alt: "Level 1_3"
    footnote: "Possible solution to Level 1."

  - id: level2
    name: LD/level2.png
    alt: "Level 2"
    footnote: "Level 2 initial state."
  - id: level2_1
    name: LD/level2_1.png
    alt: "Level 2_1"
    footnote: "Player pushes the bubble off bounds in level 2."
  - id: level2_2
    name: LD/level2_2.png
    alt: "Level 2_2"
    footnote: "Possible solution to Level 2."

  - id: level3
    name: LD/level3.png
    alt: "Level 3"
    footnote: "Level 3 initial state."
  - id: level3_1
    name: LD/level3_1.gif
    alt: "Level 3_1"
    footnote: "Player realizes they placed the first fan incorrectly."
  - id: level3_2
    name: LD/level3_2.gif
    alt: "Level 3_2"
    footnote: "Player realizes they placed the second fan incorrectly."
  - id: level3_3
    name: LD/level3_3.gif
    alt: "Level 3_3"
    footnote: "Possible solution to Level 3."

  - id: level4
    name: LD/level4.png
    alt: "Level 4"
    footnote: "Level 4 initial state."
  - id: level4_1
    name: LD/level4_1.gif
    alt: "Level 4_1"
    footnote: "Player experiments with pushing the bubble to the right only to realize they can't push the bubble away from the wall anymore."
  - id: level4_2
    name: LD/level4_2.gif
    alt: "Level 4_2"
    footnote: "Player runs into a new problem."
  - id: level4_3
    name: LD/level4_3.gif
    alt: "Level 4_3"
    footnote: "Possible solution to Level 4."

  - id: level5
    name: LD/level5.png
    alt: "Level 5"
    footnote: "Level 5 initial state."
  - id: level5_1
    name: LD/level5_1.png
    alt: "Level 5 Paths"
    footnote: "Possible different paths the player might think about while playing puzzle 5."
  - id: level5_2
    name: LD/level5_2.gif
    alt: "Level 5 Paths"
    footnote: "Player tries path #4 but fan number C has priority over their own fan to the right."
  - id: level5_3
    name: LD/level5_3.gif
    alt: "Level 5 Paths"
    footnote: "Player tries path #5 but they are one fan short."
  - id: level5_4
    name: LD/level5_4.gif
    alt: "Level 5 Paths"
    footnote: "Player pushes the bubble too far left."
  - id: level5_5
    name: LD/level5_5.gif
    alt: "Level 5 Paths"
    footnote: "Possible solution to Level 5."
---
---
layout: projectDetail
projId: mergeConflict
title: "The Merge Conflict"
subtitle: "Course Project ~ Open Project in Interaction Design"
startDate: "2024-03-13"
endDate: "2024-05-28"
halted: false
featured: true
relevance: 80
categoryTags:
    - Game
    - Research
    - LevelDesign
techTags: 
    - Unity
    - VR
    - Portals
    - Level/Puzzle/Game Design
summary: "Exploration of VR sense of space <b><i>without</b></i> using virtual locomotion systems (e.g. joysticks). Walk in-game by walking in real life."
shortDescription: "This prototype of a game makes use of stationary portals as a means of redirected walking within a non-euclidean environment. That is to say: all movement in virtual reality is real-world movement. To play this game you require a 4x4 meter space free of obstacles. <br><br> Work your way around this space altering environment to roll back changes made to <b>scale</b>, <b>time</b>, and <b>perspective</b>. Each of these aspects represents a puzzle branch. Each team meber had one puzzle branch assigned. I was personally in charge of the <i>scale</i> puzzle branch. I also worked on other important systems like the interaction with props and the out of bounts system, along with tools to easily map our scenes to the real world play space, and a culling system to load and unload rooms."
longDescription:
  - type: text
    content: "This page is a <i><b>Work In Progress</b></i>"

  - type: text
    content: "We didn't fully finish the game as we were quite ambitious with the time we were given (2 months full time). The time branch did manage to provide a full gameplay experience but the two other branches were unfinished. While the perspective branch missed the implementation of a few puzzles, the scale branch faced major technical complications due to the implementation of portals we were using, which had to undergo severe changes to adapt to our needs. While in the scale branch you can explore all the rooms, most of the puzzles and room navigation lack guidance and visual and auditory cues. With that in mind, you can find and download the game in the following link."
  - type: link
    url: https://buddhadom.itch.io/the-merge-conflict
    text: Click here to see the game on Itch.io
  - type: text
    content: "You can also see a full playthrough of every branch in the following videos:"
  - type: galleryStart
  - type: yt
    videoId: Cy08uxXDThU
  - type: yt
    videoId: 4ugY0svaHrM
  - type: yt
    videoId: x8ULHHRjLhc
  - type: galleryEnd

  - type: text
    content: "Here you can see a few behind-the-scenes screenshots on how all the rooms were distributed spatially. We used a single scene where we placed everything, and then implemented a system to load and unload 'portal adjacent' rooms. All the rooms were placed close to the origin of the coordinate system to avoid floating point precission errors, which is quite drastic in VR systems. Additionally, to visually understand how rooms connected to each other we implemented a custom Unity gizmos view that draws a line between connected portals."
  - type: galleryStart
  - type: media
    id: devRooms
  - type: media
    id: timeRooms
  - type: galleryEnd  

  - type: text
    content: "To analize our results during playtests we used a system to measure how players moved across the rooms. With these images you can see how everything connects and understand the nature of the player space. Each color represents a different game room."
  - type: galleryStart
  - type: media
    id: hubWalk
  - type: media
    id: mazeWalk
  - type: media
    id: perspectiveWalk
  - type: galleryEnd


ldDescription:
  - type: text
    content: "This page is a <i><b>Work In Progress</b></i>"

  - type: text
    content: "Here are a few pictures of the original design diagrams, and a cleaned version for the puzzle branch I was personally involved with."
  - type: galleryStart
  - type: media
    id: gameDesign
  - type: media
    id: scaleDiagram
  - type: media
    id: pathsDiagram
  - type: galleryEnd
  
  - type: text
    content: "Here are several rooms I designed. On the first figure you can find 3 rooms contained within a larger one. The second figure shows how we used the blue and yellow lines to have a representation of the real-life player space to the in-game rooms we designed."
  - type: galleryStart
  - type: media
    id: atticPan
  - type: media
    id: medBay
  - type: galleryEnd

toolDescription:
  - type: text
    content: "This page is a <i><b>Work In Progress</b></i>"
  - type: plain_html
    content: "<h3>1. Out of bounds system (The Void) </h3>"
  - type: plain_html
    content: "<h3>2. Room Manager System</h3>"
  - type: plain_html
    content: "<h3>3. Interaction System</h3>"

teamSize: 3
contributions-short:
  - Scale Portal Puzzle Branch  
  - Out-of-bounds System
  - Interaction System
images:
  - name: thumbnail.png
    alt: "Thumbnail"
  - name: hub.png
    alt: "Hub Screenshot"
    footnote: "This is the main hub from which you can find a doorway into each of the puzzle branches."
  - name: deskOffice.png
    alt: "Office"
    footnote: "Desk office room in the time branch."
  - name: elevator.gif
    alt: "Elevator"
    footnote: "This is how you 'use' the elevator in the office."
  - name: Zdzilaw.png
    alt: "Zdzilaw"
    footnote: "The main room from the perspective branch. It is based on an untitled art piece from Zdzilaw."
  - name: perspective_room.gif
    alt: "Lenses"
    footnote: "Lenses puzzle room from the perspective branch."
  - name: hotel_rooms.gif
    alt: "Hotel_rooms"
    footnote: "Hotel rooms from the scale branch, where each door takes you to a different part of the level."
  - name: living_room.png
    alt: "Living_room"
    footnote: "Living room from the scale branch."
  - name: attic.png
    alt: "Attic_room"
    footnote: "Attic room in the scale branch."
  - name: maquette.gif
    alt: "Office_maquette"
    footnote: "Maquette you can find in the attic in the scale branch."
  - name: attic_key.png
    alt: "Huge_key"
    footnote: "Large key you can find in the attic from the attic in the scale branch."
  - name: teleport_room.gif
    alt: "Box_key"
    footnote: "Transform the large key from the attic into a regular sized one in the scale branch."
  - name: void.gif
    alt: "The_Void"
    footnote: "Out of bounds system that prevents the player from walking through walls."


devImages:
  - id: devRooms
    name: Overview/dev_rooms.png
    alt: "Dev Rooms"
    footnote: "All the rooms exist close to the origin (within 500 units) of the world to avoid floating point precission errors."
  - id: timeRooms
    name: Overview/time_rooms.png
    alt: "Time Rooms"
    footnote: "This is how we visualize how rooms are connected, with lines drawn between connected portals."
  - id: hubWalk
    name: Overview/hub_walk.png
    alt: "Walk stats Hub"
    footnote: "Gathered walking statistics from our playtesters in the Hub rooms. Each color represents a different room."
  - id: mazeWalk
    name: Overview/timemaze_walk.png
    alt: "Walk stats time maze"
    footnote: "Gathered walking statistics from our playtesters in the time maze rooms. Each color represents a different room."
  - id: perspectiveWalk
    name: Overview/Zdzilaw.png
    alt: "Walk stats perspective branch"
    footnote: "Gathered walking statistics from our playtesters in the perspective branch rooms. Each color represents a different room."
##################################
  - id: gameDesign
    name: LD/gameDesign.jpeg
    alt: "Game design diagrams"
    footnote: "These is our original design board, where we listed our gameplay ideas and mechanics, and started exploring how to implement redirected walking within a 4 by 4 meter space. "
  - id: scaleDiagram
    name: LD/LDscale.jpeg
    alt: "Scale LD diagrams"
    footnote: "Some of the original concepts I designed for the scale branch. With these I tried to imagine how the looks of the rooms would be populated with objects, so that they would feel spatious and open. I wanted to avoid the player feeling enclosed in a sequence of corridors."
  - id: pathsDiagram
    name: LD/LDdiagram.png
    alt: "Scale rooms diagrams"
    footnote: "This is a clean display of all the rooms in the scale branch. Here I note how every portal connects and where the locked doors and keys are."
  - id: atticPan
    name: LD/atticPan.gif
    alt: "Attic Panoramic"
    footnote: "This panoramic view shows how the playable space of the office maquette lays inside the attic room. This room is a good representation on how I created large spaces for the player within the limited walking spaces they had by placing objects as boundaries."
  - id: medBay
    name: LD/med_bay.png
    alt: "Med Bay"
    footnote: "This image shows the Med Bay. The blue squares and the yellow lines mark the player area where one can walk and interact with objects. The blue diamonds with the white lines mark where portals are placed and their exit direction."
---
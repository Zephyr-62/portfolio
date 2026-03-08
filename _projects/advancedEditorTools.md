---
layout: projectDetail
projId: AET
title: "Advanced Editor Tools"
subtitle: "Published Unity Asset"
startDate: "2023-02-06"
endDate: "2023-06-22"
halted: true
featured: true
relevance: 100
categoryTags:
    - Software
    - Tool
techTags: 
    - Unity
    - C#
    - Reflection
    - Engine Tool
summary: "Unity plugin used to create custom inspectors by adding C# property attributes to fields and methods."
shortDescription: "This is a free tool I developed on my own to easily modify the Unity Inspector without the need to create an additional editor script. It follows the same principle as the default Unity property attributes like [Header] or [Range].<br><br> This asset includes layout functionality for collapsible sections (foldouts) and columns. The tool allows nesting layout styles and serializes complex types like custom classes/structures, and nested Lists/Arrays.<br> However, by far the most useful functionality is converting methods into clickable buttons with a property attribute, supporting dynamic input parameters and async execution."
longDescription:
  - type: text
    content: "This tool was born from the need I had to create custom inspectors. I quickly realized what a burden it was to manually create a custom editor script for every script I wanted to edit, so I thought instead of writting this code every time I would make it dynamic so that I could always rely on the same script."
  - type: text
    content: "Eventually, this lead to the construction of this tool, which I found so useful I decided to spend a bit more time to make it freely available for everyone:"
  - type: link
    url: "https://assetstore.unity.com/packages/tools/utilities/advanced-editor-tools-254203"
    text: Unity Asset Store page 
  - type: text
    content: "Since the creation of this tool, I always include it as a starter package in my Unity projects. I find debugging my code with buttons the most useful functionality."
  - type: media
    id: barrelRoll
  - type: text
    content: "Here are other examples of its usage, with foldouts, columns, and a combination of both."
  
  - type: galleryStart
  - type: media
    id: foldouts
  - type: media
    id: columns
  - type: media
    id: foldoutColumns
  - type: galleryEnd
  
  - type: text
    content: "The tool includes several quality of life features: fields with long names are resized to fit, ReadOnly properties appear on the inspector but they are not interactable, and the button input parameters and foldout states are serialized. The tool also features serialization of custom data types, like structures, classes, enums, or nested lists, which can be used as input parameters for buttons."

  - type: galleryStart
  - type: media
    id: advancedDataTypes
  - type: media
    id: heavyNesting
  - type: galleryEnd

  - type: text
    content: "The tool remembers all the parameters from buttons and state of foldouts. One particular QOL feature allows users to rename or relocate their elements in the script without the tool forgetting these settings. Buttons in particular support changes of their signature: their button or method name, and the parameters inside."
  - type: text
    content: "The development of this tool is currently halted, and some improvements and fixes are already targeted, but due to time constraints it will have to wait a little longer to get some more love. I expect to get back to it by summer 2026... ."

teamSize: 1
contributions-short:
  - Foldout Layout
  - Columns Layout
  - Nested Layouts
  - Run Methods With Buttons
images:
    - name: Advanced Editor Tools graphics-2.png
      alt: "Thumbnail"
      footnote: "Unity Asset Store Thumbnail"
    - name: Advanced Editor Tools graphics-1.png
      alt: "Mockup"
      footnote: "Mockup preview of how the inspector looks with the plugin."
    - name: Advanced Editor Tools graphics-3.png
      alt: "Foldouts"
      footnote: "This image displays how to create and nest collapsible sections."
    - name: Advanced Editor Tools graphics-4.png
      alt: "Columns"
      footnote: "This is how you can intuitively create columns."
    - name: Advanced Editor Tools graphics-5.png
      alt: "Buttons"
      footnote: "Buttons support a wide variety of input parameters that get dynamically serialized in the inspector for the user to tweak."
    - name: Advanced Editor Tools graphics-6.png
      alt: "ReadOnly fields"
      footnote: "Minor QOL additions. Disable fields so that other team members won't change your values on accident."
    - name: Advanced Editor Tools graphics-7.png
      alt: "Combine Layout Properties"
      footnote: "You can combine columns and foldouts. In this example two columns are nested inside a foldout."
    - name: Advanced Editor Tools graphics-8.png
      alt: "Layout Styles"
      footnote: "Columns support different default Unity styles (colors, borders, etc.)."
    - name: Advanced Editor Tools graphics-9.png
      alt: "Advanced  Combination"
      footnote: "More complex layout configurations. You can have collapsible columns, and their width gets adjusted automatically."
devImages:
  - id: barrelRoll
    name: Overview/barrelRoll.gif
    alt: "Barrel Roll Animation"
    footnote: "Display of usage of buttons. Here I change the distance and direction of the barrel roll animation."
  - id: foldouts
    name: Overview/foldouts.gif
    alt: "Foldouts Animation"
    footnote: "Display of usage of buttons. Here I change the distance and direction of the barrel roll animation."
  - id: heavyNesting
    name: Overview/heavyNesting.png
    alt: "Heavy Nesting"
    footnote: "This example displays how nested lists are serialized, which is not supported by Unity by default."
  - id: columns
    name: Overview/columns.png
    alt: "Columns Example"
    footnote: "This example displays a useful arrangement of columns."
  - id: foldoutColumns
    name: Overview/foldoutColumns.gif
    alt: "Mixed Layout Example"
    footnote: "These are possible interactions between foldouts and columns."
  - id: advancedDataTypes
    name: Overview/advancedDataTypes.png
    alt: "Other datatypes examples"
    footnote: "Other examples of lists of data types not supported by Unity by default."
---
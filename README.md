# ComputingProject

# TOOLS ADDED
- ImportPicture, a tool to import an image from the computer
- EditableShape, a tool to draw shapes made or vertexes and allows you to edit them 
- Eraser, a tool to erase what drawn in the canvas 
- TextInput, a tool to add text on the canvas wherever mouse is clicked 
- Slider, a slider on every tool to change the width of the drawing

# TO DOs
# IMPORTPICTURE - and how to change the size and not cover the canvas but become the canvas space
# EDITABLESHAPE - to Fill shape with colours only if selected if not do not fill, implement "clear" functionality to affect the whole canvas and not just the last shape. When we click on finish shape before clicking again on edit shape the array gets saved with the ellipses, we want it to remove the ellipses when finished the shape. 
# ERASER - to no set all color white for all other feauture. 
# DESIGN, UI, CSS
- restyle buttons 
- give to the slider an ellipse or a text to show user how big the eraser is (width, thickness, ...)
- Rename the app
# FINAL WRITTEN REPORT 900/1200 WORDS

# FUNCTIONALITIES TO ADD as ideas 
- Symmetrical shapes
- Logos/brands
- ShareImage feauture (via email or something..).
- SaveImage as/export as PNG or whatever format.
- Color picker/color palette to implement, More colors?
- Different lines (zig zags, or curvy lines or whatever...)


# PROGRESS TRACKER: 
- 10/03 F&E 11:30 - 14:40: picked drawing app, brainstorming on the project, defined ideas, and mapped down things we wanted to add as feautures, made a timeline of goals and set the standards for design and UI.
- 11/03 F&E 11:30 - 12:30: set up a github repository, implemented LiveShare functionality to VisualStudio to work simultaniously and general chat about the project.
- 12/03 F&E 11:30 - 13:00: work  and implement Editable Shape, OfficeHour tune in with Edward to get some help 
- 13/03 F&E 15:30 - 18:00: progress on editable shape, added the finish and edit buttons
- 15/03 F&E 17:30 - 18:00: tuned in on VCT with Georgios for EditableShape issues
- 16/03 F&E 11:30 - 13:00: tuned in on VCT with Louis to get some more help on FinishShape button, added imputPicture and had hard time to change and manipulate the size and use the picture as canvas.
- 17/03 F&E 11:30 - 13:00 Added a slider to all tools to select the stroke 
- 18/03 F&E 15:30 - 18:00: Added an eraser function and button, reviewed for Peer Review Submission and handed in files.
- 19/03 F&E 15:15 - 16:00 Office hours with Edward to get help on editable shape buttons. Learned about call back tricks, changed "this." to "self" and that managed to work for the "FinishButton" button. 
- 23/03 VCT 15:00 - 16:00 and troubloshooting session with Sokol about import picture but haven't managed to fix it. For some reason the picture is not even showing up. 
Started to implement a inport text function, adding the icon.
16:30 - 17:10 tried to sort out the edit shape button bug with no succes. Booked a office hour with Edward t    he 31st at 4pm.
- 24/03 F&E 17:15 - 17:35 Office hours with Edward. 
Fixed the edit shape button, was an issue of callbacks, we changed the name from this. to self. and instaed calling the loadpixels we changed to updatePixels. 
- 25/03 F&E 15:00 - 16:30 We worked on TextInput, managed to involve the slider with the text size. An issue came up testing switching from tool to tool when the eraser would set the stroke using the slider. Solved it changing a default stroke weight for each of the functions. Implemented an input box beside the slider displaying "input" so the user knows what and where to write and then it will display once the mouse is clicked on the canvas.

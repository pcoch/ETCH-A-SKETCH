# ETCH-A-SKETCH
Part of Odin Project Fundementals course.

First challenge was getting the canvas grid to adjust depending on size (between 10x10 and 100x100)

I could get a very hacky solution by always creating 10000 squares (most needed) + hiding overflow with CSS on the container. This was using Flexbox. But that didn't feel very elegant, not to mentioned its also additional load time to create additional divs.

I refactored the code from Flexbox to Grid which was a good decision. Grid was a good solution using repeat() to dynamically adjust the number of cells in grid with the range input element.

The next challenge was allowing the user to choose RBG, or color selector instead of black to sketch with. This required creating 2 seperate functions. The RGB required an additional function to randomly generate a HEX code and then run that in the for loop of the sketch function.

Would not be complete without gradient background.

Any feedback on the code is always welcome :)

**Completed**
https://gracious-morse-014e40.netlify.app

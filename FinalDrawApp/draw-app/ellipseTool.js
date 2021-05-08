function EllipseToTool() {
	this.icon = "assets/ellipseTo.png";
	this.name = "EllipseTool";

	var startMouseX = -1;
	var startMouseY = -1;
	var sizeX;
	var sizeY;
	var drawing = false;
	stroke(0);
	fill(0);
	//draws the line to the screen 
	this.draw = function () {

		//Change stroke weight to the default value of the tool
		//Change cursor to the currents tool icon

		cursor('assets/freehandCursor.png', 8, 26)

		//Checks if checkbox is checked, if so sets fill to 0
		var checkBox = document.getElementById("myCheck")
		if (checkBox.checked == true) {
			fill(255)
		}
		//only draw when mouse is clicked
		if (mouseIsPressed) {
			//if it's the start of drawing a new ellipse
			if (startMouseX == -1) {
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			} else {
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the line
				//Calculate the size of the ellipse based on new mouse position relative to old one
				sizeX = mouseX - startMouseX;
				sizeY = mouseY - startMouseY;
				ellipse(startMouseX, startMouseY, sizeX, sizeY);
			}

		} else if (drawing) {
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};

	//Checkbox for fill or not
	this.populateOptions = function () {
		select(".options").html(
			'<p class = "options" style = "float: left;">No Fill</p> <input type="checkbox"  style = "margin-top: 25px"; id="myCheck" name = "myCheck">'
		);

	};

}
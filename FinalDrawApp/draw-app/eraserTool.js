//a tool to erase what is drawn to the canvas with varioous thicknesses(?)
function EraserTool() {
	//set an icon and a name for the object
	this.icon = "assets/eraser.png";
	this.name = "eraserTool";
	//this.selectedColour = "white";

	//to smoothly erase we"ll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven"t started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function () {
		//Change stroke weight to the default value of the tool
		//Change cursor to the currents tool icon
		strokeWeight(myRange.value);
		cursor("assets/eraserCursor.png",9 , 26)

		//Set the colour to white as it's how our eraser will work.
		stroke(255);


		//if the mouse is pressed
		if (mouseIsPressed) {
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else {
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else {
			previousMouseX = -1;
			previousMouseY = -1;
		}

		stroke(0);
		
	};

	//Create a HTML Slider with values of 1-100. This will allow us to change the stroke weight(size) of the tool
	this.populateOptions = function () {
		select(".options").html(
			' <p class = "options">Stroke</p><input type="range" min="1" max="100" value="10" class="slider" id="myRange">'
		);
		//click handler
		select("#myRange").mouseClicked(function () {
			strokeWeight(myRange.value); //Pass our slider value into our strokeWeight()
		});

	};
	
}
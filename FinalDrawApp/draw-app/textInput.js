//a tool to input text to the canvas 
function TextInput() {
	//set an icon and a name for the object
	this.icon = "assets/textInput.png";
	this.name = "textInput";

	this.draw = function () {
		//Change stroke weight to the default value of the tool
		//Change cursor to the currents tool icon
		strokeWeight(myRange.value);
		cursor('assets/textCursor.png');

		if (this.mousePressOnCanvas() && mouseIsPressed) {
			loadPixels();
			if (mouseIsPressed) {
				var posX = mouseX;
				var posY = mouseY;
			}
			strokeWeight(1);
			var size = Math.floor(myRange.value);
			textSize(size); //Pass our slider value into our strokeWeight()
			text(fname.value, posX, posY);
		}
	}


	//Create a HTML Slider with values of 1-100. This will allow us to change the stroke weight(size) of the tool
	this.populateOptions = function () {
		select(".options").html(
			' <p class = "options" style = "padding-left: 12rem;">Stroke</p> <input type="text" id="fname" name="fname" placeholder="Input"> <input type="range" min="1" max="100" value="10" class="slider" id="myRange">',
		);

	};


	//Check if the mouse is on canvas so we don't draw while editing the values
	this.mousePressOnCanvas = function () {
		if ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height)) {

			return true;
		} else

			return false;
	}
}
//a tool to draw many dots like a spray can effect
function SprayCanTool() {

	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.png";


	var points = 13;
	var spread = 10;
	stroke(0);
	fill(0);
	this.draw = function () {
		//Change stroke weight to the default value of the tool
		//Change cursor to the currents tool icon
		strokeWeight(myRange.value);
		cursor('assets/sprayCanCursor.png')

		var r = random(5, 10);
		if (mouseIsPressed) {
			for (var i = 0; i < points; i++) {
				point(random(mouseX - spread, mouseX + spread),
					random(mouseY - spread, mouseY + spread));
			}
		}
	};


	//slider button for stroke 
	this.populateOptions = function () {
		select(".options").html(
			' <p class = "options">Stroke</p> <input type="range" min="1" max="10" value="1" class="slider" id="myRange">'
		);

	};
}
function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var points = 13;
	var spread = 10;
	stroke(0);
	fill(0);
	this.draw = function(){
		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread),
                      random(mouseY-spread, mouseY+spread));
			}
		}
	};
	this.populateOptions = function() {
		select(".options").html(
			'<input type="range" min="1" max="10" value="1" class="slider" id="myRange">'
			);
		//click handler
		select("#myRange").mouseClicked(function() {
			//ellipse(mouseX, mouseY, myRange.value, myRange.value);
            strokeWeight(myRange.value);
            });
	};
}

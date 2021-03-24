//a tool to input text to the canvas 
function TextInput(){
	//set an icon and a name for the object
	this.icon = "assets/textInput.png";
	this.name = "textInput";


    this.draw = function(){
    input = createInput();
    input.position(200,200)
    
    

	//Create a HTML Slider with values of 1-100. This will allow us to change the stroke weight(size) of the tool
	this.populateOptions = function() {
		select(".options").html(
			'<input type="range" min="1" max="100" value="10" class="slider" id="myRange">'
			);
		//click handler
		select("#myRange").mouseClicked(function() {
            strokeWeight(myRange.value); //Pass our slider value into our strokeWeight()
            });

        };
    }
}
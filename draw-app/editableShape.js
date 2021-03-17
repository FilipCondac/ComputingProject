//a tool to create a shape made of vertexes with a finish shape and edit shape button 


//FOR FILIP - VCT 15/3 
//FOR FINISH SHAPE EXAMPLE MADE A BOOLEAN SAYING DRAWING==FALSE, 
//and if mouse is pressed= false and is helpers.inCanvas (so only if the mouse is on the canvas)
// then finishdrawing function is called
//conditional to indicate that end shape is
//selected and something to save the shape and if the shape is being created we need something to
// we can clear the array when end shape is pressed 

//add REDO and UNDO function buttons 

//we should start writing down the report with like prgresses and management and goals and such 

function EditableShape() {

    this.name = "Editable Shape";
    this.icon = "assets/editableShape.png";

    this.editButton;
    this.finishButton;

    //where was the mouse on the last time draw was called.
	//set it to -1 to begin with
    //NEW CODE
	var previousMouseX = -1;
	var previousMouseY = -1;
    var drawing = true;

     
      stroke(0);
      fill(0);

    this.editMode = false;
    this.currentShape = [];
    this.shapes = [];


    this.setup = function () {
        
        background(255);
        loadPixels();
        noFill();

        this.editButton = createButton('Edit Shape');
        this.editButton.postion(200,200);
        this.editButton.mousePressed(function(){
            if(this.editMode){
                this.editMode = false;
                this.editButton.html("Edit Shape")
            }
            else{
                this.editMode = true;
                this.editButton.html("Add Vertices");
            }
        })
           
       
        //-------------------------------------------------------------------------
    }

    this.draw = function () {
        if (this.mousePressOnCanvas() && mouseIsPressed) {
            this.currentShape.push({
                x: mouseX,
                y: mouseY
            });

        }

        beginShape();
        for (var i = 0; i < this.currentShape.length; i++) {
            vertex(
                this.currentShape[i].x,
                this.currentShape[i].y);
        }
        
        endShape();
    }

    this.mousePressOnCanvas = function () {
        if ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height)) {

            return true;
        }

        return false;
    }

    	//when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};

	//adds a button and click handler to the options area. When clicked
	//toggle the line of symmetry between horizonatl to vertical
	this.populateOptions = function() {
		select(".options").html(
			"<button id='finishButton'>Finish Shape</button> <button id='editButton'>Edit Shape</button> ");
		//click handler
		select("#finishButton").mouseClicked(function() {
                drawing == false;
                
                this.shapes = [];
                this.shapes.push(this.currentShape); 
                // this.currentShape = [];   


            console.log("working");
            });
	};


}
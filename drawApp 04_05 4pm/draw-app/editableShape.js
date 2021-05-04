//a tool to create a shape made of vertexes with a finish shape and edit shape button 
function EditableShape() {

    this.name = "Editable Shape";
    this.icon = "assets/editableShape.png";

    this.editButton;
    this.finishButton;

    this.editMode = false;
    this.currentShape = [];
    //this.shapes = [];


    this.setup = function () {

        background(255);
        loadPixels();
        noFill();

    }

    this.draw = function () {
        noFill();

        //Checks if mouse is pressed and on canvas checking function in order to draw
        //This prevents us from drawing outside the canvas
        if (this.mousePressOnCanvas() && mouseIsPressed){
            if(this.editMode == false){
              //This will push our current mouse positions into an array which will create a vertex when called
            this.currentShape.push({
                x: mouseX,
                y: mouseY  
                });
            }else{
                //beginShape();
                for (var i = 0; i < this.currentShape.length; i++){
                    if(dist(this.currentShape[i].x, this.currentShape[i].y, mouseX, mouseY) < 20){
                    this.currentShape[i].x = mouseX;
                    this.currentShape[i].y = mouseY
                    }
                    // endShape();
                    // loadPixels();
                };
            };
        }
        

        //Call our points in the array in order to create a vertex
        updatePixels();
        beginShape();
        for (var i = 0; i < this.currentShape.length; i++) {
            vertex(
                this.currentShape[i].x,
                this.currentShape[i].y);
            if(this.editMode){
            fill('red');
                    ellipse(this.currentShape[i].x, this.currentShape[i].y, 10);
                    noFill();
            }
            endShape();
        }
    };
        //Checks if mouse is within canvas
        this.mousePressOnCanvas = function () {
            if ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height)) {

                return true;
            }
                return false;
        }

        //when the tool is deselected update the pixels to just show the drawing and
        //hide the line of symmetry. Also clear options
        this.unselectTool = function () {
            updatePixels();
            //clear options
            select(".options").html("");
        };
    
    //adds a button and click handler to the options area. When clicked
    //toggle the line of symmetry between horizonatl to vertical
    this.populateOptions = function () {
    
        select(".options").html(
            "<button id='finishButton' class='helperButton'>Finish Shape</button><button id='editButton' class='helperButton'>Edit Shape</button> ");
        var self = this;
        
        select("#finishButton").mouseClicked(function() {
            self.currentShape = [];
            self.editMode = false;
            loadPixels();
        });
   
        select("#editButton").mouseClicked(function () {
            if (self.editMode) {
                self.editMode = false;
                //this.elt.html("Edit Shape")
            } else {
                self.editMode = true;
                //this.elt.html("Add Vertexes")
                //this.elt.outerText = "Add Vertices";
            }
        })

    }
}
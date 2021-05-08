//a tool to create a shape made of vertexes with a finish shape and edit shape button 
function EditableShape() {

    this.name = "Editable Shape";
    this.icon = "assets/editableShape.png";

    this.editButton;
    this.finishButton;

    this.editMode = false;
    this.currentShape = [];

    this.setup = function () {

        background(255);
        loadPixels();
        noFill();

    }

    this.draw = function () {
        //Set no fill to default when using the tool
        noFill();

        //Change stroke weight to the default value of the tool
        //Change cursor to the currents tool icon
        strokeWeight(myRange.value);
        cursor('assets/freehandCursor.png', 8, 26)

        //Checks if mouse is pressed and on canvas checking function in order to draw
        //This prevents us from drawing outside the canvas
        if (this.mousePressOnCanvas() && mouseIsPressed) {
            if (this.editMode == false) {
                //This will push our current mouse positions into an array which will create a vertex when called
                this.currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            } else {
                //This allows us to move the points in edit mode and re-locate them
                for (var i = 0; i < this.currentShape.length; i++) {
                    if (dist(this.currentShape[i].x, this.currentShape[i].y, mouseX, mouseY) < 20) {
                        this.currentShape[i].x = mouseX;
                        this.currentShape[i].y = mouseY
                    }
                };
            };
        }

        //Call our points in the array in order to create a vertex
        updatePixels();
        beginShape();
        //This creates the vertices for our edit mode. It does this at every X point of the array
        for (var i = 0; i < this.currentShape.length; i++) {
            vertex(
                this.currentShape[i].x,
                this.currentShape[i].y);
            if (this.editMode) {
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

    //adds a button and click handler to the options area. 
    this.populateOptions = function () {

        select(".options").html(
            " <p class = 'options' style = 'padding-left: 19rem;'>Stroke</p> <button id='finishButton' class='helperButton'>Finish Shape</button><button id='editButton' class='helperButton'>Edit Shape</button> <input type='range' min='1' max='50' value='2' class='slider' id='myRange'> ");
        var self = this;

        //Create  our finish button which clears the current shape array in order so we can start a new shape
        select("#finishButton").mouseClicked(function () {
            self.editMode = false;
            self.currentShape = [];
            loadPixels();
        });
        //When pressed this allows the edit mode to run
        select("#editButton").mouseClicked(function () {
            if (self.editMode) {
                self.editMode = false;
            } else {
                self.editMode = true;
            }
        });

    }
}
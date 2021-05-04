// //A tool to import a picture from your computer into the drawing app canvas 


// //----------In progress
function ImportPicture() {

  
  this.name = "importPicture";
  this.icon = "assets/importPic.png"

  this.input;
  this.img;

  this.setup = function () {
    this.input = createFileInput(handleFile);
    this.input.position(370, 30)
  }

  this.draw = function () {
    background(255);
    if (this.img) {
      image(this.img, 0, 0, width, height);
    }
  }

  this.handleFile = function (file) {
    print(this.file);
    if (this.file.type === 'image') {
      this.img = createImg(file.data, '');
      this.img.hide();
    } else {
      this.img = null;
    }
  }

  this.populateOptions = function() {
		select(".options").html(
			'<input type="file" id="picture" name="avatar" accept="image/png, image/jpeg">'
			);
		//click handler
		select("#picture").mouseClicked(function() {
          this.input = createFileInput();
            });

	};

}
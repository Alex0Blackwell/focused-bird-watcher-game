class Bird {
  birds = ["Black Bird", "Blue Bird", "Brown Bird", "Dark Blue Bird", "Gray Bird",
           "Green Bird", "Orange Bird", "Tan Bird", "Red Bird", "White Bird",
           "Yellow Bird", "Purple Bird"];
  imgName = ["blackBird.gif", "blueBird.gif","brownBird.gif","darkBlueBird.gif",
             "grayBird.gif","greenBird.gif","orangeBird.gif","tanBird.gif",
             "redBird.gif","whiteBird.gif","yellowBird.gif", "purpleBird.gif"];

  /* gets the index based on a rarity sytem. The index is then used to get the
   * bird name and the bird image name. return birds name */
  getBird() {
    var choose = Math.floor(Math.random()*10);
    this.index = Math.floor(Math.random()*3);
    if(choose < 4) {
    } else if(choose < 7) {
      this.index += 3;
    } else if(choose < 8) {
      this.index += 6;
    } else {
      this.index += 9;
    }
    this.bird = this.birds[this.index];
    this.file = this.imgName[this.index];
  }

  /* get how long the bird will be on the screen for */
  getTime() {

  }

  /* get position of where the bird will be */
  getPosition() {

  }

  /* gets how much this bird will be worth, based on rarity of the bird and
  * clarity of the picture */
  getPrice() {

  }

}


// document.getElementById("myImg").style.filter = "blur(5px)";

function main() {
  var bird = new Bird();
  bird.getBird();
  console.log(bird.index);
  console.log(bird.bird);
  console.log(bird.file);
  document.getElementById("bird").src = `css/imgs/${bird.file}`;

}

main()

class Bird {
  birds = ["Black Bird", "Blue Bird", "Brown Bird", "Dark Blue Bird", "Gray Bird",
           "Green Bird", "Orange Bird", "Tan Bird", "Red Bird", "White Bird",
           "Yellow Bird", "Purple Bird"];

  imgName = ["blackBird.gif", "blueBird.gif","brownBird.gif","darkBlueBird.gif",
             "grayBird.gif","greenBird.gif","orangeBird.gif","tanBird.gif",
             "redBird.gif","whiteBird.gif","yellowBird.gif", "purpleBird.gif"];

  titleWords = ["A wild ", "An elusive ", "The fabled ", "The forgotten ",
                "A seemingly extinct ", "A crazy ", "A shy ", "The legendary ",
                "The mythical "];

  /* gets the index based on a rarity sytem. The index is then used to get the
   * bird name and the bird image name */
  setBird() {
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

  /* choses a random title from the titlewords array and sets it */
  setTitle() {
    var i = Math.floor(Math.random()*this.titleWords.length);
    this.title = this.titleWords[i] + this.birds[this.index] + " has appeared!";
    document.getElementById("birdInfo").innerHTML = this.title;
  }

  /* get how long the bird will be on the screen for */
  setTime() {
    // for index 0, time of 12 s, for index 12, time of 2.7 s
    this.time = Math.floor((10 / (this.index + 1) + 2) * 1000);
  }

  /* gets how much this bird will be worth, based on rarity of the bird and
  * clarity of the picture */
  setPrice() {
    var el = document.getElementById("viewfinder");
    // choppy chop that blur number. There's no good way to do this
    var blurAmount = parseFloat(el.style.filter.split('(')[1].split('px')[0]);
    // linear, index 0 -> $15 index 12 -> $136
    var rawPrice = 10*this.index + 15;
    rawPrice = Math.floor(rawPrice - (blurAmount * 20 + Math.random()*5));

    if(rawPrice < 10)
      rawPrice = 10;

    this.price = rawPrice;
  }

}


// document.getElementById("myImg").style.filter = "blur(5px)";

function birdGen() {
  var bird = new Bird();
  bird.setBird();
  bird.setTitle();
  bird.setTime();
  console.log(bird.time);
  document.getElementById("bird").src = `css/imgs/${bird.file}`;
  setTimeout(function() {
    alert("Hello");
    bird.setPrice();
  }, bird.time);

}

birdGen()

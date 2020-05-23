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
    this.name = this.birds[this.index];
    this.file = this.imgName[this.index];
  }

  /* choses a random title from the titlewords array and sets it */
  setTitle() {
    var i = Math.floor(Math.random()*this.titleWords.length);
    this.title = this.titleWords[i] + this.name + " has appeared!";
    document.getElementById("birdInfo").innerHTML = this.title;
  }

  /* get how long the bird will be on the screen for */
  setTime() {
    // for index 0, time of 12 s, for index 12, time of 2.7 s
    this.time = Math.floor((10 / (this.index + 1) + 2.5) * 1000);
  }

  /* gets the blur of the bird at this time */
  setBlur() {
    var el = document.getElementById("viewfinder");
    this.blur = parseFloat(el.style.filter.split('(')[1].split('px')[0]);
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
    if(blurAmount > 2)
      rawPrice = 0;

    this.price = rawPrice;
  }
}

var timeout;
var bird;

function capture() {
  clearTimeout(timeout);
  bird.setBlur();
  bird.setPrice();
  document.getElementById("viewfinderWrap").style.display = "none";
  document.getElementById("cornerSquare").style.display = "none";
  document.getElementById("photoContainer").style.display = "block";
  document.getElementById("birdInfo").innerHTML = "A peaceful day"
  document.getElementById("captureBtn").disabled = true;

  localStorage.money = Number(localStorage.money) + bird.price;
  document.getElementById("money").innerHTML = "$"+localStorage.money;
  document.getElementById("birdPic").src = `css/imgs/${bird.file}`;
  document.getElementById("photoBirdName").innerHTML = "You took a picture of the "+bird.name+'!';
  document.getElementById("photoPrice").innerHTML = "Based on how blurry the picture was, this earned you "+bird.price+" dollars!";
  // choppy chop that blur number. There's no good way to do this
  var res = "ok.";
  if(bird.blur == 0)
    res = "Perfect!";
  else if(bird.blur < 1)
    res = "Great!";
  else if(bird.blur > 2)
    res = "no Good!";
  document.getElementById("photoBlur").innerHTML = "The picture quality was "+res;
}


function off() {
  document.getElementById("photoContainer").style.display = "none";
  document.getElementById("viewfinderWrap").style.display = "block";
  document.getElementById("cornerSquare").style.display = "block";
  document.getElementById("captureBtn").disabled = false;
  birdGen();
  onStart();
}

function birdGen() {
  document.getElementById("money").innerHTML = "$"+localStorage.money;
  bird = new Bird();
  bird.setBird();
  bird.setTitle();
  bird.setTime();
  document.getElementById("bird").src = `css/imgs/${bird.file}`;
  timeout = setTimeout(function() {
    document.getElementById("viewfinderWrap").style.display = "none";
    document.getElementById("cornerSquare").style.display = "none";
    document.getElementById("gameLoss").style.display = "block";
    document.getElementById("lossLargeText").innerHTML = "Whoops!";
    document.getElementById("LossSmallText").innerHTML = "The "+bird.name+" flew away!";
    document.getElementById("captureBtn").disabled = true;
    setTimeout(function() {
      document.getElementById("captureBtn").disabled = false;
      document.getElementById("gameLoss").style.display = "none";
      document.getElementById("viewfinderWrap").style.display = "block";
      document.getElementById("cornerSquare").style.display = "block";
    }, 1500);
    birdGen();
    onStart();
  }, bird.time);
}

if(!localStorage.money) {
  localStorage.money = 0;
}

birdGen()

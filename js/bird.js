var worldFiles = ["background0.png", "background1.gif"];


class Bird {

  constructor() {
    this.birds = ["Black Bird", "Blue Bird", "Brown Bird", "Dark Blue Bird", "Gray Bird",
    "Green Bird", "Orange Bird", "Tan Bird", "Red Bird", "White Bird",
    "Yellow Bird", "Charles"];

    this.imgName = ["blackBird.gif", "blueBird.gif","brownBird.gif","darkBlueBird.gif",
    "grayBird.gif","greenBird.gif","orangeBird.gif","tanBird.gif",
    "redBird.gif","whiteBird.gif","yellowBird.gif", "purpleBird.gif"];

    this.titleWords = ["A wild ", "An elusive ", "The fabled ", "The forgotten ",
    "A crazy ", "A shy ", "The legendary ", "The mythical "];

    this.rarityWords = ["(Common)", "(Rare)", "(Epic)", "(Legendary)"];
  }

  /* gets the index based on a rarity sytem. The index is then used to get the
   * bird name and the bird image name */
   setBird() {
     var rarityArr = [];
     var rarityRaw, range, numToAdd;
     var birdsBought = Number(localStorage.birdsBought);

     for(let i = 0; i < birdsBought; i++) {
       if(i < 3)
         numToAdd = 4;
       else if(i < 6)
         numToAdd = 3;
       else if(i < 9)
         numToAdd = 2;
       else if(i < 12)
         numToAdd = 1;

       for(let j = 0; j < numToAdd; j++) {
         rarityArr.push(i)
       }
     }

     this.index = rarityArr[Math.floor(Math.random()*rarityArr.length)]
     if(this.index < 3) {
       this.rarity = this.rarityWords[0].fontcolor("#80ff86");
     } else if(this.index < 6) {
       // "Dark Blue Bird", "Gray Bird", "Green Bird"
       this.rarity = this.rarityWords[1].fontcolor("#8fc7ff");
     } else if(this.index < 9) {
       // "Orange Bird", "Tan Bird", "Red Bird"
       this.rarity = this.rarityWords[2].fontcolor("#cea1ff");
     } else if(this.index < 12) {
       // "White Bird", "Yellow Bird", "Purple Bird"
       this.rarity = this.rarityWords[3].fontcolor("#fff454");
     }
     this.name = this.birds[this.index];
     this.file = this.imgName[this.index];
   }

  /* choses a random title from the titlewords array and sets it */
  setTitle() {
    var i = Math.floor(Math.random()*this.titleWords.length);
    this.title = this.titleWords[i] + this.name + " has appeared!";
    document.getElementById("birdInfo").innerHTML = this.title;
    document.getElementById("rareId").innerHTML = this.rarity;
  }

  /* get how long the bird will be on the screen for */
  setTime() {
    // for index 0, time of 12 s, for index 12, time of 2.7 s
    this.time = Math.floor((10 / (this.index + 1) + 1.5) * 1000);
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

class NightAnimal {

  constructor() {
    this.animals = ["Purple Bat", "White Bunny", "Dizzy Owl", "Red Fox"];

    this.imgName = ["bat.gif", "bunny.gif", "owl.gif", "fox.gif"];

    this.titleWords = ["A wild ", "An elusive ", "The fabled ", "The forgotten ",
    "A crazy ", "A shy ", "The legendary ", "The mythical "];

    this.rarityWords = ["(Common)", "(Rare)", "(Epic)", "(Legendary)"];
  }

  /* gets the index based on a rarity sytem. The index is then used to get the
   * animal name and the animal image name */
   setAnimal() {
     var rarityArr = [];
     var rarityRaw, range, numToAdd;
     var animalsBought = Number(localStorage.nightAnimalsBought);

     for(let i = 0; i < animalsBought; i++) {
       if(i < 1)
         numToAdd = 4;
       else if(i < 2)
         numToAdd = 3;
       else if(i < 3)
         numToAdd = 2;
       else if(i < 4)
         numToAdd = 1;

       for(let j = 0; j < numToAdd; j++) {
         rarityArr.push(i)
       }
     }

     this.index = rarityArr[Math.floor(Math.random()*rarityArr.length)]
     if(this.index < 1) {
       this.rarity = this.rarityWords[0].fontcolor("#80ff86");
     } else if(this.index < 2) {
       this.rarity = this.rarityWords[1].fontcolor("#8fc7ff");
     } else if(this.index < 3) {
       this.rarity = this.rarityWords[2].fontcolor("#cea1ff");
     } else if(this.index < 4) {
       this.rarity = this.rarityWords[3].fontcolor("#fff454");
     }
     this.name = this.animals[this.index];
     this.file = this.imgName[this.index];
   }

  /* choses a random title from the titlewords array and sets it */
  setTitle() {
    var i = Math.floor(Math.random()*this.titleWords.length);
    this.title = this.titleWords[i] + this.name + " has appeared!";
    document.getElementById("birdInfo").innerHTML = this.title;
    document.getElementById("rareId").innerHTML = this.rarity;
  }

  /* get how long the bird will be on the screen for */
  setTime() {
    // for index 0, time of 4 s, for index 4, time of 2.4 s
    this.time = (-0.4*this.index + 3) * 1000;
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
    // linear, index 0 -> $130 index 12 -> $210
    var rawPrice = 20*this.index + 130;
    rawPrice = Math.floor(rawPrice - (blurAmount * 20 + Math.random()*5));

    if(rawPrice < 10)
      rawPrice = 10;
    if(blurAmount > 2)
      rawPrice = 0;

    this.price = rawPrice;
  }
}



var timeout, gotAwayTimeout;
var bird;

function capture() {
  clearTimeout(timeout);
  let ls = localStorage;
  if(ls.selectedWorld == '0') {
    bird.setBlur();
    bird.setPrice();
    var price = bird.price;
    var file = bird.file;
    var name = bird.name;
    var rarity = bird.rarity;
    var blur = bird.blur;

    // check if the next bird can be bought and set the notification
    if(Number(ls.money) >= birdPrices[Number(ls.birdsBought)]) {
      document.getElementById("badge").style.display = "block";
    }
  }
  else if(ls.selectedWorld == '1') {
    animal.setBlur();
    animal.setPrice();
    var price = animal.price;
    var file = animal.file;
    var name = animal.name;
    var rarity = animal.rarity;
    var blur = animal.blur;

    // check if the next animal can be bought and set the notification
    if(Number(ls.money) >= animalPrices[Number(ls.nightAnimalsBought)]) {
      document.getElementById("badge").style.display = "block";
    }
  }

  document.getElementById("viewfinderWrap").style.display = "none";
  document.getElementById("cornerSquare").style.display = "none";
  document.getElementById("photoContainer").style.display = "block";
  document.getElementById("birdInfo").innerHTML = "A peaceful day"
  document.getElementById("rareId").innerHTML = " "
  document.getElementById("captureBtn").disabled = true;

  ls.money = Number(ls.money) + price;

  document.getElementById("money").innerHTML = "$"+ls.money;
  document.getElementById("birdPic").src = `css/imgs/${file}`;
  document.getElementById("photoBirdName").innerHTML = "You took a picture of the "+name+'! '+rarity;
  var blurBonus = "";
  var res = "ok.";
  if(blur == 0) {
    res = "Perfect!";
    ls.money = Number(ls.money) + 15;
    blurBonus = " Plus an "+"extra 15 dollars".fontcolor("#80ff86")+" for perfect picture quality!"
  }
  else if(blur < 1)
    res = "Great!";
  else if(blur > 2)
    res = "no Good!";
  document.getElementById("photoBlur").innerHTML = "The picture quality was "+res;
  document.getElementById("photoPrice").innerHTML = "Based on how blurry the picture was, this earned you "+(price+" dollars").fontcolor("#80ff86")+"!"+blurBonus;
}


function showTutorial() {
  // in case there are existing timeouts
  clearTimeout(timeout);
  clearTimeout(gotAwayTimeout);
  document.getElementById("tutorial").style.display = "block";
  document.getElementById("mainGame").style.display = "none";
}


function play() {
  // turn off tutorial
  document.getElementById("tutorial").style.display = "none";
  // turn off capture
  document.getElementById("photoContainer").style.display = "none";
  // turn off game loss
  document.getElementById("gameLoss").style.display = "none";
  // turn off shop
  document.getElementById("shop").style.display = "none";

  // turn on main game and jump into a game
  document.getElementById("mainGame").style.display = "block";
  document.getElementById("viewfinderWrap").style.display = "block";
  document.getElementById("cornerSquare").style.display = "block";
  document.getElementById("birdInfo").style.display = "block";
  document.getElementById("captureBtn").disabled = false;

  if(localStorage.selectedWorld == '0')
    birdGen();
  else
    nightAnimalGen();

  onStart();
}


function off() {
  document.getElementById("photoContainer").style.display = "none";
  document.getElementById("viewfinderWrap").style.display = "block";
  document.getElementById("cornerSquare").style.display = "block";
  document.getElementById("captureBtn").disabled = false;

  if(localStorage.selectedWorld == '0')
    birdGen();
  else
    nightAnimalGen();

  onStart();
}

function birdGen() {
  document.getElementById("money").innerHTML = "$"+localStorage.money;
  var storeBtn = document.getElementById("storeIcon")
  storeBtn.classList.remove("fa-store-slash");
  storeBtn.classList.add("fa-store");
  document.getElementById("storeBtn").onclick = function() {shop()};

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

    gotAwayTimeout = setTimeout(function() {
      document.getElementById("captureBtn").disabled = false;
      document.getElementById("gameLoss").style.display = "none";
      document.getElementById("viewfinderWrap").style.display = "block";
      document.getElementById("cornerSquare").style.display = "block";
      birdGen();
      onStart();
    }, 1500);
  }, bird.time);
}

function nightAnimalGen() {
  document.getElementById("money").innerHTML = "$"+localStorage.money;
  var storeBtn = document.getElementById("storeIcon")
  storeBtn.classList.remove("fa-store-slash");
  storeBtn.classList.add("fa-store");
  document.getElementById("storeBtn").onclick = function() {shop()};

  animal = new NightAnimal();
  animal.setAnimal();
  animal.setTitle();
  animal.setTime();
  document.getElementById("bird").src = `css/imgs/${animal.file}`;
  timeout = setTimeout(function() {
    document.getElementById("viewfinderWrap").style.display = "none";
    document.getElementById("cornerSquare").style.display = "none";
    document.getElementById("gameLoss").style.display = "block";
    document.getElementById("lossLargeText").innerHTML = "Whoops!";
    document.getElementById("LossSmallText").innerHTML = "The "+animal.name+" got away!";
    document.getElementById("captureBtn").disabled = true;

    gotAwayTimeout = setTimeout(function() {
      document.getElementById("captureBtn").disabled = false;
      document.getElementById("gameLoss").style.display = "none";
      document.getElementById("viewfinderWrap").style.display = "block";
      document.getElementById("cornerSquare").style.display = "block";
      nightAnimalGen();
      onStart();
    }, 1500);
  }, animal.time);
}

function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  } else {
    return;
  }
  var fullBtn = document.getElementById("fullScreenIcon")
  fullBtn.classList.remove("fa-expand");
  fullBtn.classList.add("fa-compress");
  document.getElementById("fullScreenBtn").onclick = function() {closeFullscreen()};
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    return;
  }
  var fullBtn = document.getElementById("fullScreenIcon")
  fullBtn.classList.remove("fa-compress");
  fullBtn.classList.add("fa-expand");
  document.getElementById("fullScreenBtn").onclick = function() {openFullscreen()};
}


function main() {
  let ls = localStorage;
  // need to do each one because some were added later
  if(!ls.birdsBought) ls.birdsBought = 3;
  if(!ls.worldsBought) ls.worldsBought = 1;
  if(!ls.selectedWorld) ls.selectedWorld = 0;
  if(!ls.nightAnimalsBought) ls.nightAnimalsBought = 1;

  if(!ls.money) {
    // first log-on
    ls.money = 0;
    document.getElementById("viewfinder").style.backgroundImage = `url('css/imgs/background0.png')`;
    showTutorial();
  }
  else {
    document.getElementById("viewfinder").style.backgroundImage = `url('css/imgs/${worldFiles[localStorage.selectedWorld]}')`;
    /* this is the money line here, just implement selected world and you still need to add buying and how that refreshes whay
    world is selected */
    if(localStorage.selectedWorld == '0')
      birdGen();
    else
      nightAnimalGen();
  }
}


main();

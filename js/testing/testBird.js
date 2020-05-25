class Bird {

  constructor() {
    this.birds = ["Black Bird", "Blue Bird", "Brown Bird", "Dark Blue Bird", "Gray Bird",
    "Green Bird", "Orange Bird", "Tan Bird", "Red Bird", "White Bird",
    "Yellow Bird", "Purple Bird"];

    this.imgName = ["blackBird.gif", "blueBird.gif","brownBird.gif","darkBlueBird.gif",
    "grayBird.gif","greenBird.gif","orangeBird.gif","tanBird.gif",
    "redBird.gif","whiteBird.gif","yellowBird.gif", "purpleBird.gif"];

    this.titleWords = ["A wild ", "An elusive ", "The fabled ", "The forgotten ",
    "A seemingly extinct ", "A crazy ", "A shy ", "The legendary ",
    "The mythical "];

    this.rarityWords = ["(Common)", "(Rare)", "(Epic)", "(Legendary)"];
  }

  /* gets the index based on a rarity sytem. The index is then used to get the
   * bird name and the bird image name */
  setBird(birdsBought) {
    var rarityArr = [];
    var rarityRaw, range, numToAdd;

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
    //document.getElementById("birdInfo").innerHTML = this.title;
    //document.getElementById("rareId").innerHTML = this.rarity;
  }

  /* get how long the bird will be on the screen for */
  setTime() {
    // for index 0, time of 12 s, for index 12, time of 2.7 s
    this.time = Math.floor((10 / (this.index + 1) + 1.5) * 1000);
  }

  /* gets the blur of the bird at this time */
  setBlur() {
    //var el = document.getElementById("viewfinder");
    //this.blur = parseFloat(el.style.filter.split('(')[1].split('px')[0]);
  }

  /* gets how much this bird will be worth, based on rarity of the bird and
  * clarity of the picture */
  setPrice(blurAmount) {
    //var el = document.getElementById("viewfinder");
    // choppy chop that blur number. There's no good way to do this
    //var blurAmount = parseFloat(el.style.filter.split('(')[1].split('px')[0]);
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


module.exports = Bird;

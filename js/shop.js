var previousAlert;
var birdPrices = [0, 0, 0, 100, 250, 400, 700, 1000, 1250, 2000, 2500, 4000];
var animalPrices = [4250, 5000, 6000, 10000];
var worldPrices = [0, 8500];
var worldNames = ["World of Light", "World of Dark"];

function buy(index, selected) {
  var el;
  let ls = localStorage;
  var buyBird = new Bird;
  var buyAnimal = new NightAnimal;
  birdsBought = Number(ls.birdsBought);
  animalsBought = Number(ls.nightAnimalsBought);
  worldsBought = Number(ls.worldsBought);
  clearTimeout(previousAlert);
  document.getElementById("alert-buy").style.display = "none";
  document.getElementById("alert-bought").style.display = "none";
  document.getElementById("alert-bought").style.display = "none";
  document.getElementById("alert-not-buy").style.display = "none";

  if( selected == "bird" && index < birdsBought || selected == "animal" && index < animalsBought
     || selected == "world" && index < worldsBought) {
    // then this bird has been bought and let's show some info
    let bold, body;
    if(selected == "bird") {
      bold = buyBird.birds[index].toUpperCase();
      body = ": You own this bird!";
    }
    else if(selected == "animal") {
      bold = buyAnimal.animals[index].toUpperCase();
      body = ": You own this animal!";
    }
    else if(selected == "world") {
      bold = worldNames[index];
      body = ": you are here.";
      // if we're not at the selected world let's load it
      if(ls.selectedWorld != index) {
        ls.selectedWorld = index;
        body = ": moving here!";
        shop();
      }
    }

    el = document.getElementById("alert-bought");
    document.getElementById("alert-bought-bold").innerHTML = bold;
    document.getElementById("alert-bought-fill").innerHTML = body;
    el.style.display = "block";
    previousAlert = setTimeout(function() {
      el.style.display = "none";
    }, 2000);
  }
  else if(selected == "bird" && index == birdsBought && Number(ls.money) >= birdPrices[index]
          || selected == "animal" && index == animalsBought && Number(ls.money) >= animalPrices[index]
          || selected == "world" && index == worldsBought && Number(ls.money) >= worldPrices[index]) {
    // then this item can be bought

    let res;
    if(selected == "bird") {
      res = " You can now catch the "+buyBird.birds[index];
      ls.birdsBought = Number(ls.birdsBought) + 1;
      ls.money = Number(ls.money) - birdPrices[index];
    }
    else if(selected == "animal") {
      res = " You can now catch the "+buyAnimal.animals[index];
      ls.nightAnimalsBought = Number(ls.nightAnimalsBought) + 1;
      ls.money = Number(ls.money) - animalPrices[index];
    }
    else if(selected == "world") {
      res = " You can now enter the "+worldNames[index];
      ls.worldsBought = Number(ls.worldsBought) + 1;
      ls.money = Number(ls.money) - worldPrices[index];
    }


    el = document.getElementById("alert-buy");
    document.getElementById("alert-buy-bold").innerHTML = "NICE!"
    document.getElementById("alert-buy-fill").innerHTML = res;

    // ls.birdsBought = Number(ls.birdsBought) + 1;
    // ls.money = Number(ls.money) - birdPrices[index];
    document.getElementById("money").innerHTML = '$'+Number(ls.money);
    // for setting the notification
    if(Number(ls.money) >= birdPrices[Number(ls.birdsBought)] && ls.selectedWorld == 0 ||
       Number(ls.money) >= animalPrices[Number(ls.nightAnimalsBought)] && ls.selectedWorld == 1 ||
       Number(ls.money) >= worldPrices[Number(ls.worldsBought)]) {
      document.getElementById("badge").style.display = "block";
    } else {
      document.getElementById("badge").style.display = "none";
    }
    shop();

    el.style.display = "block";
    previousAlert = setTimeout(function() {
      el.style.display = "none"
    }, 2000);
  }
  else if(selected == "bird" && index > birdsBought ||
          selected == "animal" && index > animalsBought) {
    // then birds/animals must be bought before this one is bought
    let res;
    if(selected == "bird")
      res = " Buy the birds before this one!";
    else if(selected == "animal")
      res = " Buy the animals before this one!";
    el = document.getElementById("alert-not-buy");
    document.getElementById("alert-not-buy-bold").innerHTML = "WHOOPS!"
    document.getElementById("alert-not-buy-fill").innerHTML = res;

    el.style.display = "block";
    previousAlert = setTimeout(function() {
      el.style.display = "none"
    }, 2000);

  }
  else if(selected == "bird" && Number(ls.money) < birdPrices[index] ||
          selected == "animal" && Number(ls.money) < animalPrices[index] ||
          selected == "world" && Number(ls.money) < worldPrices[index]) {
    el = document.getElementById("alert-not-buy");
    document.getElementById("alert-not-buy-bold").innerHTML = "WHOOPS!"
    document.getElementById("alert-not-buy-fill").innerHTML = " Not enough money!";
    el.style.display = "block";
    previousAlert = setTimeout(function() {
      el.style.display = "none"
    }, 2000);
  }

}



function shop() {
  clearTimeout(timeout);
  clearTimeout(gotAwayTimeout);
  document.getElementById("gameLoss").style.display = "none";
  document.getElementById("captureBtn").disabled = true;
  var storeBtn = document.getElementById("storeIcon")
  storeBtn.classList.remove("fa-store");
  storeBtn.classList.add("fa-store-slash");
  document.getElementById("storeBtn").onclick = function() {closeShop()};
  var rawPrice, thisPrice, color, birdName, parent;

  // spawn the birds
  if(localStorage.selectedWorld == '0') {
    var spawnBird = new Bird;
    document.getElementById("shopAnimals").style.display = "none";
    document.getElementById("shopBirds").style.display = "flex";
    parent = document.getElementById("shopBirds").children;
    for(var i = 0; i < parent.length; i++) {
      if(i+1 <= localStorage.birdsBought) {
        if(i < 3)
        color = "#80ff86";
        else if(i < 6)
        color = "#8fc7ff";
        else if(i < 9)
        color = "#cea1ff";
        else
        color = "#fff454";

        birdName = spawnBird.birds[i].fontcolor(color);

        parent[i].children[0].src = "css/imgs/"+spawnBird.imgName[i];  // image of bird
        parent[i].children[1].innerHTML = birdName;  // name of bird
      } else {
        parent[i].children[0].src = "css/imgs/questionmark.png";  // not unlocked
        rawPrice = '$'+birdPrices[i];

        if(i == Number(localStorage.birdsBought)
        && birdPrices[i] <= Number(localStorage.money)) {
          thisPrice = rawPrice.fontcolor("#80ff86");
        } else {
          thisPrice = rawPrice.fontcolor("#ff6b6b");
        }
        parent[i].children[1].innerHTML = thisPrice;  // price of bird
      }
    }
  }
  else if(localStorage.selectedWorld == '1') {
    // then spawn the night animals
    var spawnAnimal = new NightAnimal;
    document.getElementById("shopBirds").style.display = "none";
    document.getElementById("shopAnimals").style.display = "flex";
    parent = document.getElementById("shopAnimals").children;
    for(var i = 0; i < parent.length; i++) {
      if(i+1 <= localStorage.nightAnimalsBought) {
        if(i < 1)
        color = "#80ff86";
        else if(i < 2)
        color = "#8fc7ff";
        else if(i < 3)
        color = "#cea1ff";
        else
        color = "#fff454";

        animalName = spawnAnimal.animals[i].fontcolor(color);

        parent[i].children[0].src = "css/imgs/"+spawnAnimal.imgName[i];  // image of animal
        parent[i].children[1].innerHTML = animalName;  // name of animal
      } else {
        parent[i].children[0].src = "css/imgs/questionmark.png";  // not unlocked
        rawPrice = '$'+animalPrices[i];

        if(i == Number(localStorage.nightAnimalsBought)
        && animalPrices[i] <= Number(localStorage.money)) {
          thisPrice = rawPrice.fontcolor("#80ff86");
        } else {
          thisPrice = rawPrice.fontcolor("#ff6b6b");
        }
        parent[i].children[1].innerHTML = thisPrice;  // price of animal
      }
    }
  }

  // spawn the worlds
  parent = document.getElementById("shopWorlds").children;
  // notice we skip by 2 to jump over the <p></p> tag
  for(var i = 0; i < parent.length; i++) {
    if(i < localStorage.worldsBought) {
      parent[i].children[0].src = "css/imgs/"+worldFiles[i];  // image of background
      parent[i].children[1].innerHTML = worldNames[i];
    } else {
      parent[i].children[0].src = "css/imgs/questionmark.png";
      rawPrice = '$'+worldPrices[i];

      if(i == Number(localStorage.worldsBought)
      && worldPrices[i] <= Number(localStorage.money)) {
        thisPrice = rawPrice.fontcolor("#80ff86");
      } else {
        thisPrice = rawPrice.fontcolor("#ff6b6b");
      }
      parent[i].children[1].innerHTML = thisPrice;  // price of world
    }
  }


  document.getElementById("viewfinderWrap").style.display = "none";
  document.getElementById("cornerSquare").style.display = "none";
  document.getElementById("birdInfo").style.display = "none";
  document.getElementById("photoContainer").style.display = "none";
  document.getElementById("rareId").innerHTML = " "
  document.getElementById("shop").style.display = "block";
}


function closeShop() {
  document.getElementById("shop").style.display = "none";
  document.getElementById("viewfinderWrap").style.display = "block";
  document.getElementById("cornerSquare").style.display = "block";
  document.getElementById("birdInfo").style.display = "block";
  document.getElementById("captureBtn").disabled = false;
  document.getElementById("viewfinder").style.backgroundImage = `url('css/imgs/${worldFiles[localStorage.selectedWorld]}')`;
  onStart();

  if(localStorage.selectedWorld == '0')
    birdGen();
  else
    nightAnimalGen();

}

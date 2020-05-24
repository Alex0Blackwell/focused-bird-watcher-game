var previousAlert;
var birdPrices = [0, 0, 0, 100, 250, 400, 700, 1000, 1250, 2000, 2500, 4000];

function buy(index) {
  var el;
  let ls = localStorage;
  birdsBought = Number(ls.birdsBought);
  clearTimeout(previousAlert);

  if(index < birdsBought) {
    // then this bird has been bought and let's show some info
    el = document.getElementById("alert-bought");
    document.getElementById("alert-bought-bold").innerHTML = bird.birds[index]
    document.getElementById("alert-bought-fill").innerHTML = " You own this bird!";
    el.style.display = "block";
    previousAlert = setTimeout(function(){
      $("#alert-bought").fadeOut();
    }, 2000);
  }
  else if(index == birdsBought && Number(ls.money) >= birdPrices[index]) {
    // then this item can be bought
    el = document.getElementById("alert-buy");
    document.getElementById("alert-buy-bold").innerHTML = "Nice!"
    document.getElementById("alert-buy-fill").innerHTML = " You can now catch the "+bird.birds[index];
    ls.birdsBought = Number(ls.birdsBought) + 1;
    ls.money = Number(ls.money) - birdPrices[index];
    document.getElementById("money").innerHTML = '$'+Number(ls.money);
    shop();

    // document.getElementById("bird"+(index+1)).src = bird.imgName[i];
    document.getElementById("alert-buy").style.display = "block";
    previousAlert = setTimeout(function(){
      $("#alert-buy").fadeOut();
    }, 2000);
  }
  else if(index > birdsBought) {
    // then birds must be bought before this one is bought
    el = document.getElementById("alert-not-buy");
    document.getElementById("alert-not-buy-bold").innerHTML = "Whoops!"
    document.getElementById("alert-not-buy-fill").innerHTML = " Buy the birds before this one!";
    el.style.display = "block";
    previousAlert = setTimeout(function() {
      $("#alert-not-buy").fadeOut();
    }, 2000);
  }
  else if(Number(ls.money) < birdPrices[index]) {
    el = document.getElementById("alert-not-buy");
    document.getElementById("alert-not-buy-bold").innerHTML = "Whoops!"
    document.getElementById("alert-not-buy-fill").innerHTML = " Not enough money!";
    el.style.display = "block";
    previousAlert = setTimeout(function() {
      $("#alert-not-buy").fadeOut();
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
  var rawPrice, thisPrice, color, birdName;

  var parent = document.getElementById("shopBirds").children;
  console.log(parent.length);
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

      birdName = bird.birds[i].fontcolor(color);


      parent[i].style.backgroundcolor = color;
      parent[i].children[0].src = "css/imgs/"+bird.imgName[i];  // image of bird
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
  birdGen();
  // document.getElementById("photoContainer").style.display = "block";

}

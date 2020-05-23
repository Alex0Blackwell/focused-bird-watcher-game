var tooIn = (Math.random() > 0.5);

function focusFn(focusIn) {
  var el = document.getElementById("viewfinder");
  // choppy chop that blur number. There's no good way to do this
  var currAmount = parseFloat(el.style.filter.split('(')[1].split('px')[0]);

  if(focusIn && tooIn) {
    currAmount += 0.5;
  } else if(focusIn && !tooIn) {
    if(currAmount <= 0.5) {
      currAmount -= 0.25;
    } else {
      currAmount -= 0.5;
    }
    if(currAmount < 0) {
      tooIn = true;
      currAmount = 0.25;
    }
  } else if(!focusIn && tooIn) {
    if(currAmount <= 0.5) {
      currAmount -= 0.25;
    } else {
      currAmount -= 0.5;
    }
    if(currAmount < 0) {
      tooIn = false;
      currAmount = 0.5;
    }
  } else if(!focusIn && !tooIn) {
    currAmount += 0.5;
  }

  el.style.filter = `blur(${currAmount}px)`;

}


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        focusFn(true);
    }
    else if(event.keyCode == 39) {
        focusFn(false);
    }
});

function onStart() {

  document.getElementById("viewfinder").style.filter = "blur(5px)"
  console.log(document.getElementById("viewfinder").style.filter);
  tooIn = (Math.random() > 0.5);
}

onStart();

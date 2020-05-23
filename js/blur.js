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
  // <- or 'a'
  if(event.keyCode == 37 || event.keyCode == 65) {
      focusFn(true);
  }
  // -> or 'd'
  if(event.keyCode == 39 || event.keyCode == 68) {
      focusFn(false);
  }
  // up or 'w'
  if(event.keyCode == 38 || event.keyCode == 87) {
    capture();
  }
});


function onStart() {
  document.getElementById("viewfinder").style.filter = "blur(5px)"
  tooIn = (Math.random() > 0.5);
}

onStart();

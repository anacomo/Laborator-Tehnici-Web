window.onload = function(){
var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;
tStart = 0;
tStop = 0;
tReset = 0;
tAcceleratie = 0;

// Move the image on screen with 10px
function dogWalk() {
  var img = document.getElementsByTagName("img")[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft + movePixels + "px";
  // reset image position to start
  if (currentLeft > window.innerWidth - img.width) {
    img.style.left = "0px";
  }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
  tStart = performance.now();
  dogTimer = window.setInterval(dogWalk, delayMs);
}
function acceleratie(){
  tAcceleratie = performance.now();
  movePixels +=3;
}
function stopDog(){
    tStop = performance.now();
    var img = document.getElementsByTagName("img")[0];
    img.style.left = "0" + "px";
    resetSpeed();
    clearInterval(dogTimer);
}
function resetSpeed(){
  tReset = performance.now();
  movePixels = 10;
}
function expire(){
  t = performance.now();
  if(t - tStart > 0 && t - tStop > 0 && t - tAcceleratie > 0 && t - tReset > 0){
    alert("Sesiune expirata!");
    stopDog();
  }
}

let butonStart = document.getElementById("start-button");
butonStart.onclick = function(){
    startDogWalk()
};

let butonStop = document.getElementById("stop-button");
butonStop.onclick = function(){
    stopDog()
};
let butonAcc = document.getElementById("speed-button");
butonAcc.onclick = function(){
  acceleratie()
};
var x = document.createElement("button");
var t = document.createTextNode("Reset Speed");
x.appendChild(t);
x.id = "reset-button";
document.getElementById("buttons").appendChild(x);

let butonReset = document.getElementById("reset-button");
butonReset.onclick = function(){
  resetSpeed()
};
this.setTimeout(function(){expire()}, 30000);

}

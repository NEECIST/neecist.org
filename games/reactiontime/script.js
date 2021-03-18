const logoNeec = document.getElementById("logo-neec");
const printTime = document.getElementById("reaction-time");
const startButton = document.getElementById("start-button");
const countdown = document.getElementById("countdown");
const clickBox = document.getElementById("click-box");
const total = document.getElementById("total-clickes");

var startTime = 0;
var clickedTime = 0;
var reactionTime = 0;
var gameStart = false;
var total_clicks = 0;

/**
 * creates a box with random coordinates and records its creation time
 */

function makeBox() {
  var time = Math.random();
  time = time * 3000 + 500;

  setTimeout(() => {
    var top = Math.random();
    var left = Math.random() - 0.5;
    top *= 20;
    left *= 30;

    logoNeec.style.top = top + "vh";
    logoNeec.style.left = left + "vw";

    startTime = Date.now();

    logoNeec.style.display = "block";
  }, time);
}

clickBox.onclick = () => {
  if (startTime === 0 && gameStart) {
    alert("Espera até a imagem aparecer para clicares!");
    total_clicks++;
    total.innerHTML = `Clicks fora do tempo: ${total_clicks}`;
  }
};

logoNeec.onclick = () => {
  clickedTime = Date.now();
  reactionTime = (clickedTime - startTime) / 1000;

  printTime.innerHTML = "O teu tempo de reação é: " + reactionTime + " segundos";
  logoNeec.style.display = "none";
  startButton.style.display = "inline";
};

startButton.onclick = function () {
  this.style.display = "none";
  printTime.innerHTML = "";

  gameStart = true;
  startTime = 0;
  clickedTime = 0;
  reactionTime = 0;
  total_clicks = 0;
  total_clicks = 0;
  total.innerHTML = `Clicks fora do tempo: ${total_clicks}`;

  var t = 3;
  var timer = setInterval(() => {
    countdown.innerHTML = t--;
    if (t < 0) {
      countdown.innerHTML = "";
      makeBox();
      clearInterval(timer);
    }
  }, 1000);
};

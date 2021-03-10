const clickBox = document.getElementById('logo-neec');
const printTime = document.getElementById('reaction-time');
const startButton = document.getElementById('start-button');
const countdown = document.getElementById('countdown');

var clickedTime;
var startTime;
var reactionTime;

/**
 * creates a box with random coordinates and records its creation time
 */

function makeBox() { 
    var time = Math.random();
    time = (time * 3000) + 500;

    setTimeout( () => {
        var top = Math.random();
        var left = Math.random() - 0.5;
        top *= 300;
        left *= 500;

        clickBox.style.top = top + 'px';
        clickBox.style.left = left + 'px';
        
        startTime=Date.now();

        clickBox.style.display = 'block'

    }, time);
}

clickBox.onclick = () => {
    clickedTime = Date.now();
    reactionTime = (clickedTime - startTime) / 1000;

    printTime.innerHTML = 'O teu tempo de reação é: ' + reactionTime + ' segundos';
    clickBox.style.display = 'none';
    startButton.style.display = 'inline';
}

startButton.onclick = function() {
    this.style.display = 'none';
    printTime.innerHTML = '';
    
    var t = 3;
    var timer = setInterval(() => {
        countdown.innerHTML = t--;
        if (t < 0) {
            countdown.innerHTML = '';
            makeBox();
            clearInterval(timer);
        }
    }, 1000);
}
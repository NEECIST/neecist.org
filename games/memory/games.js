var moves = 0;
var picks = [];
var ids = [];
var pairs = 0;
var cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11];
initial_time = Date.now();
final_time = 0;
final_moves = 0;
hide_time = true;

function increment_move(card, id) {
    if (ids.length == 0 || (ids.length == 1 && id != ids[0])) {
        moves += 1;
        document.getElementById("movimentos").innerHTML = moves;
        picks.push(card);
        ids.push(id);
        if (picks.length == 2) {
            if (picks[0] == picks[1]) {
                matched = true;
                pairs++;
            } else {
                matched = false;
            }
            board_state(matched, pairs, ids);
            picks = [];
            ids = [];
        }
    }
}

async function board_state(matched, pairs, ids) {
    if (matched == true) {
        var item = document.getElementById(ids[0]);
        item.classList.toggle("flipped");
        item.classList.add("paired");
        item.removeEventListener('click', transform);
        item.removeEventListener('click', increment_move);
        var item = document.getElementById(ids[1]);
        item.classList.toggle("flipped");
        item.classList.add("paired");
        item.removeEventListener('click', transform);
        item.removeEventListener('click', increment_move);
    } else {
        for (var i = 0; i < cards.length; i++) {
            var item = document.getElementById(i);
            if (i != ids[0] && i != ids[1]) {
                item.style.pointerEvents = "none";
            }
        }
        await sleep(800);
        for (var i = 0; i < cards.length; i++) {
            var item = document.getElementById(i);
            if (i != ids[0] && i != ids[1]) {
                item.style.pointerEvents = null;
            }
        }
        transform(ids[0]);
        transform(ids[1]);
    }
    if (pairs == 12) {
        clearInterval(temporizador);
        final_time = Date.now() - initial_time;
        final_moves = moves;
        var item = document.getElementsByClassName("stats");
        item[item.length - 1].innerHTML += '<div class="final">RESULTADO FINAL: ' + final_time + ' ms</div>';
        document.getElementById("tempo").innerHTML = timeToString(final_time);
        document.getElementById("movimentos").innerHTML = final_moves;
        document.getElementById("legenda_tempo").innerHTML = "";
    }
}

function start_card_game() {
    shuffle(cards);
    var i = 0;
    for (var i = 0; i < 2; i++) {
        document.getElementById('game').innerHTML += '<div class="row" name="row">';
        for (var j = 0; j < 12; j++) {
            var item = document.getElementsByName("row");
            item[item.length - 1].innerHTML += '<div class="column"><div class="card">';
            var item = document.getElementsByClassName("card");
            item[item.length - 1].id = (i * 12) + j;
            item[item.length - 1].innerHTML += '<p name="marca" id="p0">NEEC</p>';
            item[item.length - 1].innerHTML += '<img src="./assets/cards/0.png" style="display: none;" id="i0" name="img">';
            var item = document.getElementsByName("img");
            item[item.length - 1].src = "./assets/cards/" + cards[(i * 12) + j] + ".png";
            var item = document.getElementsByName("row");
            item[item.length - 1].innerHTML += '</div></div>';
        }
        document.getElementById('game').innerHTML += '</div>';
    }
    var item = document.getElementsByName("marca");
    for (var i = 0; i < cards.length; i++) {
        item[i].id = "p" + i;
    }
    var item = document.getElementsByName("img");
    for (var i = 0; i < cards.length; i++) {
        item[i].id = "i" + i;
    }

    document.querySelectorAll('.card').forEach(item => {
        item.addEventListener('click', event => {
            transform(item.id)
            increment_move(cards[item.id], item.id)
        })
    });

    for (var i = 0; i < cards.length; i++) {
        var item = document.getElementById(i);
        if (i != ids[0] && i != ids[1]) {
            item.style.pointerEvents = "none";
        }
    }
}

function transform(id) {
    var item = document.getElementById(id);
    item.classList.toggle("card");
    item.classList.toggle("flipped");
    var item = document.getElementById("p" + id);
    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
    var item = document.getElementById("i" + id);
    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function start_time() {
    initial_time = Date.now();
    for (var i = 0; i < cards.length; i++) {
        var item = document.getElementById(i);
        if (i != ids[0] && i != ids[1]) {
            item.style.pointerEvents = null;
        }
    }
    var item = document.getElementById("start_btn");
    item.style.display = "none";
    hide_time = false;
}

var temporizador = setInterval(function printTime() {
    let elapsedTime = Date.now() - initial_time;
    var item = document.getElementById("tempo");
    if (hide_time == false) {
        document.getElementById("tempo").innerHTML = Math.floor(elapsedTime / 1000);
    }
}, 1000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMiliSec = (diffInSec - ss) * 10000;
    let ms = Math.floor(diffInMiliSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${ms}`;
}

document.getElementById("movimentos").innerHTML = moves;
document.getElementById("legenda_tempo").innerHTML = " segundos";


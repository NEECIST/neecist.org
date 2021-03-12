/*
 * The animation at the start, made from my previous pen
 * https://codepen.io/EightArmsHQ/pen/HJsav
 */

var typing_text = [
    "O NEEC é uma associação sem fins lucrativos que reúne os estudantes de MEEC do IST. Somos formados por alunos que, através do seu trabalho voluntário, proporcionam diversas atividades aos seus colegas.",
    "No NEEC procuramos ajudar os alunos a integrarem-se no mercado de trabalho e dar formação extra-curricular. Organizamos workshops, estágios de verão, OpenDays, organizamos uma hackathon e muito mais!",
    "O NEEC quer ajudar a complementar o normal percurso escolar, não só dos alunos de Eletrotecnia, como também de todos do IST. Começámos em 2003, e já por quase década e meia temos vindo a crescer para te ajudar.",
    "As NEECTalks são um projeto que consiste na realização de podcasts, sobre tecnologia, inovação e empreendedorismo na engenharia. Pretendemos apresentar alunos, professores, investigadores, empresários, entre outros.",
    "O IST Summer Internships foi implementado tendo em vista facilitar a aproximação entre os alunos do IST e as empresas. Este programa conta com o apoio do Técnico através do Núcleo de Parcerias Empresariais.",
    "Um estágio constitui uma inegável mais-valia no percurso académico de um estudante do Ensino Superior, capacitando-o de valências distintas e complementares à formação adquirida no Instituto Superior Técnico.",
    "Os núcleos que pertencem ao IST Summer Internships têm como principal objetivo a dinamização de várias atividades que visam reforçar a formação curricular dos estudantes, através de, formações, programas de estágios, etc.",
    "Um grupo de estudantes do IST, cujo principal objetivo é organizar um evento gratuito e aberto a uma forte comunidade de estudantes, com a intenção de diminuir a distância entre o mundo empresarial e a vida universitária.",
    "A NEECathon é uma competição cujo objetivo é simular o mundo das start-ups. Os participantes vão ser avaliados não só pelo seu projeto como também pela forma como vendem a sua ideia e como gerem os seus recursos."
]
// The base speed per character
time_setting = 30;
// How much to 'sway' (random * this-many-milliseconds)
random_setting = 100;
// The text to use NB use \n not real life line breaks!
input_text = "Quão rápido consegues escrever?";
// Where to fill up
target_setting = $("#output");

$("#input_text").text(typing_text[Math.floor(Math.random() * typing_text.length)]);

// Launch that function!
type(input_text, target_setting, 0, time_setting, random_setting);

function type(input, target, current, time, random){
  // If the current count is larger than the length of the string, then for goodness sake, stop
	if(current > input.length){
    // Write Complete
		console.log("Complete.");
	}
	else{
	 // console.log(current)
    // Increment the marker
		current += 1;
    // fill the target with a substring, from the 0th character to the current one
		target.text(input.substring(0,current));
    // Wait ...
		setTimeout(function(){
      // do the function again, with the newly incremented marker
			type(input, target, current, time, random);
      // Time it the normal time, plus a random amount of sway
		},time + Math.random()*random);
	}
}

/*
 * The typing test stuff
 */

var character_length = 31;
var index = 0;
var letters =  $("#input_text").val();
var started = false;
var current_string = letters.substring(index, index + character_length);

var charcount = 0;

$("#target").text(current_string);
$(window).keypress(function(evt){
  if(!started){
    start();
    started = true;
  }
  evt = evt || window.event;
  var charCode = evt.which || evt.keyCode;
  var charTyped = String.fromCharCode(charCode);
  if(charTyped == letters.charAt(index) && current_errors == 0){
    charcount ++;
    $("#charcount").text(charcount);

    index ++;
    current_string = letters.substring(index, index + character_length);
    $("#target").text(current_string);
    $("#your-attempt").append(charTyped);
    if(index == letters.length){
      $("#timer").text(timer);
      if(timer == 0){
        timer = 1;
      }
      cpm = Math.round(charcount / (timer / 60));
      $("#cpm").text(cpm);
      stop();
      finished();
    }
  }else{
    $("#your-attempt").append("<span class='wrong'>" + charTyped + "</span>");
    errors ++;
    current_errors ++;
    $("#errors").text(errors);
  }
});

$(window).keydown(function(evt){
    if(started){
        evt = evt || window.event;
        var charCode = evt.which || evt.keyCode;
        if(charCode == 8 && current_errors > 0){
            current_errors --;
            current_text = $("#your-attempt").text().slice(0, -1);
            $("#your-attempt").text(current_text.substring(0, current_text.length-current_errors));
            $("#your-attempt").append("<span class='wrong'>" + current_text.substring(current_text.length-current_errors, current_text.length) + "</span>")
        }
    }
});

var timer = 0;
var cpm = 0;
var errors = 0;
var current_errors = 0;
var interval_timer;

$("#new").click(function(){
  reset();
});

$("#pause").click(function(){
  stop();
});

function start(){
  interval_timer = setInterval(function(){
    timer ++;
    $("#timer").text(timer);
    cpm = Math.round(charcount / (timer / 60));
    $("#cpm").text(cpm);
  }, 1000)
}

function stop(){
  clearInterval(interval_timer);
  started = false;
}

function reset(){
  $("#input_text").blur().hide();;
  $("#your-attempt").text("");
  $("#input_text").text(typing_text[Math.floor(Math.random() * typing_text.length)]);
  index = 0;
  errors = 0;
  current_errors = 0;
  clearInterval(interval_timer);
  started = false;
  letters = $("#input_text").val();
  $("#errors").text("0");
  $("#cpm").text("0");
  $("#timer").text("0");
  $("#charcount").text("0");
  timer = 0;
  charcount = 0;
  cpm = 0;
  current_string = letters.substring(index, index + character_length);
  $("#target").text(current_string);
}

function finished(){
  alert("Congratulations!\nCharacters per minute: " + cpm + "\nCharcount: " + charcount + "\nErrors:" + errors);
}
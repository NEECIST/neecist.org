function isOdd(num) {
  return num % 2;
}

function sort(a, b) {
  return a.points > b.points ? -1 : a.points == b.points ? 0 : 1;
}
function logger(a) {
  //console.log(a);
}

function show(dia) {
  var lista = document.getElementsByTagName("h2");
  var size = lista.length;
  for (a = 0; a < size; a++) {
    lista[a].setAttribute("class", "invisible");
  }
  document.getElementById(dia).classList.remove("invisible");

  document.getElementsByClassName("semana")[0].classList.add("invisible");
  document.getElementsByClassName("segunda")[0].classList.add("invisible");
  document.getElementsByClassName("terca")[0].classList.add("invisible");
  document.getElementsByClassName("quarta")[0].classList.add("invisible");
  document.getElementsByClassName("quinta")[0].classList.add("invisible");
  document.getElementsByClassName("sexta")[0].classList.add("invisible");

  document.getElementsByClassName(dia)[0].classList.remove("invisible");
}
function push(Dia, RT, TR, Mem, Quiz) {
  var size = Dia.length;
  for (a = 0; a < size; a++) {
    if (Dia[a].RT != 0) {
      RT.push({ name: Dia[a].name, name2: Dia[a].name2, RT: Dia[a].RT });
    }
    if (Dia[a].TR != 0) {
      TR.push({ name: Dia[a].name, name2: Dia[a].name2, TR: Dia[a].TR });
    }
    if (Dia[a].Mem != 0) {
      Mem.push({ name: Dia[a].name, name2: Dia[a].name2, Mem: Dia[a].Mem });
    }
    if (Dia[a].Quiz != 0) {
      Quiz.push({ name: Dia[a].name, name2: Dia[a].name2, Quiz: Dia[a].Quiz });
    }
  }
}

function week_socores(geral, jogo) {
  var size = jogo.length;
  if (size != 0) {
    var k = 0;
    while (k < size && k < 10) {
      switch (k) {
        case 0:
          var found = geral.find((element) => element.name == jogo[k].name);
          var dex = geral
            .map(function (e) {
              return e.name;
            })
            .indexOf(jogo[k].name);
          if (found != undefined) {
            geral[dex].points = geral[dex].points + 30;
          } else {
            geral.push({ name: jogo[k].name, name2: jogo[k].name2, points: 30 });
          }
          break;
        case 1:
          var found = geral.find((element) => element.name == jogo[k].name);
          var dex = geral
            .map(function (e) {
              return e.name;
            })
            .indexOf(jogo[k].name);
          if (found != undefined) {
            geral[dex].points = geral[dex].points + 25;
          } else {
            geral.push({ name: jogo[k].name, name2: jogo[k].name2, points: 25 });
          }
          break;
        case 2:
          var found = geral.find((element) => element.name == jogo[k].name);
          var dex = geral
            .map(function (e) {
              return e.name;
            })
            .indexOf(jogo[k].name);
          if (found != undefined) {
            geral[dex].points = geral[dex].points + 20;
          } else {
            geral.push({ name: jogo[k].name, name2: jogo[k].name2, points: 20 });
          }
          break;
        case 3:
        case 4:
          var found = geral.find((element) => element.name == jogo[k].name);
          var dex = geral
            .map(function (e) {
              return e.name;
            })
            .indexOf(jogo[k].name);
          if (found != undefined) {
            geral[dex].points = geral[dex].points + 15;
          } else {
            geral.push({ name: jogo[k].name, name2: jogo[k].name2, points: 15 });
          }
          break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          var found = geral.find((element) => element.name == jogo[k].name);
          var dex = geral
            .map(function (e) {
              return e.name;
            })
            .indexOf(jogo[k].name);
          if (found != undefined) {
            geral[dex].points = geral[dex].points + 10;
          } else {
            geral.push({ name: jogo[k].name, name2: jogo[k].name2, points: 10 });
          }
          break;
      }
      k++;
    }
  }
}

function final_scores(Dia, final_RT, final_TR, final_Mem, final_Quiz) {
  var size = Dia.length;
  //console.log(size);
  for (c = 0; c < size; c++) {
    var found, dex;

    found = final_RT.find((element) => element.name == Dia[c].name);
    dex = final_RT
      .map(function (e) {
        return e.name;
      })
      .indexOf(Dia[c].name);
    //console.log(found);
    if (found != undefined) {
      console.log("Reaction Time Teste", found.name2, found.RT);
      if (found.RT != 0) {
        //console.log("New Value");
        if (Dia[c].RT != 0) {
          var higher = found.RT < Dia[c].RT ? found : Dia[c];
          console.log("Reaction Time", higher.name2, higher.RT, Dia[c].RT, found.RT);
          final_RT[dex].RT = higher.RT;
        }
      }
    } else {
      if (Dia[c].RT != 0) final_RT.push({ name: Dia[c].name, name2: Dia[c].name2, RT: Dia[c].RT });
    }

    found = final_TR.find((element) => element.name == Dia[c].name);
    dex = final_TR
      .map(function (e) {
        return e.name;
      })
      .indexOf(Dia[c].name);
    if (found != undefined) {
      if (found.TR != 0) {
        if (Dia[c].TR != 0) {
          var higher = found.TR < Dia[c].TR ? Dia[c] : found;
          console.log("Typing Race", higher.name2, higher.TR, Dia[c].TR, found.TR);
          final_TR[dex].TR = higher.TR;
        }
      }
    } else {
      if (Dia[c].TR != 0) final_TR.push({ name: Dia[c].name, name2: Dia[c].name2, TR: Dia[c].TR });
    }

    found = final_Mem.find((element) => element.name == Dia[c].name);
    dex = final_Mem
      .map(function (e) {
        return e.name;
      })
      .indexOf(Dia[c].name);
    if (found != undefined) {
      if (found.Mem != 0) {
        if (Dia[c].Mem != 0) {
          var higher = found.Mem < Dia[c].Mem ? found : Dia[c];
          console.log("Memoria", higher.name2, higher.Mem, Dia[c].Mem, found.Mem);
          final_Mem[dex].Mem = higher.Mem;
        }
      }
    } else {
      if (Dia[c].Mem != 0) final_Mem.push({ name: Dia[c].name, name2: Dia[c].name2, Mem: Dia[c].Mem });
    }

    found = final_Quiz.find((element) => element.name == Dia[c].name);
    dex = final_Quiz
      .map(function (e) {
        return e.name;
      })
      .indexOf(Dia[c].name);
    if (found != undefined) {
      if (found.Quiz != 0) {
        if (Dia[c].Quiz != 0) {
          var higher = parseInt(found.Quiz) < parseInt(Dia[c].Quiz) ? Dia[c] : found;
          console.log("Quiz", higher.name2, higher.Quiz, Dia[c].Quiz, found.Quiz);
          final_Quiz[dex].Quiz = higher.Quiz;
        }
      }
    } else {
      if (Dia[c].Quiz != 0) final_Quiz.push({ name: Dia[c].name, name2: Dia[c].name2, Quiz: Dia[c].Quiz });
    }
  }
}

function creator_geral(array, Parent_obj) {
  size = array.length;
  if (size < 3) {
    var k = 0;
    for (c = 0; c < size; c++) {
      let element = document.createElement("a");
      if (k == 0) {
        element.setAttribute("class", "first");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c].points}`;
        k++;
        Parent_obj.appendChild(element);
      } else {
        element.setAttribute("class", "next");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c].points}`;
        k++;
        Parent_obj.appendChild(element);
      }
    }
    while (k < 3) {
      var element = document.createElement("a");
      element.setAttribute("class", "next");
      element.innerText = `${k + 1}.`;
      k++;
      Parent_obj.appendChild(element);
    }
  } else {
    var k = 0;
    for (c = 0; c < size; c++) {
      let element = document.createElement("a");
      if (k == 0) {
        element.setAttribute("class", "first");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c].points}`;
        k++;
        Parent_obj.appendChild(element);
      } else {
        element.setAttribute("class", "next");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c].points}`;
        k++;
        Parent_obj.appendChild(element);
      }
    }
  }
}

function creator_jogos(array, Parent_obj, jogo) {
  size = array.length;
  if (size < 3) {
    var k = 0;
    for (c = 0; c < size; c++) {
      let element = document.createElement("a");
      if (k == 0) {
        element.setAttribute("class", "first");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c][jogo]}`;
        k++;
        Parent_obj.appendChild(element);
      } else {
        element.setAttribute("class", "next");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c][jogo]}`;
        k++;
        Parent_obj.appendChild(element);
      }
    }
    while (k < 3) {
      var element = document.createElement("a");
      element.setAttribute("class", "next");
      element.innerText = `${k + 1}.`;
      k++;
      Parent_obj.appendChild(element);
    }
  } else {
    var k = 0;
    for (c = 0; c < size; c++) {
      let element = document.createElement("a");
      if (k == 0) {
        element.setAttribute("class", "first");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c][jogo]}`;
        k++;
        Parent_obj.appendChild(element);
      } else {
        element.setAttribute("class", "next");
        element.innerText = `${k + 1}. ${array[c].name2} - ${array[c][jogo]}`;
        k++;
        Parent_obj.appendChild(element);
      }
    }
  }
}

function loadFile(ip) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  //console.log(dd);
  switch (dd) {
    case "15":
      //console.log(document.getElementById("seg_live"));
      document.getElementById("seg_live").classList.remove("d_none");
      break;
    case "16":
      document.getElementById("ter_live").classList.remove("d_none");
      break;
    case "17":
      document.getElementById("qua_live").classList.remove("d_none");
      break;
    case "18":
      document.getElementById("qui_live").classList.remove("d_none");
      break;
    case "19":
      document.getElementById("sex_live").classList.remove("d_none");
      break;

    default:
      break;
  }

  var result = null;
  var xmlhttp = new XMLHttpRequest();
  var filePath = "";
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  var seg = [],
    ter = [],
    qua = [],
    qui = [],
    sex = [];
  var final_RT = [],
    final_TR = [],
    final_Mem = [],
    final_Quiz = [];

  var seg_RT = [],
    seg_TR = [],
    seg_Mem = [],
    seg_Quiz = [];
  var ter_RT = [],
    ter_TR = [],
    ter_Mem = [],
    ter_Quiz = [];
  var qua_RT = [],
    qua_TR = [],
    qua_Mem = [],
    qua_Quiz = [];
  var qui_RT = [],
    qui_TR = [],
    qui_Mem = [],
    qui_Quiz = [];
  var sex_RT = [],
    sex_TR = [],
    sex_Mem = [],
    sex_Quiz = [];

  var geral = [];

  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
    result = result.replace(/"/gm, "");
    //console.log(result);
    //document.getElementById("text").innerText = result;
    var splitted = result.split(/,|\n/gm);
    var size = splitted.length;
    var a = 8;
    var b = 1;

    while (splitted[a] != undefined) {
      switch (b) {
        case 1:
          seg.push({ name: splitted[a + 1], name2: splitted[a], RT: splitted[a + 2], TR: splitted[a + 3], Mem: splitted[a + 4], Quiz: splitted[a + 5] });
          break;
        case 2:
          ter.push({ name: splitted[a + 1], name2: splitted[a], RT: splitted[a + 2], TR: splitted[a + 3], Mem: splitted[a + 4], Quiz: splitted[a + 5] });
          break;
        case 3:
          qua.push({ name: splitted[a + 1], name2: splitted[a], RT: splitted[a + 2], TR: splitted[a + 3], Mem: splitted[a + 4], Quiz: splitted[a + 5] });
          break;
        case 4:
          qui.push({ name: splitted[a + 1], name2: splitted[a], RT: splitted[a + 2], TR: splitted[a + 3], Mem: splitted[a + 4], Quiz: splitted[a + 5] });
          break;
        case 5:
          sex.push({ name: splitted[a + 1], name2: splitted[a], RT: splitted[a + 2], TR: splitted[a + 3], Mem: splitted[a + 4], Quiz: splitted[a + 5] });
          break;

        default:
          break;
      }
      a = a + 6;
      //console.log(a);
      if (splitted[a] == undefined) {
        continue;
      } else if (splitted[a].startsWith("###")) {
        a++;
        b++;
        //console.log("Day Skip");
        continue;
      } else if (splitted[a].startsWith("*")) {
        a++;
        //console.log("Next");
      }
      //console.log(a);
    }

    var size = seg.length;
    for (c = 0; c < size; c++) {
      if (seg[c].RT != 0) {
        final_RT.push({ name: seg[c].name, name2: seg[c].name2, RT: seg[c].RT });
        seg_RT.push({ name: seg[c].name, name2: seg[c].name2, RT: seg[c].RT });
      }
      if (seg[c].TR != 0) {
        final_TR.push({ name: seg[c].name, name2: seg[c].name2, TR: seg[c].TR });
        seg_TR.push({ name: seg[c].name, name2: seg[c].name2, TR: seg[c].TR });
      }
      if (seg[c].Mem != 0) {
        final_Mem.push({ name: seg[c].name, name2: seg[c].name2, Mem: seg[c].Mem });
        seg_Mem.push({ name: seg[c].name, name2: seg[c].name2, Mem: seg[c].Mem });
      }
      if (seg[c].Quiz != 0) {
        final_Quiz.push({ name: seg[c].name, name2: seg[c].name2, Quiz: seg[c].Quiz });
        seg_Quiz.push({ name: seg[c].name, name2: seg[c].name2, Quiz: seg[c].Quiz });
      }
    }

    push(ter, ter_RT, ter_TR, ter_Mem, ter_Quiz);
    push(qua, qua_RT, qua_TR, qua_Mem, qua_Quiz);
    push(qui, qui_RT, qui_TR, qui_Mem, qui_Quiz);
    push(sex, sex_RT, sex_TR, sex_Mem, sex_Quiz);

    //////////////////////////////

    seg_RT.sort(function (a, b) {
      return parseFloat(a.RT) < parseFloat(b.RT) ? -1 : parseFloat(a.RT) == parseFloat(b.RT) ? 0 : 1;
    });
    seg_TR.sort(function (a, b) {
      return parseInt(a.TR) > parseInt(b.TR) ? -1 : parseInt(a.TR) == parseInt(b.TR) ? 0 : 1;
    });
    seg_Mem.sort(function (a, b) {
      return parseFloat(a.Mem) < parseFloat(b.Mem) ? -1 : parseFloat(a.Mem) == parseFloat(b.Mem) ? 0 : 1;
    });
    seg_Quiz.sort(function (a, b) {
      return parseInt(a.Quiz) > parseInt(b.Quiz) ? -1 : parseInt(a.Quiz) == parseInt(b.Quiz) ? 0 : 1;
    });

    size = seg_RT.length;
    if (size != 0) {
      var k = 0;
      while (k < size && k < 10) {
        //console.log(k, seg_RT[k].name2);
        switch (k) {
          case 0:
            geral.push({ name: seg_RT[k].name, name2: seg_RT[k].name2, points: 30 });
            break;
          case 1:
            geral.push({ name: seg_RT[k].name, name2: seg_RT[k].name2, points: 25 });
            break;
          case 2:
            geral.push({ name: seg_RT[k].name, name2: seg_RT[k].name2, points: 20 });
            break;
          case 3:
          case 4:
            geral.push({ name: seg_RT[k].name, name2: seg_RT[k].name2, points: 15 });
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            geral.push({ name: seg_RT[k].name, name2: seg_RT[k].name2, points: 10 });
            break;
        }
        k++;
      }
    }
    week_socores(geral, seg_TR);
    week_socores(geral, seg_Mem);
    week_socores(geral, seg_Quiz);

    //////////////////////////////

    //////////////////////////////

    ter_RT.sort(function (a, b) {
      return parseFloat(a.RT) < parseFloat(b.RT) ? -1 : parseFloat(a.RT) == parseFloat(b.RT) ? 0 : 1;
    });
    ter_TR.sort(function (a, b) {
      return parseInt(a.TR) > parseInt(b.TR) ? -1 : parseInt(a.TR) == parseInt(b.TR) ? 0 : 1;
    });
    ter_Mem.sort(function (a, b) {
      return parseFloat(a.Mem) < parseFloat(b.Mem) ? -1 : parseFloat(a.Mem) == parseFloat(b.Mem) ? 0 : 1;
    });
    ter_Quiz.sort(function (a, b) {
      return parseInt(a.Quiz) > parseInt(b.Quiz) ? -1 : parseInt(a.Quiz) == parseInt(b.Quiz) ? 0 : 1;
    });

    week_socores(geral, ter_RT);
    week_socores(geral, ter_TR);
    week_socores(geral, ter_Mem);
    week_socores(geral, ter_Quiz);

    //////////////////////////////

    //////////////////////////////

    qua_RT.sort(function (a, b) {
      return parseFloat(a.RT) < parseFloat(b.RT) ? -1 : parseFloat(a.RT) == parseFloat(b.RT) ? 0 : 1;
    });
    qua_TR.sort(function (a, b) {
      return parseInt(a.TR) > parseInt(b.TR) ? -1 : parseInt(a.TR) == parseInt(b.TR) ? 0 : 1;
    });
    qua_Mem.sort(function (a, b) {
      return parseFloat(a.Mem) < parseFloat(b.Mem) ? -1 : parseFloat(a.Mem) == parseFloat(b.Mem) ? 0 : 1;
    });
    qua_Quiz.sort(function (a, b) {
      return parseInt(a.Quiz) > parseInt(b.Quiz) ? -1 : parseInt(a.Quiz) == parseInt(b.Quiz) ? 0 : 1;
    });

    week_socores(geral, qua_RT);
    week_socores(geral, qua_TR);
    week_socores(geral, qua_Mem);
    week_socores(geral, qua_Quiz);
    //////////////////////////////

    //////////////////////////////

    qui_RT.sort(function (a, b) {
      return parseFloat(a.RT) < parseFloat(b.RT) ? -1 : parseFloat(a.RT) == parseFloat(b.RT) ? 0 : 1;
    });
    qui_TR.sort(function (a, b) {
      return parseInt(a.TR) > parseInt(b.TR) ? -1 : parseInt(a.TR) == parseInt(b.TR) ? 0 : 1;
    });
    qui_Mem.sort(function (a, b) {
      return parseFloat(a.Mem) < parseFloat(b.Mem) ? -1 : parseFloat(a.Mem) == parseFloat(b.Mem) ? 0 : 1;
    });
    qui_Quiz.sort(function (a, b) {
      return parseInt(a.Quiz) > parseInt(b.Quiz) ? -1 : parseInt(a.Quiz) == parseInt(b.Quiz) ? 0 : 1;
    });

    week_socores(geral, qui_RT);
    week_socores(geral, qui_TR);
    week_socores(geral, qui_Mem);
    week_socores(geral, qui_Quiz);
    //////////////////////////////

    //////////////////////////////

    sex_RT.sort(function (a, b) {
      return parseFloat(a.RT) < parseFloat(b.RT) ? -1 : parseFloat(a.RT) == parseFloat(b.RT) ? 0 : 1;
    });
    sex_TR.sort(function (a, b) {
      return parseInt(a.TR) > parseInt(b.TR) ? -1 : parseInt(a.TR) == parseInt(b.TR) ? 0 : 1;
    });
    sex_Mem.sort(function (a, b) {
      return parseFloat(a.Mem) < parseFloat(b.Mem) ? -1 : parseFloat(a.Mem) == parseFloat(b.Mem) ? 0 : 1;
    });
    sex_Quiz.sort(function (a, b) {
      return parseInt(a.Quiz) > parseInt(b.Quiz) ? -1 : parseInt(a.Quiz) == parseInt(b.Quiz) ? 0 : 1;
    });

    week_socores(geral, sex_RT);
    week_socores(geral, sex_TR);
    week_socores(geral, sex_Mem);
    week_socores(geral, sex_Quiz);

    ///////////////////////
    final_scores(ter, final_RT, final_TR, final_Mem, final_Quiz);
    final_scores(qua, final_RT, final_TR, final_Mem, final_Quiz);
    final_scores(qui, final_RT, final_TR, final_Mem, final_Quiz);
    final_scores(sex, final_RT, final_TR, final_Mem, final_Quiz);
    //////////////////////////

    final_RT.sort(function (a, b) {
      return parseFloat(a.RT) < parseFloat(b.RT) ? -1 : parseFloat(a.RT) == parseFloat(b.RT) ? 0 : 1;
    });
    final_TR.sort(function (a, b) {
      return parseInt(a.TR) > parseInt(b.TR) ? -1 : parseInt(a.TR) == parseInt(b.TR) ? 0 : 1;
    });
    final_Mem.sort(function (a, b) {
      return parseFloat(a.Mem) < parseFloat(b.Mem) ? -1 : parseFloat(a.Mem) == parseFloat(b.Mem) ? 0 : 1;
    });
    final_Quiz.sort(function (a, b) {
      return parseInt(a.Quiz) > parseInt(b.Quiz) ? -1 : parseInt(a.Quiz) == parseInt(b.Quiz) ? 0 : 1;
    });
    geral.sort(function (a, b) {
      return parseInt(a.points) > parseInt(b.points) ? -1 : parseInt(a.points) == parseInt(b.points) ? 0 : 1;
    });
    //console.log(final_RT);
    //console.log(final_TR);
    //console.log(final_Mem);
    //console.log(final_Quiz);

    var RT_obj = document.getElementById("RT_semana");
    var TR_obj = document.getElementById("TR_semana");
    var Mem_obj = document.getElementById("Mem_semana");
    var Quiz_obj = document.getElementById("Quiz_semana");
    var Geral_obj = document.getElementById("GERAL");

    var seg_RT_obj = document.getElementById("RT_seg");
    var seg_TR_obj = document.getElementById("TR_seg");
    var seg_Mem_obj = document.getElementById("Mem_seg");
    var seg_Quiz_obj = document.getElementById("Quiz_seg");

    var ter_RT_obj = document.getElementById("RT_ter");
    var ter_TR_obj = document.getElementById("TR_ter");
    var ter_Mem_obj = document.getElementById("Mem_ter");
    var ter_Quiz_obj = document.getElementById("Quiz_ter");

    var qua_RT_obj = document.getElementById("RT_qua");
    var qua_TR_obj = document.getElementById("TR_qua");
    var qua_Mem_obj = document.getElementById("Mem_qua");
    var qua_Quiz_obj = document.getElementById("Quiz_qua");

    var qui_RT_obj = document.getElementById("RT_qui");
    var qui_TR_obj = document.getElementById("TR_qui");
    var qui_Mem_obj = document.getElementById("Mem_qui");
    var qui_Quiz_obj = document.getElementById("Quiz_qui");

    var sex_RT_obj = document.getElementById("RT_sex");
    var sex_TR_obj = document.getElementById("TR_sex");
    var sex_Mem_obj = document.getElementById("Mem_sex");
    var sex_Quiz_obj = document.getElementById("Quiz_sex");

    creator_geral(geral, Geral_obj);

    creator_jogos(final_RT, RT_obj, "RT");
    creator_jogos(final_TR, TR_obj, "TR");
    creator_jogos(final_Mem, Mem_obj, "Mem");
    creator_jogos(final_Quiz, Quiz_obj, "Quiz");

    ////////////////////////////////

    creator_jogos(seg_RT, seg_RT_obj, "RT");
    creator_jogos(seg_TR, seg_TR_obj, "TR");
    creator_jogos(seg_Mem, seg_Mem_obj, "Mem");
    creator_jogos(seg_Quiz, seg_Quiz_obj, "Quiz");

    ////////////////////////////////

    creator_jogos(ter_RT, ter_RT_obj, "RT");
    creator_jogos(ter_TR, ter_TR_obj, "TR");
    creator_jogos(ter_Mem, ter_Mem_obj, "Mem");
    creator_jogos(ter_Quiz, ter_Quiz_obj, "Quiz");

    ////////////////////////////////

    creator_jogos(qua_RT, qua_RT_obj, "RT");
    creator_jogos(qua_TR, qua_TR_obj, "TR");
    creator_jogos(qua_Mem, qua_Mem_obj, "Mem");
    creator_jogos(qua_Quiz, qua_Quiz_obj, "Quiz");

    ////////////////////////////////

    creator_jogos(qui_RT, qui_RT_obj, "RT");
    creator_jogos(qui_TR, qui_TR_obj, "TR");
    creator_jogos(qui_Mem, qui_Mem_obj, "Mem");
    creator_jogos(qui_Quiz, qui_Quiz_obj, "Quiz");

    ///////////////////////////////

    creator_jogos(sex_RT, sex_RT_obj, "RT");
    creator_jogos(sex_TR, sex_TR_obj, "TR");
    creator_jogos(sex_Mem, sex_Mem_obj, "Mem");
    creator_jogos(sex_Quiz, sex_Quiz_obj, "Quiz");

    ///////////////////////////////

    document.getElementById("outer_box").setAttribute("class", "d_none");
    document.getElementById("semana").classList.remove("invisible");
    document.getElementById("gif").setAttribute("class", "d_none");
    var elements = document.getElementsByClassName("semana");
    elements[0].classList.remove("invisible");
  }
}

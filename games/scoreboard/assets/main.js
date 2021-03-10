function isOdd(num) {
  return num % 2;
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
    console.log(result);
    var splitted = result.split(/,|\n/gm);
    var size = splitted.length;
    var list = [];
    console.log(splitted, size);
    for (a = 0; a < size; a = a + 2) {
      console.log(splitted[a], splitted[a + 1]);
      list.push({ name: splitted[a], points: splitted[a + 1] });
    }
    console.log(list);
    list.sort(function (a, b) {
      return a.points > b.points ? -1 : a.points == b.points ? 0 : 1;
    });
    console.log(list);
  }
  return result;
}

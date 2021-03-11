//var _0x73bf=["\x47\x45\x54","\x6F\x70\x65\x6E","\x73\x65\x6E\x64","\x73\x74\x61\x74\x75\x73","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x6C\x6F\x67","\x73\x70\x6C\x69\x74","\x6C\x65\x6E\x67\x74\x68","\x70\x75\x73\x68","\x70\x6F\x69\x6E\x74\x73","\x73\x6F\x72\x74"];eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('i y(o){j o%2}i r(p){h d=s;h f=t u();f[b[1]](b[0],p,v);f[b[2]]();w(f[b[3]]==x){d=f[b[4]];g[b[5]](d);h c=d[b[6]](/,|\\n/q);h k=c[b[7]];h e=[];g[b[5]](c,k);A(a=0;a<k;a=a+2){g[b[5]](c[a],c[a+1]);e[b[8]]({z:c[a],B:c[a+1]})}g[b[5]](e);e[b[C]](i(l,m){j l[b[9]]>m[b[9]]?-1:l[b[9]]==m[b[9]]?0:1});g[b[5]](e)}j d}',39,39,'|||||||||||_0x73bf|_0x5621x7|_0x5621x5|_0x5621x9|_0x5621x6|console|var|function|return|_0x5621x8|_0x5621xa|_0x5621xb||_0x5621x2|_0x5621x4|gm|loadFile|null|new|XMLHttpRequest|false|if|200|isOdd|name|for|points|10'.split('|'),0,{}))

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
    /*var splitted = result.split(/,|\n/gm);
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
  return result;*/
  }
}
function isoOdd() {
  fetch("https://192.168.1.168:1769/https://docs.google.com/spreadsheets/d/1ieP5xH924Fi36IxQ4U7ERInOblQP9ZsX6vX-6lmXtB8/gviz/tq?tqx=out:csv&sheet=RT")
    .then((data) => {
      return data;
    })
    .then((res) => {
      console.log(res);
    });
}

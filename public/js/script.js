function JSONtable() {
  fetch('json/places.json')
    .then(res => res.json())
    .then(res => res.map(c => c.dis_prec))
    .then(dis_prec => {
      fetch('json/places.json')
        .then(res => res.json())
        .then(res => res.map(c => c.title))
        .then(title => {
          fetch('json/places.json')
            .then(res => res.json())
            .then(res => res.map(c => c.address))
            .then(address => {
              fetch('json/places.json')
                .then(res => res.json())
                .then(res => res.map(c => c.zip))
                .then(zip => {
                  fetch('json/places.json')
                    .then(res => res.json())
                    .then(res => res.map(c => c.style))
                    .then(style => {
                      var table = document.getElementById("body");
                      for(let i = 0; i < style.length; i+=1) {
                        var row = table.insertRow(i);
                        var col0 = row.insertCell(0);
                        var col1 = row.insertCell(1);
                        var col2 = row.insertCell(2);
                        var col3 = row.insertCell(3);
                        var col4 = row.insertCell(4);

                        var style_sub = style[i].toString();
                        var a1 = document.createElement('a');
                        var link = document.createTextNode(style_sub);
                        a1.title = "Sample ballot for style " + style_sub;
                        a1.appendChild(link);

                        var add_sub = address[i].toString();
                        var a2 = document.createElement('a');
                        var map_link = document.createTextNode(add_sub);
                        a2.title = "View " + add_sub + " on map";
                        a2.href = search_string(address[i]);
                        a2.appendChild(map_link);

                        col0.innerHTML = dis_prec[i];
                        col1.innerHTML = title[i];
                        col2.appendChild(a2);
                        col3.innerHTML = zip[i];
                        col4.appendChild(a1);
                        }
                     })
                 })
             })
         })
     })
};


function loadData() {
  var content = document.querySelector(".content");
  fetch("json/gen_ball.json")
    .then(res => res.json())
    .then(res => res.map(c => c.measure))
    .then(measure => {
      fetch("json/gen_ball.json")
        .then(res => res.json())
        .then(res => res.map(c => c.options))
        .then(options => {
          for(let i=0; i<measure.length; i+= 1) {
            var button = document.createElement("button");
            button.innerText = measure[i];
            content.appendChild(button);
            for(let v = 0; v < options[i].length; v += 1) {
              var op = document.createElement("button");
              var a = document.createElement("a");
              var inp = document.createElement("input")
              var sub = options[i][v].toString();
              a.innerText = sub;
              if (sub === "or write-in") {
                var radio = document.createElement("input");
                inp.type = "text";
                radio.type = "radio";
                op.appendChild(a);
                op.appendChild(inp);
                op.appendChild(radio);
                content.appendChild(op);
                if((v+1) === options[i].length){
                  let br = document.createElement("p");
                  content.appendChild(br);
                  }

              }
              else if(sub === "Yes" || sub === "No" || sub.includes("For ") === true || sub.includes("Against ") === true) {
                op.innerText = sub;
                inp.type = "radio";
                op.appendChild(inp);
                content.appendChild(op);
                if((v+1) === options[i].length){
                  let br = document.createElement("p");
                  content.appendChild(br);
                  }
              }
              else {
                a.href = candidate_info(sub);
                op.appendChild(a);
                inp.type = "radio";
                op.appendChild(inp);
                content.appendChild(op);
                if((v+1) === options[i].length){
                  let br = document.createElement("p");
                  content.appendChild(br);
                  }
                }
            }
        }
      })
    })
};

function candidate_info(string) {
  var res = "https://ballotpedia.org/";
  var str = string.replace("Republican", "9");
  str = string.replace("Democratic", "9");
  str = str.replace("Green", "9");
  str = str.replace("Libertarian", "9");
  str = str.replace("Unaffiliated", "9");
  str = str.replace(".", "");
  str = str.replace(",", "9");
  str = str.replace("and", "9");
  for (let i=0; i<str.length; i+= 1) {
    if(str[i] === " " && str[i+1] != "9"){
      res += "_"}
    else if(str[i+1] === "9"){
      res += str[i];
      if(res === "https://ballotpedia.org/Brian_E_Frosh") {
        res = "https://ballotpedia.org/Brian_Frosh"
        }
      else if(res === "https://ballotpedia.org/Angela_Alsobrooks") {
        res = "http://angelaalsobrooks.com/meet-angela/"
        }
      else if(res === "https://ballotpedia.org/Felicia_Folarin") {
        res = "https://votefeliciafolarin.org/"
        }
      else if(res === "https://ballotpedia.org/Mel_Franklin") {
        res = "https://www.melfranklin.net/"
        }
      else if(res === "https://ballotpedia.org/Calvin_Hawkins") {
        res = "https://act.myngp.com/Forms/1087417065945303808"
      }
      else if(res === "https://ballotpedia.org/Melvin_C_High") {
        res = "https://en.wikipedia.org/wiki/Prince_George%27s_County_Sheriff%27s_Office" 
      }
      else if(res === "https://ballotpedia.org/Mahasin_El_Amin") {
        res = "https://www.princegeorgescourts.org/directory.aspx?eid=5"
      }
      else if (res === "https://ballotpedia.org/Cereta_A_Lee") {
        res = "https://registers.maryland.gov/main/region/princegeorges/pgbio.html"
      }
      else if (res === "https://ballotpedia.org/Wendy_Alise_Cartwright") {
        res = "https://ballotpedia.org/Wendy_A._Cartwright"
      }
      else if (res === "https://ballotpedia.org/Vicky_L_Ivory-Orem") {
        res = "https://ballotpedia.org/Vicky_L._Ivory-Orem"
      }
      return res
    }
    else {
      res += str[i]
    }
  }
  return res
};

function search_string(string) {
  var res = "https://www.google.com/maps/place/";
  for(let i = 0; i < string.length; i += 1) {
    if(string[i] === " ") {
      res += "+"
    }
    else {
      res += string[i]
      }
    }
  res += "+MARYLAND"
  return res
};
function sort_by_column(n) {
  var table = document.getElementById("table");
  var shouldSwitch = true;
  var switching = true;
  var switchcount = 0;
  var dir = "asc";
  while(switching == true) {
    switching = false;
    var rows = table.rows;
    for (i = 1; i < (rows.length - 1); i += 1) {
      var shouldSwitch = false;
      var x = rows[i].getElementsByTagName("td")[n];
      var y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount += 1;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};


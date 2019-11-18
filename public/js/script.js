
var sx1 = 0;
var sx3 = 0;
var sx5 = 0;
var sx7 = 0;
var sx9 = 0;
var x = null;

function JSONtable(str, n) {
  if (str === "/s1") {
    if (sx1 === 0) {
      sx1 += 1
    }
    else {
      sx1 = 0;
      str = "/s2"}
  }
  else if (str === "/s3") {
    if (sx3 === 0) {
      sx3 += 1
    }
    else {
      sx3 = 0;
      str = "/s4"}
  }
  else if (str === "/s5") {
    if (sx5 === 0) {
      sx5 += 1
    }
    else {
      sx5 = 0;
      str = "/s6"}
  }
  else if (str === "/s7") {
    if (sx7 === 0) {
      sx7 += 1
    }
    else {
      sx7 = 0;
      str = "/s8"}
  }
  else if (str === "/s9") {
    if (sx9 === 0) {
      sx9 += 1
    }
    else {
      sx9 = 0;
      str = "/sa"}
  }
  var input = document.getElementById("filter");
  var filter = input.value.toString();
  if(filter.length > 0) {
    fetch(str)
      .then(res => res.json())
      .then(res => res.data.map(c => c.dis_prec))
      .then(dis_prec => {
        fetch(str)
          .then(res => res.json())
          .then(res => res.data.map(c => c.title))
          .then(title => {
            fetch(str)
              .then(res => res.json())
              .then(res => res.data.map(c => c.address))
              .then(address => {
                fetch(str)
                  .then(res => res.json())
                  .then(res => res.data.map(c => c.zip))
                  .then(zip => {
                    fetch(str)
                      .then(res => res.json())
                      .then(res => res.data.map(c => c.style))
                      .then(style => {
                        var table = document.getElementById("body");
                        table.innerText = "";
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

                        col0.innerText = dis_prec[i];
                        col1.innerText = title[i];
                        col2.appendChild(a2);
                        col3.innerText = zip[i];
                        col4.appendChild(a1);
                          }
                        console.log(table_search())
                       })
                   })
               })
           })
       })
  } else {
    fetch(str)
      .then(res => res.json())
      .then(res => res.data.map(c => c.dis_prec))
      .then(dis_prec => {
        fetch(str)
          .then(res => res.json())
          .then(res => res.data.map(c => c.title))
          .then(title => {
            fetch(str)
              .then(res => res.json())
              .then(res => res.data.map(c => c.address))
              .then(address => {
                fetch(str)
                  .then(res => res.json())
                  .then(res => res.data.map(c => c.zip))
                  .then(zip => {
                    fetch(str)
                      .then(res => res.json())
                      .then(res => res.data.map(c => c.style))
                      .then(style => {
                        var table = document.getElementById("body");
                        table.innerText = "";
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

                        col0.innerText = dis_prec[i];
                        col1.innerText = title[i];
                        col2.appendChild(a2);
                        col3.innerText = zip[i];
                        col4.appendChild(a1);
                        }
                       })
                   })
               })
           })
       })
    }
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
            var link = document.createElement("a");
            var sub = measure[i].toString();
            link.innerText = sub;
            link.href = candidate_info(sub);
            button.appendChild(link);
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

              } else if(
                sub === "Yes" || sub === "No" || sub.includes("For ") === true || sub.includes("Against ") === true) {
                  op.innerText = sub;
                  inp.type = "radio";
                  op.appendChild(inp);
                  content.appendChild(op);
                  if((v+1) === options[i].length){
                    let br = document.createElement("p");
                    content.appendChild(br);
                    }
              } else {
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
  str = str.replace("/", "9");
  str = str.replace("and", "9");
  for (let i=0; i<str.length; i+= 1) {
    if(str[i] === " " && str[i+1] != "9"){
      res += "_"}
    else if(str[i+1] === "9" || i+1 === str.length){
      res += str[i];
      var sub = "ballotpedia.org";
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
      else if (res === "https://ballotpedia.org/Governor") {
        res = "https://ballotpedia.org/Governor_of_Maryland";
      }
      else if (res === "https://ballotpedia.org/Comptroller") {
        res = "https://ballotpedia.org/Maryland_Comptroller";
      }
      else if (res === "https://ballotpedia.org/Attorney_General") {
        res = "https://ballotpedia.org/Attorney_General_of_Maryland";
      }
      else if (res === "https://ballotpedia.org/US._Senator") {
        res = "https://ballotpedia.org/United_States_Senate";
      }
      else if (res === "https://ballotpedia.org/County_Executive") {
        res = "https://www.princegeorgescountymd.gov/775/About-Us";
      }
      else if (res === "https://ballotpedia.org/County_Council_At_Large") {
        res = "https://pgccouncil.us/27/The-Council";
      }
      else if (res === "https://ballotpedia.org/State's_Attorney") {
        res = "https://www.princegeorgescountymd.gov/712/States-Attorney";
      }
      else if (res === "https://ballotpedia.org/Register_of_Wills") {
        res = "http://registers.maryland.gov/main/";
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
function table_search() {
  var input, filter, table, body, tr, td1, td2, td3, td4, td5, i, txt1, txt2,
  txt3, txt4, txt5;
  input = document.getElementById("filter");
  filter = input.value.toString();
  filter = input.value.toUpperCase();
  table = document.getElementsByTagName("table")
  body = document.getElementById("body");
  tr = body.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i += 1) {
    td1 = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];
    td3 = tr[i].getElementsByTagName("td")[2];
    td4 = tr[i].getElementsByTagName("td")[3];
    td5 = tr[i].getElementsByTagName("td")[4];
    if (td1 || td2 || td3 || td4 || td5) {
      txt1 = td1.textContent || td1.innerText;
      txt2 = td2.textContent || td2.innerText;
      txt3 = td3.textContent || td3.innerText;
      txt4 = td4.textContent || td4.innerText;
      txt5 = td5.textContent || td5.innerText;
      if (txt1.toUpperCase().indexOf(filter) > -1 || txt2.toUpperCase().indexOf(filter) > -1 || txt3.toUpperCase().indexOf(filter) > -1 || txt4.toUpperCase().indexOf(filter) > -1 || txt5.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

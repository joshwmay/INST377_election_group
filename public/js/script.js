var sx1, sx3, sx5, sx7, sx9, sxb;
sx1 = 0;
sx3 = 0;
sx5 = 0;
sx7 = 0;
sx9 = 0;
sxb = 0;

function stringer(str) {
  if (str === "/s1") {
    if (sx1 === 0) {
      sx1 += 1;
      return str;
    }
    else {
      sx1 = 0;
      str = "/s2";
      return str;
    }
  }
  else if (str === "/s3") {
    if (sx3 === 0) {
      sx3 += 1;
      return str;
    }
    else {
      sx3 = 0;
      str = "/s4";
      return str;
    }
  }
  else if (str === "/s5") {
    if (sx5 === 0) {
      sx5 += 1;
      return str;
    }
    else {
      sx5 = 0;
      str = "/s6";
      return str;
    }
  }
  else if (str === "/s7") {
    if (sx7 === 0) {
      sx7 += 1;
      return str;
    }
    else {
      sx7 = 0;
      str = "/s8";
      return str;
    }
  }
  else if (str === "/s9" ) {
    if (sx9 === 0) {
      sx9 += 1;
      return str;
    }
    else {
      sx9 = 0;
      str = "/sa";
      return str;
    }
  }
  else if (str === "/sb" ) {
    if (sxb === 0) {
      sxb += 1;
      return str;
    }
    else {
      sxb = 0;
      str = "/sc"
      return str;
    };
  }
}

function JSONtable(str) {
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
                  .then(res => res.data.map(c => c.city))
                  .then(city => {
                    fetch(str)
                      .then(res => res.json())
                      .then(res => res.data.map(c => c.zip))
                      .then(zip => {
                        fetch(str)
                          .then(res => res.json())
                          .then(res => res.data.map(c => c.style))
                          .then(style => {
      // This wavy if/else promise string creates a table with links and
      // searchable criteria.
      var table = document.getElementById("body");
      table.innerHTML = "";
      for(let i = 0; i < style.length; i+=1) {
        var row, col0, col1, col2, col3, col4, col5;
        row = table.insertRow(i);
        col0 = row.insertCell(0);
        col1 = row.insertCell(1);
        col2 = row.insertCell(2);
        col3 = row.insertCell(3);
        col4 = row.insertCell(4);
        col5 = row.insertCell(5);

        let style_sub, a1, add_sub, a2, map_link;
        style_sub = style[i].toString();
        a1 = document.createElement('a');
        a1.title = "Sample ballot for style " + style_sub
        a1.innerHTML = style_sub;

        add_sub = address[i].toString();
        a2 = document.createElement('a');
        map_link = document.createTextNode(add_sub);
        a2.title = "View " + add_sub + " on map";
        a2.href = search_string(address[i]);
        map_link.innerHTML = add_sub;
        a2.appendChild(map_link);

        col0.innerHTML = dis_prec[i];
        col1.innerHTML = title[i];
        col2.appendChild(a2);
        col3.innerHTML = city[i];
        col4.innerHTML = zip[i];
        col5.appendChild(a1);
                            }
        console.log(table_search())
                          })
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
                  .then(res => res.data.map(c => c.city))
                  .then(city => {
                    fetch(str)
                      .then(res => res.json())
                      .then(res => res.data.map(c => c.zip))
                      .then(zip => {
                        fetch(str)
                          .then(res => res.json())
                          .then(res => res.data.map(c => c.style))
                          .then(style => {
                            var table = document.getElementById("body");
                            table.innerHTML = "";
                            for(let i = 0; i < style.length; i+=1) {
                              var row, col0, col1, col2, col3, col4, col5;
                              row = table.insertRow(i);
                              col0 = row.insertCell(0);
                              col1 = row.insertCell(1);
                              col2 = row.insertCell(2);
                              col3 = row.insertCell(3);
                              col4 = row.insertCell(4);
                              col5 = row.insertCell(5);

                              let style_sub, a1, link, add_sub, a2, map_link;
                              style_sub = style[i].toString();
                              a1 = document.createElement('a');
                              link = document.createTextNode(style_sub);
                              link.innerHTML = style_sub;
                              a1.title = "Sample ballot for style " + style_sub;
                              a1.appendChild(link);

                              add_sub = address[i].toString();
                              a2 = document.createElement('a');
                              map_link = document.createTextNode(add_sub);
                              map_link.innerHTML = add_sub;
                              a2.title = "View " + add_sub + " on map";
                              a2.href = search_string(address[i]);
                              a2.appendChild(map_link);

                              col0.innerHTML = dis_prec[i];
                              col1.innerHTML = title[i];
                              col2.appendChild(a2);
                              col3.innerHTML = city[i];
                              col4.innerHTML = zip[i];
                              col5.appendChild(a1);
                             }
                          })
                       })
                   })
               })
           })
       })
    }
};
function loadData(str) {
  var content = document.querySelector(".content");
  if(str === "none") {
    address = "json/gen_ball.json";
  } else {
    address = "json/bs" + str + ".json"
  };
  content.innerHTML = "";
  fetch(address)
    .then(res => res.json())
    .then(res => res.map(c => c.measure))
    .then(measure => {
      fetch(address)
        .then(res => res.json())
        .then(res => res.map(c => c.description))
        .then(description => {
          fetch(address)
            .then(res => res.json())
            .then(res => res.map(c => c.selections))
            .then(selections => {
              fetch(address)
                .then(res => res.json())
                .then(res => res.map(c => c.options))
                .then(options => {
                  for(let i=0; i<measure.length; i+= 1) {
                    var p, link, sub, line;
                    line = document.createElement("li");
                    p = document.createElement("p");
                    link = document.createElement("a");
                    sub = measure[i].toString();
                    link.innerHTML = sub;
                    link.href = candidate_info(sub);
                    link.title = "Learn more about " + sub;
                    p.appendChild(link);
                    line.appendChild(p);
                    content.appendChild(line);
                    for(let v = 0; v < options[i].length; v += 1) {
                      var op, a, inp, sub;
                      op = document.createElement("p");
                      a = document.createElement("a");
                      inp = document.createElement("input")
                      sub = options[i][v].toString();
                      a.innerHTML = sub;
                      if (sub === "or write-in") {
                        var radio = document.createElement("input");
                        radio.value = measure[i];
                        inp.type = "text";
                        radio.type = "radio";
                        a.title = "Enter write-in choice for " +
                                  measure[i] + " here";
                        inp.title = "Enter write-in choice for " +
                                  measure[i] + " here";
                        op.appendChild(a);
                        op.appendChild(inp);
                        op.appendChild(radio);
                        line.appendChild(op);
                        content.appendChild(line);
                        if((v+1) === options[i].length){
                          let br = document.createElement("p");
                          content.appendChild(br);
                          }
                      } else if(
                      sub === "Yes" || sub === "No" ||
                      sub.includes("For ") === true ||
                      sub.includes("Against ") === true) {
                        op.innerHTML = sub;
                        inp.type = "radio";
                        inp.value = measure[i];
                        op.appendChild(inp);
                        line.appendChild(op);
                        content.appendChild(line);
                        if((v+1) === options[i].length){
                          let br = document.createElement("p");
                          content.appendChild(br);
                          }
                      } else {
                        a.href = candidate_info(sub);
                        a.title = "Learn more about " + sub;
                        op.appendChild(a);
                        inp.type = "radio";
                        inp.value = measure[i];
                        op.appendChild(inp);
                        line.appendChild(op);
                        content.appendChild(line);
                        if((v+1) === options[i].length){
                          let br = document.createElement("p");
                          content.appendChild(br);
                }
              }
            }
          }
        })
      })
    })
  })
}
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
  str = str.replace(" Charter", "9");
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
        res = "http://www.friendsofmelvinchigh.net/"
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
      else if (res === "https://ballotpedia.org/Judge_of_the_Orphans'_Court") {
        res = "https://www.princegeorgescourts.org/257/Orphans-Court"
      }
      else if (res === "https://ballotpedia.org/Clerk_of_the_Circuit_Court") {
        res = "https://www.princegeorgescourts.org/178/Clerk-of-the-Circuit-Court"
      }
      else if (res === "https://ballotpedia.org/Register_of_Wills") {
        res = "http://registers.maryland.gov/main/";
      }
      else if (res === "https://ballotpedia.org/Question_A") {
        res = "https://bit.ly/2NWop9S";
      }
      else if (res === "https://ballotpedia.org/Question_B") {
        res = "https://bit.ly/2O18h7j";
      }
      else if (res === "https://ballotpedia.org/Judge") {
        res = "https://www.courts.state.md.us/cosappeals"
      }
      else if (res === "https://ballotpedia.org/Question_C") {
        res = "https://bit.ly/340qTJZ";
      }
      else if (res === "https://ballotpedia.org/Question_D") {
        res = "https://bit.ly/2QuInuc";
      }
      else if (res === "https://ballotpedia.org/Question_E") {
        res = "https://bit.ly/32RjhrW";
      }
      else if (res === "https://ballotpedia.org/Question_F") {
        res = "https://bit.ly/35eA35W";
      }
      else if (res === "https://ballotpedia.org/Question_G") {
        res = "https://bit.ly/2NVGYeq";
      }
      else if (res === "https://ballotpedia.org/Question_H") {
        res = "https://bit.ly/2QsJfPN";
      }
      else if (res === "https://ballotpedia.org/Question_I") {
        res = "https://bit.ly/2CVGajq";
      }
      else if (res === "https://ballotpedia.org/Question_J") {
        res = "https://bit.ly/2qsnTr8";
      }
      else if (res === "https://ballotpedia.org/Question_K") {
        res = "https://bit.ly/2QqlckG";
      }
      else if (res === "https://ballotpedia.org/Sheriff") {
        res = "https://www.princegeorgescountymd.gov/622/Sheriff";
      }
      return res
    }
    else {
      res += str[i]
    }
  }
  return res
  }
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
  res = res.replace("U+MARLBORO","UPPER+MARLBORO");
  res = res.replace("Fort+Wash","Fort+Washington");
  res += "+MARYLAND";
  return res
}
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
    td6 = tr[i].getElementsByTagName("td")[4];
    if (td1 || td2 || td3 || td4 || td5 || td6) {
      txt1 = td1.textContent || td1.innerHTML;
      txt2 = td2.textContent || td2.innerHTML;
      txt3 = td3.textContent || td3.innerHTML;
      txt4 = td4.textContent || td4.innerHTML;
      txt5 = td5.textContent || td5.innerHTML;
      txt6 = td6.textContent || td6.innerHTML;
      if (txt1.toUpperCase().indexOf(filter) > -1 ||
          txt2.toUpperCase().indexOf(filter) > -1 ||
          txt3.toUpperCase().indexOf(filter) > -1 ||
          txt4.toUpperCase().indexOf(filter) > -1 ||
          txt5.toUpperCase().indexOf(filter) > -1 ||
          txt6.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function loadData_() {
  var content = document.querySelector(".content");
  content.innerHTML = "";
  fetch("json/gen_ball_.json")
    .then(res => res.json())
    .then(res => res.map(c => c.measure))
    .then(measure => {
      fetch("json/gen_ball_.json")
        .then(res => res.json())
        .then(res => res.map(c => c.options))
        .then(options => {
          for(let i=0; i<measure.length; i+= 1) {
            var p, sub, line;
            line = document.createElement("li");
            p = document.createElement("p");
            sub = measure[i].toString();
            p.innerHTML = sub;
            line.appendChild(p);
            content.appendChild(line);
            for(let v = 0; v < options[i].length; v += 1) {
              var op, inp, sub, radio;
              op = document.createElement("p");
              inp = document.createElement("input")
              sub = options[i][v].toString();
              radio = document.createElement("input");
              radio.type = "radio";
              if (sub === "o escribir en") {
                inp.type = "text";
                inp.title = "Ingrese la opción de escritura para " +
                          measure[i] + "aquí";
                op.innerHTML = sub;
                op.appendChild(inp);
                op.appendChild(radio);
                line.appendChild(op);
                content.appendChild(line);
                if((v+1) === options[i].length){
                  let br = document.createElement("p");
                  content.appendChild(br);
                    }
                 }
               else {
                  op.innerHTML = sub;
                  op.appendChild(radio);
                  line.appendChild(op);
                  content.appendChild(line);
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

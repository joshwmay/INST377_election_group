function JSONtable() {
  fetch('JSONcache/places.json')
    .then(res => res.json())
    .then(res => res.map(c => c.dis_prec))
    .then(dis_prec => {
      fetch('JSONcache/places.json')
        .then(res => res.json())
        .then(res => res.map(c => c.title))
        .then(title => {
          fetch('JSONcache/places.json')
            .then(res => res.json())
            .then(res => res.map(c => c.address))
            .then(address => {
              fetch('JSONcache/places.json')
                .then(res => res.json())
                .then(res => res.map(c => c.zip))
                .then(zip => {
                  fetch('JSONcache/places.json')
                    .then(res => res.json())
                    .then(res => res.map(c => c.style))
                    .then(style => {
                      var table = document.getElementById("table");
                      for(let i = 0; i < style.length; i+=1) {
                        var row = table.insertRow(i+1);
                        var col0 = row.insertCell(0);
                        var col1 = row.insertCell(1);
                        var col2 = row.insertCell(2);
                        var col3 = row.insertCell(3);
                        var col4 = row.insertCell(4);

                        var style_sub = style[i].toString();
                        var a1 = document.createElement('a');
                        var link = document.createTextNode(style_sub);
                        a1.title = "Sample ballot for style " + style_sub;
                        a1.href = "function to be created...";
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
function search_string(string) {
  res = "https://www.google.com/maps/place/";
  for(let i = 0; i < string.length; i += 1) {
    if(string[i] === " ") {
      res += "+"
    }
    else {
      res += string[i]
      }
    }
  return res
};
function sort_by_column(n) {
  var table = document.getElementById("table");
  var rows = table.rows;
  var switching = true;
  var switchcount = 0;
  var dir = "asc";
  while(switching == true) {
    switching = false;
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
}

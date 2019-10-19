function sort_by_column(n) {
  var table = document.getElementById("poll_places");
  var rows = table.rows;
  var switching = true;
  var dir = "asc";
  var switchcount = 0;
  while(switching == true) {
    switching = false;
    for (i = 1; i < (rows.length - 1); i += 1) {
      var shouldSwitch = false;
      var x = rows[i].getElementsByTagName("TD")[n];
      var y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
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
  console.log(table)
}

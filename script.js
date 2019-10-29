var map = document.getElementById("poll_places").rows[275].cells.length;
var cell = HTMLTableRowElement.insertCell();
console.log(places);
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
};
function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

function shorten_rands(min, max, i) {
  // This function acts as a placeholder and is intended to be used within
  // a loop in conjuntion with an array that is shortened each iteration.
  // max is shortened each iteration to reflect shortening array.
  // returns can subsequently be expected to be void of duplicates
  min = Math.ceil(min);
  max -= i;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//var tr_items = document.getElementById('poll_places');
//const places_json = sessionStorage.setItem("Places", JSON.stringify("places"));
//function location_display(){
//  var places_js = JSON.parse(sessionStorage.getItem("Places"));
//  tr_items.innerHTML = "";
//  for (i = 1; i < 275; i += 1) {
//    var td_items = tr_items.insertCell(i);
//    tr_items.appendChild(td_items);
//    var tr_ = document.createCell(tr_items.rows[i].insertCell(tr_items.rows[i].cells.length), i, 'col');
//    var tr_txt = document.createTextNode(places[i]);
//    tr_.appendChild(tr_txt);
//    td_items.appendChild(tr_);
//    places_js.splice(i, 1);
//    }
//  };
//location_display()

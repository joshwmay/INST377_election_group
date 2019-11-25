window.addEventListener('load', () => {
  const canvas = document.querySelector("#pencil");
  const ctx = canvas.getContext("2d");
  canvas.height = (250);
  canvas.width = (250);
  ctx.strokeStyle = "grey";
  ctx.strokeRect(0, 0, 250,250);
  function start() {
    painting = true;
  }
  function end() {
    painting = false;
  }
  function draw(e) {
    if(!painting) return;
    ctx.lineWidth = 9;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mouseup', end);
  canvas.addEventListener('mousemove', draw);

});
var can = document.getElementById("pencil");
can.style.backgroundImage = "url('img/circle.png')";

window.addEventListener('load', () => {
  const canvas = document.querySelector("#pencil");
  const ctx = canvas.getContext("2d");
  canvas.height = (250);
  canvas.width = (250);
  canvas.style.backgroundImage = "url('img/circle.png')";
  ctx.strokeStyle = "grey";
  ctx.strokeRect(0, 0, 250,250);
  ctx.stroke();
  function start() {
    painting = true;
  }

  function end() {
    painting = false;
  }

  function draw(e) {
    if(!painting) return;
    ctx.lineWidth = 20;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mouseup', end);
  canvas.addEventListener('mousemove', draw);

});
function reset() {
  const canvas = document.querySelector("#pencil");
  const ctx = canvas.getContext("2d");
  canvas.height = (250);
  canvas.width = (250);
  canvas.style.backgroundImage = "url('img/circle.png')";
  ctx.strokeStyle = "grey";
  ctx.strokeRect(0, 0, 250,250);
};

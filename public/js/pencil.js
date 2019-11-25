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
  function draw_(e) {
    if(!painting) return;
    ctx.lineWidth = 20;
    ctx.lineTo(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    e.preventDefault();
  }
  canvas.addEventListener('mousedown', start, false);
  canvas.addEventListener('mouseup', end, false);
  canvas.addEventListener('mousemove', draw, false);
  canvas.addEventListener('touchstart', start, false);
  canvas.addEventListener('touchmove', draw_, false);
  canvas.addEventListener('touchend', end, false);
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

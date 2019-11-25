window.addEventListener('load', () => {
  const canvas = document.querySelector("#pencil");
  const ctx = canvas.getContext("2d");
  const scale = window.devicePixelRatio;
  canvas.height = 250;
  canvas.width = 250;
  var h, w, area, area_updates;
  h = canvas.height;
  w = canvas.width;
  area = (h * w);
  area_updates = 0;
  canvas.style.backgroundImage = "url('img/circle.png')";
  ctx.strokeStyle = "grey";
  ctx.strokeRect(0, 0, 250,250);
  ctx.stroke();
  function start() {
    painting = true;
  }

  function end() {
    painting = false;
    updateArea();
  }
  function draw(e) {
    if(!painting) return;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  function draw_(e) {
    if(!painting) return;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.lineTo(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    e.preventDefault();
  }
  function updateArea() {
    var data = ctx.getImageData(0, 0, 250, 250);
    data = data.data;
    for (let t=0, i=0, len=data.length; i<len; i+=10) {
      if (data[i] > 127) {
        t += 1;
        var out = (t / (250 * 250));
        if(out > .17 && out < .2) {
          canvas.style.backgroundImage = "url('img/green_circle.png')";
        } else if (out > .2) {
          canvas.style.backgroundImage = "url('img/red_circle.png')";
        }
      }
    }
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

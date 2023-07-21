const body = document.querySelector("body");
const audio = document.querySelector("audio");

document.addEventListener("click", function (e) {
  const bullet = document.createElement("span");
  const x = e.offsetX;
  const y = e.offsetY;
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  body.appendChild(bullet);
  audio.play();
});

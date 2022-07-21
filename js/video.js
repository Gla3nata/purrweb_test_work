let btn = document.querySelector(".video__btn");
let clip = document.querySelector(".video__clip");
let close = document.querySelector(".video__close");
let start = document.querySelector("video");
btn.onclick = function () {
  btn.classList.add("active");
  clip.classList.add("active");
  document.body.classList.add("lock");
  start.play();
  start.currentTime = 0;
};
close.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  document.body.classList.remove("lock");
  start.pause();
};

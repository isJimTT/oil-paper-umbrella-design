let title = document.querySelector(".title img");

title.onclick = function () {
  window.location = "./view/directory.html";
};

document.querySelector(".title img").addEventListener("mouseover", function () {
  document.querySelector(".umbrella-title-left").classList.add("shanks-left");
});

document.querySelector(".title img").addEventListener("mouseout", function () {
  document
    .querySelector(".umbrella-title-left")
    .classList.remove("shanks-left");
});

document.querySelector(".title img").addEventListener("mouseover", function () {
  document.querySelector(".umbrella-title-right").classList.add("shanks-right");
});

document.querySelector(".title img").addEventListener("mouseout", function () {
  document
    .querySelector(".umbrella-title-right")
    .classList.remove("shanks-right");
});

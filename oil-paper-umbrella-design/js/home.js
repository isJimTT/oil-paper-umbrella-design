let titles = document.querySelectorAll(".title img");

// title.onclick = function () {
//   window.location = "./view/directory.html";
// };
titles.forEach((title) => {
  title.addEventListener("click", () => {
    window.location = "./view/directory.html";
  });

  title.addEventListener("mouseover", function () {
    document.querySelector(".umbrella-title-left").classList.add("shanks-left");
  });

  title.addEventListener("mouseout", function () {
    document
      .querySelector(".umbrella-title-left")
      .classList.remove("shanks-left");
  });

  title.addEventListener("mouseover", function () {
    document
      .querySelector(".umbrella-title-right")
      .classList.add("shanks-right");
  });

  title.addEventListener("mouseout", function () {
    document
      .querySelector(".umbrella-title-right")
      .classList.remove("shanks-right");
  });
});

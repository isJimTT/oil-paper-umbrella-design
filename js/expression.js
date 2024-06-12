var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

async function changeUmbrella(imgUrl) {
  const umbrella = document.querySelector(".umbrella");
  if (umbrella.src === imgUrl) return;
  umbrella.style.opacity = "0.2";
  // await new Promise((resolve) => setTimeout(resolve, 600));
  umbrella.src = imgUrl;
  umbrella.style.opacity = "1";
}

function select(img) {
  img.classList.add("enlarged");
  img.src = img.getAttribute("data-src");
  let images = document.querySelectorAll(".image-item");
  images.forEach((item) => {
    if (item !== img) {
      item.classList.remove("enlarged");
      item.src = "../assets/img/expression/组 386.png";
    }
  });
}

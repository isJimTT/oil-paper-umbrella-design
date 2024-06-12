const backBtn = document.querySelector(".back");

backBtn.onclick = () => {
  window.location = "./directory.html";
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  // spaceBetween: 50,
  loop: true,
  // freeMode: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: true,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", () => {
  const element = document.querySelector(".mengban");
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;
  // 计算元素距离底部的距离
  const elementOffset = documentHeight - (scrollPosition + windowHeight);

  if (elementOffset < 0.2 * windowHeight) {
    element.style.bottom = "-10vw";
  } else {
    element.style.bottom = "0";
  }
});

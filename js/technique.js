const backBtn = document.querySelector(".back");
const slide = document.querySelector(".slide img");

let timer;

backBtn.onclick = () => {
  window.location = "./directory.html";
};

window.onload = () => {
  document.body.appendChild(createCustomNavbar());
};

window.onwheel = () => {
  slide.style.opacity = 0;
  clearTimeout(timer);
  timer = setTimeout(() => {
    slide.style.opacity = 1;
  }, 1000);
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

function changeUmbrella(imgUrl) {
  const umbrella = document.querySelector(".umbrella");
  if (umbrella.src === imgUrl) return;
  umbrella.src = imgUrl;
}

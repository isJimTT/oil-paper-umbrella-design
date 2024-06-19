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
    delay: 2000,
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

const structureImg = document.querySelector(".structure");
const processImg = document.querySelector(".process");

// 创建Intersection Observer对象
const observer = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        // 当元素进入视口时，添加visible类以启动动画
        entry.target.classList.add("visible");
        // 停止观察已经进入视口的元素
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0 }
); // 设置阈值为0，表示任何部分的元素可见时触发

// 观察图片元素
observer.observe(structureImg);
observer.observe(processImg);

const textWrap = document.querySelector(".text-wrap");

const observer2 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("元素进入视口");
        textWrap.firstElementChild.classList.add("mask-text");
        observer.unobserve(entry.target); // 如果只需要检测一次，可以取消观察
      } else {
        console.log("元素离开视口");
        // 元素离开视口时可以执行其他操作
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }
);

if (textWrap) {
  observer2.observe(textWrap);
} else {
  console.error("目标元素未找到");
}

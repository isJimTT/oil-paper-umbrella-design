const backBtn = document.querySelector(".back-btn");
const textWrap = document.querySelector(".text-wrap");
const maskText = document.querySelector(".text-wrap .mask-text");
const rightArr = document.querySelector(".right-arr");
const slide = document.querySelector(".slide img");
const imgTitle = document.querySelector(".second-text");
const imgTitles = document.querySelectorAll(".second-text img");
let timer;

backBtn.onclick = () => {
  window.location = "./directory.html";
};
rightArr.onclick = () => {
  window.location = "./inheritor.html";
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

const observer = new IntersectionObserver(
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

const observerTitle = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("元素进入视口");
        imgTitles[0].style.top = 0;
        imgTitles[1].style.top = "8vh";
        observer.unobserve(entry.target); // 如果只需要检测一次，可以取消观察
      } else {
        console.log("元素离开视口");
        // 元素离开视口时可以执行其他操作
      }
    });
  },
  {
    root: null,
    rootMargin: "-30px",
    threshold: 0.1,
  }
);

if (textWrap) {
  observer.observe(textWrap);
} else {
  console.error("目标元素未找到");
}

if (imgTitle) {
  observerTitle.observe(imgTitle);
} else {
  console.error("目标元素未找到");
}

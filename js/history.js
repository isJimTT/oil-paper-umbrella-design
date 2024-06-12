const third = document.querySelector(".third");
const progress = document.querySelector(".g-progress");
const progressWrap = document.querySelector(".g-progress-wrap");
const umbrella = document.querySelector(".progress-umbrella");
const title = document.querySelectorAll(".title img");
const titleBottom = document.querySelectorAll(".title-bottom img");
const story = document.querySelectorAll(".story img");
const mask = document.querySelector(".mask-mid");
const maskStory = document.querySelector(".mask-story");
const slide = document.querySelector(".slide img");
const backBtn = document.querySelector(".back-umbrella img");
let currentScrollTop = 0;

let timer;

let transformX = 0;

backBtn.onclick = function () {
  window.location = "./directory.html";
};

window.onload = () => {
  umbrella.style.transform = `translate(-50%, -50%) rotate(-45deg)`;
  document.body.appendChild(createCustomNavbar());
  story.forEach((item, index) => {
    item.style.left = 110 + 5 * index + "vw";
  });
};

window.onwheel = Throttle(async function (e) {
  // 滚动条总高度
  let scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  // 可视区高度
  let clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  // 距离顶部高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // 旋转的角度
  const rotatedDeg = ((scrollTop + clientHeight) / scrollHeight) * 360;

  rotateProgress(rotatedDeg, scrollTop);

  if (scrollTop + clientHeight >= scrollHeight) {
    catchBottom();
  } else {
    leaveBottom();
  }
}, 20);

// 元素滚动
function rotateProgress(rotatedDeg, fncScrollTop) {
  slide.style.opacity = 0;
  clearTimeout(timer);
  timer = setTimeout(() => {
    slide.style.opacity = 1;
  }, 1000);

  progress.style.background = `conic-gradient(
    #fff 0,
    #fff ${rotatedDeg}deg,
    #1e1c1d ${rotatedDeg + 20}deg,
    #1e1c1d 360deg
  )`;
  umbrella.style.transform = `translate(-50%, -50%) rotate(-${rotatedDeg}deg)`;
  if (fncScrollTop > 100) {
    // title[0].style.transform = `translateX(-${
    //   fncScrollTop * 2
    // }px) translateY(${fncScrollTop}px)`;
    // title[1].style.transform = `translateX(${
    //   fncScrollTop * 2
    // }px) translateY(${fncScrollTop}px)`;
    // title[2].style.transform = `translateX(${
    //   fncScrollTop * 2
    // }px) translateY(${fncScrollTop}px)`;
    if (fncScrollTop > currentScrollTop) {
      // 向下滚动
      if (fncScrollTop > 100) {
        title[0].style.left = "-50vw";
        title[1].style.left = "150vw";
        title[2].style.left = "250vw";
      }

      currentScrollTop = fncScrollTop;
    } else {
      // 向上滚动
      if (fncScrollTop < 500) {
        title[0].style.left = 0;
        title[1].style.left = "17vw";
        title[2].style.left = "50vw";
        currentScrollTop = fncScrollTop;
      }
    }
  }
}

// 睡眠函数
function sleep(timer) {
  return new Promise((resolve) => setTimeout(resolve, timer));
}

// 滚动到底部
async function catchBottom() {
  maskStory.style.display = "block";
  mask.style.display = "none";
  if (transformX <= 100) {
    await sleep(400);
    titleBottom[0].style.transform = `translateX(-${transformX * 10}px)`;
    await sleep(400);
    titleBottom[1].style.transform = `translateX(-${transformX * 10}px)`;
    await sleep(400);
    titleBottom[2].style.transform = `translateX(-${transformX * 10}px)`;
    umbrella.style.left = 0;
    progressWrap.style.left = 0;
  }
  if (transformX < 2200) {
    transformX += 20;
    third.style.left = `-${transformX}px`;
  }
}

// 离开底部
async function leaveBottom() {
  maskStory.style.display = "none";
  mask.style.display = "block";

  if (transformX >= 0) {
    transformX -= 100;
    third.style.left = `-${transformX}px`;
    titleBottom[0].style.transform = "";
    titleBottom[1].style.transform = "";
    titleBottom[2].style.transform = "";
  }
  if (transformX <= 500) {
    umbrella.style.left = "50%";
    progressWrap.style.left = "50%";
  }
}

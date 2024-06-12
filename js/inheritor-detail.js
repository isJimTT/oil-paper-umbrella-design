const backBtn = document.querySelector(".back-btn");
const textWrap = document.querySelector(".text-wrap");
const maskText = document.querySelector(".text-wrap .mask-text");
const rightArr = document.querySelector(".right-arr");

backBtn.onclick = () => {
  window.location = "./directory.html";
};
rightArr.onclick = () => {
  window.location = "./inheritor.html";
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

if (textWrap) {
  observer.observe(textWrap);
} else {
  console.error("目标元素未找到");
}

let backBtn = document.querySelector(".back-umbrella img");
let directories = document.querySelectorAll(".directory .light");
let midLines = document.querySelectorAll(".directory span");
//
let mainBg = document.querySelector(".main");
let eye = document.querySelector(".eyes-inner");

// 返回首页按钮
backBtn.onclick = () => {
  window.location = "../index.html";
};

// 跟随鼠标事件
mainBg.onmousemove = (e) => {
  const directMouse = e.clientX;

  console.log(directMouse > 0.75 && directMouse < innerWidth);

  if (directMouse > 0 && directMouse < innerWidth * 0.25) {
    midLines[2].classList.remove("mid-line");
    midLines[3].classList.remove("mid-line");
    midLines[1].classList.remove("mid-line");
    midLines[0].classList.add("mid-line");
  }
  if (directMouse > innerWidth * 0.25 && directMouse < innerWidth * 0.5) {
    midLines[2].classList.remove("mid-line");
    midLines[3].classList.remove("mid-line");
    midLines[0].classList.remove("mid-line");
    midLines[1].classList.add("mid-line");
  }
  if (directMouse > innerWidth * 0.5 && directMouse < innerWidth * 0.75) {
    midLines[0].classList.remove("mid-line");
    midLines[3].classList.remove("mid-line");
    midLines[1].classList.remove("mid-line");
    midLines[2].classList.add("mid-line");
  }
  if (directMouse > innerWidth * 0.75 && directMouse < innerWidth) {
    midLines[2].classList.remove("mid-line");
    midLines[0].classList.remove("mid-line");
    midLines[1].classList.remove("mid-line");
    midLines[3].classList.add("mid-line");
  }

  let x = (e.clientX - eye.offsetLeft) / 3;
  let y = (e.clientY - eye.offsetTop) / 10;
  eye.style.transform = `translateX(${x}px) translateY(${y}px)`;
  mainBg.style.backgroundPosition = `${x / 10}px ${y / 10}px`;
};

// 目录鼠标悬浮样式
directories.forEach((item, index) => {
  item.addEventListener("mouseenter", (e) => {
    directories.forEach((dirItem, index) => {
      dirItem.style.scale = "1";
      midLines[index].classList.remove("mid-line");
    });

    midLines[index].classList.add("mid-line");
    e.target.style.scale = "1.1";
  });
});

directories[0].onclick = () => {
  window.location = "./technique.html";
};
directories[1].onclick = () => {
  window.location = "./history.html";
};
directories[2].onclick = () => {
  window.location = "./inheritor-detail.html";
};
directories[3].onclick = () => {
  window.location = "./expression.html";
};

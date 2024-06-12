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
  let x = (e.clientX - eye.offsetLeft) / 3;
  let y = (e.clientY - eye.offsetTop) / 10;
  eye.style.transform = `translateX(${x}px) translateY(${y}px)`;
  mainBg.style.backgroundPosition = `${x / 10}px ${y / 10}px`;
};

// 目录鼠标悬浮样式
directories.forEach((item, index) => {
  item.addEventListener("mouseenter", (e) => {
    directories.forEach((dirItem, index) => {
      dirItem.style.borderImageSource = "";
      dirItem.style.border = "none";
      dirItem.style.scale = "1";
      midLines[index].classList.remove("mid-line");
    });

    midLines[index].classList.add("mid-line");
    e.target.style.borderImageSource =
      "radial-gradient(45% 100%, transparent 0px, transparent 100%, #fff 100%)";
    e.target.style.borderImageSlice = "10";
    e.target.style.borderWidth = "3px";
    e.target.style.borderStyle = "solid";
    e.target.style.borderImageOutset = "0.1cm";
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

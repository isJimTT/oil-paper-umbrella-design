let backBtn = document.querySelector(".back-umbrella img");

//
let mainBg = document.querySelector(".main");
let eye = document.querySelector(".eyes-inner");

backBtn.onclick = () => {
  window.location = "../index.html";
};

mainBg.onmousemove = (e) => {
  let x = (e.clientX - eye.offsetLeft) / 3;
  let y = (e.clientY - eye.offsetTop) / 10;

  eye.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

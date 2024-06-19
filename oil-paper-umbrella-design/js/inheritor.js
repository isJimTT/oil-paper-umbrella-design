const backBtn = document.querySelector(".back-btn");
const rightArr = document.querySelector(".right-arr");
const video = document.querySelector(".video");
const content = document.querySelector(".content");

backBtn.onclick = () => {
  window.location = "./inheritor-detail.html";
};

rightArr.onclick = () => {
  video.style.display = "block";
  content.style.filter = "blur(15px)";
};

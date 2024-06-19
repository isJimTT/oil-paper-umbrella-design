const backBtn = document.querySelector(".back-btn");
const rightArr = document.querySelector(".right-arr");
const video = document.querySelector(".video");

backBtn.onclick = () => {
  window.location = "./inheritor-detail.html";
};

rightArr.onclick = () => {
  video.style.display = "block";
};

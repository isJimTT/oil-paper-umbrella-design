function createCustomNavbar() {
  const currentPath = getCurrentPath();
  let navbarItems = [
    {
      src: "../assets/img/navigate/1.png",
      hoverSrc: "../assets/img/navigate/1hover.png",
      scale: "1",
    },
    {
      src: "../assets/img/navigate/2.png",
      hoverSrc: "../assets/img/navigate/2hover.png",
      scale: "1",
    },
    {
      src: "../assets/img/navigate/3.png",
      hoverSrc: "../assets/img/navigate/3hover.png",
      scale: "1",
    },
    {
      src: "../assets/img/navigate/4.png",
      hoverSrc: "../assets/img/navigate/4hover.png",
      scale: "1",
    },
  ];

  switch (currentPath) {
    case "technique.html":
      navbarItems[0].src = navbarItems[0].hoverSrc;
      navbarItems[0].scale = 1.3;
      break;
    case "history.html":
      navbarItems[1].src = navbarItems[1].hoverSrc;
      navbarItems[1].scale = 1.3;
      break;
    case "inheritor-detail.html":
      navbarItems[2].src = navbarItems[2].hoverSrc;
      navbarItems[2].scale = 1.3;
      break;
    case "expression.html":
      navbarItems[3].src = navbarItems[3].hoverSrc;
      navbarItems[3].scale = 1.3;
      break;
    default:
      return;
  }

  //
  function getCurrentPath() {
    const pathname = decodeURIComponent(window.location.pathname);
    // 找到 "view" 的位置
    const viewIndex = pathname.indexOf("/view/");

    if (viewIndex !== -1) {
      // 截取 "view" 后面的部分
      const result = pathname.substring(viewIndex + 6);
      return result;
    } else {
      return {};
    }
  }

  const navbar = document.createElement("nav");
  navbar.classList.add("custom-navbar");
  const navList = document.createElement("div");
  navbarItems.forEach((item, index) => {
    const navItem = document.createElement("img");
    navItem.src = item.src;
    navItem.setAttribute("index", index);
    navItem.style.scale = item.scale;
    navList.classList.add("nav-list");
    navList.appendChild(navItem);
  });
  navbar.appendChild(navList);

  // 路由切换
  navbar.firstElementChild.onclick = (e) => {
    console.log(e);
    switch (e.target.getAttribute("index")) {
      case "0":
        window.location = "./technique.html";
        break;
      case "1":
        window.location = "./history.html";
        break;

      case "2":
        window.location = "./inheritor-detail.html";
        break;

      case "3":
        window.location = "./expression.html";
        break;
      default:
        window.location = "./directory.html";
    }
  };

  // 鼠标移入
  navbar.addEventListener("mouseenter", () => {
    navbar.firstElementChild.style.top = "0px";
  });
  // 移出
  navbar.addEventListener("mouseleave", () => {
    navbar.firstElementChild.style.top = "-100px";
  });

  // 蒙版
  const mask = document.createElement("div");
  mask.classList.add("mask");

  // 展开/收拢
  const toggleButton = document.createElement("img");
  toggleButton.src = "../assets/img/navigate/meau.png";
  toggleButton.classList.add("toggle-button");
  navbar.appendChild(toggleButton);
  // let isNavExpanded = false;
  toggleButton.addEventListener("click", function () {
    if (!isNavExpanded) {
      console.log(navbar.firstElementChild);
      navbar.firstElementChild.style.top = "-100px";
    } else {
      navbar.firstElementChild.style.top = "0px";
    }
    isNavExpanded = !isNavExpanded;
  });
  return navbar;
}

// CSS样式
const styles = `
.top-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 25px;
  background-color: #818181;
  z-index: 99999;
}
.custom-navbar {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 25px;
    right: 0;
    width: 100%;
    height: 70px;
    color: #fff;
    z-index: 999;
}


.mask {
  position: fixed;
  width: 100vw;
  height: 50px;
  top: 25px;
  background: linear-gradient(to bottom, #1e1c1d 10%,  rgba(0, 0, 0, 0.001) 100%);
  z-index: 9999;
  pointer-events: none;
}

.nav-list {
  display: flex;
  position: relative;
  top:-100px;
  flex: 80%;
  margin-left: 200px;
  margin-right: 200px;
  justify-content: space-between;
  transition: all 1s ease;
}
.nav-list img {
  width: 5vw;
  position: relative;
  cursor: pointer;
  z-index: 999;
   transition: border-bottom 0.1s ease;
}
  .nav-list img:hover {
  border-bottom: 2px solid #9e9c9c;
}


.toggle-button {
  margin-right: 50px;
  // cursor: pointer;
}

`;

// 添加CSS样式
const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.body.appendChild(styleElement);

function createCustomNavbar() {
  getCurrentPath();

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

  const navbarItems = [
    {
      src: "../assets/img/navigate/1.png",
      hoverSrc: "../assets/img/navigate/1hover.png",
      link: "",
    },
    {
      src: "../assets/img/navigate/2.png",
      hoverSrc: "../assets/img/navigate/2hover.png",
      link: "",
    },
    {
      src: "../assets/img/navigate/3.png",
      hoverSrc: "../assets/img/navigate/3hover.png",
      link: "",
    },
    {
      src: "../assets/img/navigate/4.png",
      hoverSrc: "../assets/img/navigate/4hover.png",
      link: "",
    },
  ];

  const navbar = document.createElement("nav");
  navbar.classList.add("custom-navbar");
  const navList = document.createElement("div");
  navbarItems.forEach((item) => {
    const navItem = document.createElement("img");
    navItem.src = item.src;
    navList.classList.add("nav-list");

    navList.appendChild(navItem);
  });
  navbar.appendChild(navList);

  const toggleButton = document.createElement("img");
  toggleButton.src = "../assets/img/navigate/meau.png";
  toggleButton.classList.add("toggle-button");
  navbar.appendChild(toggleButton);

  const mask = document.createElement("div");
  mask.classList.add("mask");

  let isNavExpanded = false;
  toggleButton.addEventListener("click", function () {
    console.log(111111);
    if (!isNavExpanded) {
      navbar.classList.add("expanded");
    } else {
      navbar.classList.remove("expanded");
    }
    isNavExpanded = !isNavExpanded;
  });
  console.log(navbar);
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
    background: #1e1c1d;
}

.mask {
  position: fixed;
  width: 100vw;
  height: 50px;
  top: 25px;
  background: linear-gradient(to bottom, #1e1c1d 1%, rgba(0, 0, 0, 0) 100%);
  z-index: 9999;
}

.nav-list {
  display: flex;
  flex: 80%;
  margin-left: 200px;
  margin-right: 200px;
  justify-content: space-between;
}
`;

// 添加CSS样式
const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.body.appendChild(styleElement);

function Throttle(func, time) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        func();
        timer = null;
      }, time);
    }
  };
}

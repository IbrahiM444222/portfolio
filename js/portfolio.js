let upScroll = document.querySelector(".up");

window.onscroll = function () {
  window.scrollY >= 1000
    ? upScroll.classList.add("show-span")
    : upScroll.classList.remove("show-span");
};

upScroll.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  let y = Math.abs(intr.getBoundingClientRect().y) + 32;
  if (y >= intr.getBoundingClientRect().height) {
    head.classList.add("header--scrolled");
    topLink.classList.add("nav--enabled");
  }
  else {
    head.classList.remove("header--scrolled");
    topLink.classList.remove("nav--enabled");
  }
})
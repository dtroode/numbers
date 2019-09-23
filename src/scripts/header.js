window.addEventListener("scroll", () => {
  let y = Math.abs(intr.getBoundingClientRect().y) + 32;
  if (y >= intr.getBoundingClientRect().height) {
    head.classList.add("header--scrolled");
  }
  else {
    head.classList.remove("header--scrolled");
  }
})
const mobNav = document.querySelector("#mobNav");

window.addEventListener("scroll", () => {
  let y = Math.abs(intr.getBoundingClientRect().y) + 32;
  if (y >= intr.getBoundingClientRect().height) {
    head.classList.add("header--scrolled");
  }
  else {
    head.classList.remove("header--scrolled");
  }
})

function closeNav() {
  mobNav.style.opacity = "0";
  setTimeout(() => {
    mobNav.classList.remove("mob-nav--opened");

  }, 100);
  document.body.style.overflowY = "scroll";
}

document.querySelector("#open").addEventListener("click", () => {
  mobNav.style.opacity = "1";
  setTimeout(() => {
    mobNav.classList.add("mob-nav--opened");

  }, 100);
  document.body.style.overflowY = "hidden";
})

document.querySelector("#close").addEventListener("click", () => {
  closeNav()
})

mobNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    closeNav()
  })
})
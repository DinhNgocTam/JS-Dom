let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let logo = document.querySelector("nav h1");
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

//Logo (shouldn't using this)
logo.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
  logo.classList.remove("hovered-link");
});

logo.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
  logo.classList.add("hovered-link");
});

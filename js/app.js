const darkMonde = document.querySelector("#darklabel");

darkMonde.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector("#toggleDark"),
    body = document.querySelector("body");

  toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {
      body.style.background = "#fff9d7";
      body.style.color = "#090826";
      body.style.transition = "1s";
    } else {
      body.style.background = "#090826";
      body.style.color = "#fff9d7";
      body.style.transition = "1s";
    }
  });
});

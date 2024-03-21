function mobile() {
  const x = document.querySelector(".nav-menu");
  if (x.className === "nav-menu") {
    x.className += " small-screen";
  } else {
    x.className = "nav-menu";
  }
}

const img = document.getElementById("imgHover");

img.addEventListener("mouseenter", () => {
  img.src = "./assets/obras/primera imagen.png";
});

img.addEventListener("mouseleave", () => {
  img.src = "./assets/obras/los comedores de patatas.jfif";
});
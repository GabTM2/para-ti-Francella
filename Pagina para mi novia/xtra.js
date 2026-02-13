const btn = document.getElementById("openSurprise");
  const content = document.getElementById("surpriseContent");

  btn.addEventListener("click", () => {
    content.classList.add("show");
    btn.style.display = "none"; // Oculta el botón después de hacer clic
  });
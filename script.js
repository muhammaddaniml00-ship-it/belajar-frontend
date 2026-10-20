
const projectButton = document.querySelector("#projectButton");
const projectMessage = document.querySelector("#projectMessage");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

projectButton.addEventListener("click", () => {
  projectMessage.textContent =
    "Proyek ini dibuat menggunakan HTML, CSS, dan JavaScript!";
});

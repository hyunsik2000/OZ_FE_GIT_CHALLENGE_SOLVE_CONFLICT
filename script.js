document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll("section");
  section.forEach((sec) => {
    sec.addEventListener("click", (event) => {
      console.log(event);
      sec.classList.toggle("highlight");
    });
  });
});

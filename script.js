document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelectorAll("section");
  section.forEach((sec) => {
    sec.addEventListener("click", (e) => {
      if (e.target.id === "basic-commands") {
        alert("You clicked on Basic Commands section!");
      }
      sec.classList.toggle("highlight");
    });
  });
});

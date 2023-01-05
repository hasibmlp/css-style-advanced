const todo = document.querySelector(".todo__heading");
const arrow = document.querySelector(".arrow");

todo.addEventListener("click", () => {
  const form = document.querySelector("form");
  form.classList.toggle("is-open");
});

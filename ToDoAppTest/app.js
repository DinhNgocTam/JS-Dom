const app = document.querySelector(".app");
const inputHTML = document.querySelector("#app__input");
const buttonHTML = document.querySelector("#app__button");
const taskListHTML = document.querySelector("#task__list");
const counterTask = document.querySelector(".numberList");
let count = 0;

buttonHTML.addEventListener("click", () => {
  count++;
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `<span>${count - 1}</span>
  <p>${inputHTML.value}</p>
  <button onClick = "handleDeleteTask(this)">DELETE</button>`;
  taskItem.classList.add("task__item");
  taskListHTML.appendChild(taskItem);

  //Clear input
  inputHTML.value = "";

  counterTask.textContent = count;
  if (count >= 7) {
    app.style.height = "auto";
  }
});
const handleDeleteTask = (e) => {
  const item = e.closest(".task__item");
  item.remove();
  count--;
  counterTask.textContent = count;
  if (count < 7) {
    app.style.height = `${500}px`;
  }
};

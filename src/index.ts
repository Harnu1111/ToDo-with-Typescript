const input = document.getElementById("input") as HTMLInputElement;
const btn = document.getElementById("button") as HTMLButtonElement;
const list = document.getElementById("list") as HTMLUListElement;

btn.addEventListener("click", (e) => {
e.preventDefault()

  const task = document.createElement("li");
  const item = document.createElement("item");
  const label = document.createElement("label");
  const check = document.createElement("input");
  const deletebtn = document.createElement("button");

  check.type = "checkbox";

  deletebtn.innerHTML = "Delete";
  deletebtn.classList.add("deleteBtn");

  item.innerHTML = input.value;
  label.append(check, item, deletebtn);
  task.append(label);
  list.append(task);

  deletebtn.addEventListener("click", () => {
    task.remove();
  });

  check.addEventListener("change", () => {
    if (check.checked) {
      task.style.textDecoration = "line-through";
    } else {
      task.style.textDecoration = "none";
    }
  });

  input.value = "";
});



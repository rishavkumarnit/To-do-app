const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = input.value;
  if (!userData) {
    alert("please add some task");
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task", "mt-5");
  const content = document.createElement("div");
  content.classList.add("content");

  const taskInput = document.createElement("input");
  taskInput.classList.add(
    "block",
    "w-full",
    "px-3",
    "py-2",
    "border",
    "border-gray-400",
    "rounded-md",
    "shadow-sm",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "border",
    "hover:border-blue-500"
  );
  taskInput.value = userData;
  taskInput.setAttribute("readonly", "readonly");
  taskInput.type = "text";

  content.appendChild(taskInput);
  task.appendChild(content);
  tasks.appendChild(task);

  const taskActions = document.createElement("div");
  taskActions.classList.add("actions", "mt-2");
  const taskEdit = document.createElement("button");
  taskEdit.classList.add(
    "bg-red-400",
    "w-15",
    "rounded-sm",
    "shadow-md",
    "cursor-pointer",
    "mr-2",
    "box-border",
    "hover:border",
    "border",
    "border-red-900",
    "hover:border-blue-500"
  );
  taskEdit.innerHTML = "edit";

  const taskDelete = document.createElement("button");
  taskDelete.classList.add(
    "bg-red-600",
    "w-15",
    "rounded-sm",
    "shadow-md",
    "cursor-pointer",
    "box-border",
    "box-border",
    "hover:border",
    "border",
    "border-red-900",
    "hover:border-blue-500"
  );
  taskDelete.innerHTML = "delete";
  taskActions.appendChild(taskEdit);
  taskActions.appendChild(taskDelete);

  task.appendChild(taskActions);
  input.value = "";

  taskEdit.addEventListener("click", (e) => {
    if (taskEdit.innerHTML === "edit") {
      taskInput.removeAttribute("readonly");
      taskEdit.innerHTML = "save";
      taskInput.focus();
    } else {
      taskInput.setAttribute("readonly", "readonly");
      taskEdit.innerHTML = "edit";
    }
  });

  taskDelete.addEventListener("click", (e) => {
    tasks.removeChild(task);
  });
});

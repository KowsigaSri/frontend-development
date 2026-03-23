let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Load tasks on page load
displayTasks();


function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();


  if (taskText === "") {
    alert("Please enter a task");
    return;
  }


  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));


  taskInput.value = "";
  displayTasks();
}


// Read (Display)
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";


  tasks.forEach((task, index) => {
    const li = document.createElement("li");


    const span = document.createElement("span");
    span.textContent = task;


    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(index);


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(index);


    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);


    taskList.appendChild(li);
  });
}


// Update
function editTask(index) {
  const updatedTask = prompt("Edit your task", tasks[index]);


  if (updatedTask !== null && updatedTask.trim() !== "") {
    tasks[index] = updatedTask.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}


// Delete
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}



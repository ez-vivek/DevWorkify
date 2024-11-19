let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");
  const taskStartTime = document.getElementById("taskStartTime");
  const taskEndTime = document.getElementById("taskEndTime");

  const taskName = taskInput.value.trim();
  const date = taskDate.value;
  const startTime = taskStartTime.value;
  const endTime = taskEndTime.value;

  if (!taskName || !date || !startTime || !endTime) {
    alert("Please enter all fields: task, date, start time, and end time.");
    return;
  }

  const task = {
    name: taskName,
    date: date,
    startTime: startTime,
    endTime: endTime,
    completed: false
  };

  tasks.push(task);
  taskInput.value = "";
  taskDate.value = "";
  taskStartTime.value = "";
  taskEndTime.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task";

    const taskCompletion = task.completed ? "100%" : "0%";

    taskItem.innerHTML = `
      <label>
        <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
        <span>${task.date} - ${task.startTime} to ${task.endTime}: ${task.name}</span>
      </label>
      <span class="percentage">Completed: ${taskCompletion}</span>
      <button onclick="removeTask(${index})">Remove</button>
    `;

    taskList.appendChild(taskItem);
  });

  updateProgress();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function updateProgress() {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  document.getElementById("completionPercentage").textContent = `${completionPercentage}%`;
  document.getElementById("progressBar").value = completionPercentage;
}

// Initial render
renderTasks();

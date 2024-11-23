let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const description = document.getElementById('taskInput').value;
    const date = document.getElementById('taskDate').value;
    const startTime = document.getElementById('taskStartTime').value;
    const endTime = document.getElementById('taskEndTime').value;

    if (description && date && startTime && endTime) {
        const task = {
            id: Date.now(),
            description,
            date,
            startTime,
            endTime,
            completed: false
        };

        tasks.push(task);
        updateLocalStorage();
        renderTasks();
        updateProgress();
        clearInputs();
    } else {
        alert('Please fill in all fields !!');
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            <label>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                <span class="task-details">
                    ${task.description} - ${task.date}, ${task.startTime} to ${task.endTime}
                </span>
            </label>
            <button class="delete-btn" onclick="deleteTask(${task.id})" aria-label="Delete task">×</button>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        updateLocalStorage();
        updateProgress();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    updateLocalStorage();
    renderTasks();
    updateProgress();
}

function updateProgress() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    document.getElementById('completionPercentage').textContent = `${percentage}%`;
    document.getElementById('progressBar').value = percentage;
}

function clearInputs() {
    document.getElementById('taskInput').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskStartTime').value = '';
    document.getElementById('taskEndTime').value = '';
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initial render
renderTasks();
updateProgress();

// Make functions accessible globally
window.addTask = addTask;
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;






// let tasks = [];

//         function addTask() {
//             const description = document.getElementById('taskInput').value;
//             const date = document.getElementById('taskDate').value;
//             const startTime = document.getElementById('taskStartTime').value;
//             const endTime = document.getElementById('taskEndTime').value;

//             if (description && date && startTime && endTime) {
//                 const task = {
//                     id: Date.now(),
//                     description,
//                     date,
//                     startTime,
//                     endTime,
//                     completed: false
//                 };

//                 tasks.push(task);
//                 renderTasks();
//                 updateProgress();
//                 clearInputs();
//             } else {
//                 alert('Please fill in all fields !!');
//             }
//         }

//         function renderTasks() {
//             const taskList = document.getElementById('taskList');
//             taskList.innerHTML = '';

//             tasks.forEach(task => {
//                 const li = document.createElement('li');
//                 li.className = 'task';
//                 li.innerHTML = `
//                     <label>
//                         <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
//                         <span class="task-details">
//                             ${task.description} - ${task.date}, ${task.startTime} to ${task.endTime}
//                         </span>
//                     </label>
//                     <button class="delete-btn" onclick="deleteTask(${task.id})" aria-label="Delete task">×</button>
//                 `;
//                 taskList.appendChild(li);
//             });
//         }

//         function toggleTask(id) {
//             const task = tasks.find(t => t.id === id);
//             if (task) {
//                 task.completed = !task.completed;
//                 updateProgress();
//             }
//         }

//         function deleteTask(id) {
//             tasks = tasks.filter(t => t.id !== id);
//             renderTasks();
//             updateProgress();
//         }

//         function updateProgress() {
//             const totalTasks = tasks.length;
//             const completedTasks = tasks.filter(t => t.completed).length;
//             const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

//             document.getElementById('completionPercentage').textContent = `${percentage}%`;
//             document.getElementById('progressBar').value = percentage;
//         }

//         function clearInputs() {
//             document.getElementById('taskInput').value = '';
//             document.getElementById('taskDate').value = '';
//             document.getElementById('taskStartTime').value = '';
//             document.getElementById('taskEndTime').value = '';
//         }
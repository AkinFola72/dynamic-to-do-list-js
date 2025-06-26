document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize task array
    let tasks = [];

    // Load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => {
                createTaskElement(task);
            });
        }
    }

    // Save current task array to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create and append a task <li> to the DOM
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // ✅ Uses classList.add

        // Remove task from DOM, array, and Local Storage
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // Add a new task to the list and save it
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Prevent duplicates (optional)
        if (tasks.includes(taskText)) {
            alert("This task already exists.");
            return;
        }

        tasks.push(taskText);
        saveTasks();
        createTaskElement(taskText);
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when page loads
    loadTasks();
});

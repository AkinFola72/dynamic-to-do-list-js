// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Trim input value
        const taskText = taskInput.value.trim();

        // Check for empty input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // ✅ Uses classList.add

        // Add event to remove task when button is clicked
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append button to <li> and <li> to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask); // ✅ Flag 2

    // Event listener for pressing Enter key in input field
    taskInput.addEventListener('keypress', (event) => { // ✅ Flag 2
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

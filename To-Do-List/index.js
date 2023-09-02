document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        addTask();
    });

    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "task";

            const taskTextElement = document.createElement("span");
            taskTextElement.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });

            taskItem.appendChild(taskTextElement);
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    }
});

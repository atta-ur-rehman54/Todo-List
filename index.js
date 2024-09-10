function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return; // Don't add empty tasks
    }

    const ulList = document.getElementById("ul-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
    `;

    ulList.appendChild(li);
    taskInput.value = ""; 

    li.querySelector(".delete").addEventListener("click", function () {
        ulList.removeChild(li);
    });

    li.querySelector(".edit").addEventListener("click", function () {
        const span = li.querySelector("span");
        const newTaskText = prompt("Edit task:", span.textContent);

        if (newTaskText !== null && newTaskText.trim() !== "") {
            span.textContent = newTaskText;
        }
    });
}
document.getElementById("add").addEventListener("click", addTask);
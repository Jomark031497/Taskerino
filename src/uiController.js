import * as domLoader from "./domloader";
import { createProject, projectList } from "./project";

//Clear the list container when render is called
const clearContainer = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

//A function to render the list of projects when called
export const renderProjects = () => {
    clearContainer(domLoader.listContainer);
    projectList.forEach(project => {
        const projectElement = document.createElement("li");
        const projectAnchor = document.createElement("a");
        projectAnchor.classList.add("project");
        projectAnchor.href = "#";
        projectAnchor.innerText = project.title;
        projectAnchor.id = project.id;
        projectElement.appendChild(projectAnchor);
        domLoader.listContainer.appendChild(projectElement);
    });
};


export const renderTasks = (id) => {

    clearContainer(domLoader.taskContainer);

    const taskList = document.createElement("div");
    taskList.classList.add("tasks-lists");

    for (let i = 0; i < projectList[id].todo.length; i++) {
        const taskName = document.createElement("p");
        taskName.innerText = `Task: ${projectList[id].todo[i].taskName}`;

        const taskPriority = document.createElement("p");
        taskPriority.innerText = `Priority: ${projectList[id].todo[i].taskPriority}`;

        const taskDescription = document.createElement("p");
        taskDescription.innerText = `Description: ${projectList[id].todo[i].taskDescription}`;

        taskList.appendChild(taskName);
        taskList.appendChild(taskPriority);
        taskList.appendChild(taskDescription);
    }


    const projTitle = document.createElement("div");
    projTitle.textContent = projectList[id].title;
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-button");
    addTaskBtn.innerText = "+ Add Task";


    domLoader.taskContainer.appendChild(projTitle);
    domLoader.taskContainer.appendChild(taskList);
    domLoader.taskContainer.appendChild(addTaskBtn);
};

export const addTaskForm = (id) => {

    const taskForm = document.createElement("form");
    taskForm.classList.add("add-task-form");
    taskForm.style = "display:active";

    const task = document.createElement("input");
    task.type = "input"
    task.placeholder = "Task";
    task.classList.add("task", "task-form");

    const select = document.createElement("select");

    const priorityType = ["High", "Medium", "Low"];
    for (let i = 0; i < priorityType.length; i++) {
        const prio = document.createElement("option");
        prio.textContent = priorityType[i];
        select.appendChild(prio);
    }
    select.classList.add("priority", "task-form");

    const description = document.createElement("textarea");
    description.classList.add("description", "task-form");

    const submitTask = document.createElement("button");
    submitTask.classList.add("submit-task", "task-form");
    submitTask.id = "submit-button";
    submitTask.innerText = "Submit Task";

    taskForm.appendChild(task);
    taskForm.appendChild(select);
    taskForm.appendChild(description);
    taskForm.appendChild(submitTask);
    domLoader.taskContainer.appendChild(taskForm);

};
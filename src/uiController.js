import * as domLoader from "./domloader";
import { createProject, projectList } from "./project";

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

const saveToLocal = () => {
    localStorage.setItem(domLoader.LOCAL_STORAGE_PROJECTS, JSON.stringify(projectList))
}

export const renderTasks = (id) => {
    saveToLocal();
    clearContainer(domLoader.taskContainer);
    const taskList = document.createElement("div");
    taskList.classList.add("task-lists");

    for (let i = 0; i < projectList[id].todo.length; i++) {

        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.id = `task${i}`;
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.classList.add("radio-input");

        const taskName = document.createElement("p");
        taskName.innerText = `Task: ${projectList[id].todo[i].taskName}`;
        taskName.classList.add("task-name");

        const taskPriority = document.createElement("p");
        taskPriority.innerText = `Priority: ${projectList[id].todo[i].taskPriority}`;
        taskPriority.classList.add("task-priority");

        const taskDescription = document.createElement("p");
        taskDescription.innerText = `Description: ${projectList[id].todo[i].taskDescription}`;
        taskDescription.classList.add("task-description");
        const removeTaskBtn = document.createElement("button");

        taskCard.appendChild(radioBtn);
        taskCard.appendChild(taskName);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskDescription);
        taskList.appendChild(taskCard);
    }

    const projTitle = document.createElement("div");
    projTitle.textContent = `Project: ${projectList[id].title}`;
    projTitle.classList.add("task-project-header");
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
import * as domLoader from "./domloader";
import { createProject, projectList, createTodo } from "./project";
import { renderProjects, renderTasks, addTaskForm } from "./uiController";



export const loadDOMEvents = () => {
    let currentProjectID;
    domLoader.addProjectForm.addEventListener("submit", (e) => {

        e.preventDefault();
        const projectName = domLoader.addProjectInput.value;
        if (projectName == null || projectName === "") return;
        const newProject = createProject(projectName);
        domLoader.addProjectInput.value = null;
        renderProjects();
    });

    domLoader.listContainer.addEventListener("click", function (e) {

        if (e.target.tagName.toLowerCase() === "a") {
            renderTasks(e.target.id - 1);
            currentProjectID = e.target.id - 1;
            console.log(currentProjectID);
        }
    });

    domLoader.taskContainer.addEventListener("click", e => {


        if (e.target.className.toLowerCase() === "add-task-button") {
            addTaskForm(e.target.id);
        }
        if (e.target.id.toLowerCase() === "submit-button") {

            const taskName = document.querySelector(".task").value;
            const taskPriority = document.querySelector(".priority").value;
            const taskDescription = document.querySelector(".description").value;
            e.target.parentNode.parentNode.removeChild(domLoader.taskContainer.lastElementChild);
            const newTodo = createTodo(taskName, taskPriority, taskDescription, currentProjectID);
            renderTasks(currentProjectID);

        }
    });

}

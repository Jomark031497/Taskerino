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
    }
  });

  domLoader.taskContainer.addEventListener("click", (e) => {
    console.log(e.target.className);

    if (e.target.className.toLowerCase() === "add-task-button") {
      addTaskForm(e.target.id);
    }
    if (e.target.id.toLowerCase() === "submit-button") {
      const taskName = document.querySelector(".task").value;
      const taskPriority = document.querySelector(".priority").value;
      const taskDescription = document.querySelector(".description").value;
      e.target.parentNode.parentNode.removeChild(
        domLoader.taskContainer.lastElementChild
      );
      const newTodo = createTodo(
        taskName,
        taskPriority,
        taskDescription,
        currentProjectID,
        taskStatus="ongoing"
      );
      renderTasks(currentProjectID);
    }

    if (e.target.className === "remove-task") {
      let taskIndex = e.target.parentNode.id.slice(4, 5);
      projectList[currentProjectID].todo.splice(parseInt(taskIndex), 1);
      renderTasks(currentProjectID);
    }
  });

  domLoader.taskContainer.addEventListener("change", (e) => {
    let taskCard = e.target.parentNode;
    if (taskCard.className === "task-card ongoing") {
      taskCard.classList.toggle("ongoing");
      taskCard.classList.toggle("finished");
      taskCard.style = "text-decoration: line-through";
      renderTasks(currentProjectID);
    } else {
      taskCard.classList.toggle("ongoing");
      taskCard.classList.toggle("finished");
      taskCard.style = "text-decoration: none";
    }
  });
};

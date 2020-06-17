import { LOCAL_STORAGE_PROJECTS } from "./domloader";

export let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS)) || [];

const projectFactory = (title) => {
    return { id: projectList.length + 1, title: title, todo: [] };
}

export const createProject = (title) => {
    const newProject = projectFactory(title);
    projectList.push(newProject);
}

const todoFactory = (taskName, taskPriority, taskDescription) => {
    return { taskName, taskPriority, taskDescription };
};

export const createTodo = (taskName, taskPriority, taskDescription, id) => {
    const newTodo = todoFactory(taskName, taskPriority, taskDescription, id);
    projectList[id].todo.push(newTodo);
    console.log(projectList[id]);
};
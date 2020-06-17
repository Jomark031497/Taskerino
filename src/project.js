

//the "database"
export let projectList = [];

//a factory function to create projects
const projectFactory = (title) => {

    return {id: projectList.length +1 , title: title, todo: [] };
}


//a function to invoke the factory function and add the created project to the database
export const createProject = (title) => {
    const newProject = projectFactory(title);
    projectList.push(newProject);
}

const todoFactory = (taskName,taskPriority, taskDescription) => {

    return {taskName,taskPriority,taskDescription};
};

export const createTodo = (taskName,taskPriority,taskDescription,id) => {

    const newTodo = todoFactory(taskName,taskPriority,taskDescription,id);
    projectList[id].todo.push(newTodo);
    console.log(projectList[id]);
};
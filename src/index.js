import * as domLoader from "./domloader";
import {renderProjects} from "./uiController";
import {createProject} from "./project";
import {loadDOMEvents} from "./eventController";
createProject("Baby Duties");
createProject("DDS ang aming tatak");

renderProjects();
loadDOMEvents();




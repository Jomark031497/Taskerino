!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.querySelector(".list-container"),r=document.querySelector(".task-container"),a=document.querySelector(".add-project-form"),d=document.querySelector(".add-project-input");let i=[];const c=e=>{const t=(e=>({id:i.length+1,title:e,todo:[]}))(e);i.push(t)},s=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},l=()=>{s(o),i.forEach(e=>{const t=document.createElement("li"),n=document.createElement("a");n.classList.add("project"),n.href="#",n.innerText=e.title,n.id=e.id,t.appendChild(n),o.appendChild(t)})},u=e=>{s(r);const t=document.createElement("div");t.classList.add("tasks-lists");for(let n=0;n<i[e].todo.length;n++){const o=document.createElement("p");o.innerText="Task: "+i[e].todo[n].taskName;const r=document.createElement("p");r.innerText="Priority: "+i[e].todo[n].taskPriority;const a=document.createElement("p");a.innerText="Description: "+i[e].todo[n].taskDescription,t.appendChild(o),t.appendChild(r),t.appendChild(a)}const n=document.createElement("div");n.textContent=i[e].title;const o=document.createElement("button");o.classList.add("add-task-button"),o.innerText="+ Add Task",r.appendChild(n),r.appendChild(t),r.appendChild(o)};c("Baby Duties"),c("DDS ang aming tatak"),l(),(()=>{let e;a.addEventListener("submit",e=>{e.preventDefault();const t=d.value;if(null==t||""===t)return;c(t);d.value=null,l()}),o.addEventListener("click",(function(t){"a"===t.target.tagName.toLowerCase()&&(u(t.target.id-1),e=t.target.id-1,console.log(e))})),r.addEventListener("click",t=>{if("add-task-button"===t.target.className.toLowerCase()&&(e=>{const t=document.createElement("form");t.classList.add("add-task-form"),t.style="display:active";const n=document.createElement("input");n.type="input",n.placeholder="Task",n.classList.add("task","task-form");const o=document.createElement("select"),a=["High","Medium","Low"];for(let e=0;e<a.length;e++){const t=document.createElement("option");t.textContent=a[e],o.appendChild(t)}o.classList.add("priority","task-form");const d=document.createElement("textarea");d.classList.add("description","task-form");const i=document.createElement("button");i.classList.add("submit-task","task-form"),i.id="submit-button",i.innerText="Submit Task",t.appendChild(n),t.appendChild(o),t.appendChild(d),t.appendChild(i),r.appendChild(t)})(t.target.id),"submit-button"===t.target.id.toLowerCase()){const n=document.querySelector(".task").value,o=document.querySelector(".priority").value,a=document.querySelector(".description").value;t.target.parentNode.parentNode.removeChild(r.lastElementChild);((e,t,n,o)=>{const r=((e,t,n)=>({taskName:e,taskPriority:t,taskDescription:n}))(e,t,n);i[o].todo.push(r),console.log(i[o])})(n,o,a,e);u(e)}})})()}]);
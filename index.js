

const additem = document.querySelector(".todo-buttom");
const ulTodo = document.querySelector(".ul-todo");
const todo_input = document.querySelector(".todo-input");


additem.addEventListener("click", todoItem);
ulTodo.addEventListener("click", deletecomplete);
document.addEventListener("DOMContentLoaded", getTodos);

function todoItem(event){
    event.preventDefault();
let div =document.createElement("div");
div.classList.add("div-todo");

let li = document.createElement("li");
div.appendChild(li);
li.innerText = todo_input.value;

let check = document.createElement("buttom");
check.classList.add("check-buttom");
check.innerHTML="<i class='fa fa-check' style='font-size:36px' ></i>";
div.appendChild(check);

let Supprimer = document.createElement("buttom");
Supprimer.innerHTML="<i class='material-icons' style='font-size:32px'>delete</i>";
Supprimer.classList.add("suprimer-buttom");
div.appendChild(Supprimer);

saveLocalTodo(todo_input.value);
todo_input.value= " ";



ulTodo.appendChild(div);


}

function deletecomplete(event){
    const item = event.target;
    if (item.classList[0] === "material-icons") {
        const todo = item.parentElement.parentElement;
        removeLocalTodo(todo);
        todo.remove();
    }
    if(item.classList[0] === "fa"){
        const m =event.target.parentElement.previousElementSibling;
      m.classList.toggle("completed");
    }
}

function saveLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    
    todos.forEach(function (todo) {
        
        let div =document.createElement("div");   
    div.classList.add("div-todo");let li = document.createElement("li");

    li.innerText = todo;
    div.appendChild(li);

    let check = document.createElement("buttom");
    check.classList.add("check-buttom");
    check.innerHTML="<i class='fa fa-check' style='font-size:36px' ></i>";
    div.appendChild(check);

    let Supprimer = document.createElement("buttom");
    Supprimer.innerHTML="<i class='material-icons' style='font-size:32px'>delete</i>";
    Supprimer.classList.add("suprimer-buttom");

    div.appendChild(Supprimer);

    ulTodo.appendChild(div);
    })
}
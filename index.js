const additem = document.querySelector(".todo-buttom");
const ulTodo = document.querySelector(".ul-todo");
additem.addEventListener("click", todoItem)




function todoItem(event){
    event.preventDefault();
const div =document.createElement("div");
div.classList.add("div-todo");
const li = document.createElement("li");
div.appendChild(li);
const Supprimer = document.createElement("buttom");
Supprimer.classList.add("suprimer-buttom")
Supprimer.innerHTML="<i class='material-icons' style='font-size:32px'>delete</i>";
div.appendChild(Supprimer);
const check = document.createElement("buttom");
check.classList.add("check-buttom")
check.innerHTML="<i class='fa fa-check' style='font-size:36px' ></i>";
div.appendChild(check);

ulTodo.appendChild(div);


}

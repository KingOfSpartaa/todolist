//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//Events Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
function addTodo(event) {
    //Prevent form before submiting
    event.preventDefault()
    //Todo DIV
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    toDoDiv.appendChild(newTodo);
    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    toDoDiv.appendChild(completeButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    toDoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(toDoDiv);
todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function(){
            todo.remove();
        })
    }
//check mark
if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
}
}

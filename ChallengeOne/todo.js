import { saveTodoList, loadLSTodoList } from "./ls.js";
import { checkBox, changeClassTaskComplete, changeClassTaskNotComplete, removeButton, removeRow, updateTasksLeft} from "./utilities.js";

//todo class - this class is what a todo is made of
class todo
{
    constructor(id,content,complete)
    {
        this.id = id;
        this.content = content;
        this.complete = complete;
    }
}

//array of todos
const todoList = [];

// loadTodoList() Load the todos
export function loadTodoList()
{
    //get the todo list from local storage
    const newTodoList = loadLSTodoList();
    for (let i = 0; i< newTodoList.length; i++)
    {
        //add the loaded todos to the list
        todoList.push(newTodoList[i]);
    }
}

//showAll() show all the todos
export function showAll()
{
    for(let i = 0; i< todoList.length; i++)
    {    
        showOne(todoList[i]);
    }
}

//showActiveTasks()- shows all the to do that are not completed
export function showActiveTasks()
{
    for(let i = 0; i < todoList.length; i++)
    {
        if(todoList[i].complete == false)
        {
            showOne(todoList[i]);
        }
    }
}

//showCompletedTasks()-shows completed todos
export function showCompletedTasks()
{
    for(let i = 0; i < todoList.length; i++)
    {
        if(todoList[i].complete == true)
        {
            showOne(todoList[i]);
        }
    }
}

//addTask-add a new todo to the list
export function addTask()
{
    let addTodo = new todo(Date.now(),document.getElementById("addtask").value,false);
    todoList.push(addTodo);
    showOne(addTodo);
    saveTodoList(todoList);
    countActiveTodos();   
}

//showOne()-renders one to do
export function showOne(todo)
{
    let table = document.getElementById("todoList");
    let rowCount = document.getElementById("todoList").rows.length;
    let row = table.insertRow(rowCount - 1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);

    row.id = todo.id;
    cell.innerHTML = checkBox(todo.id, todo.complete);
    cell1.id = todo.id;
    cell1.innerHTML = todo.content;
    cell1.colSpan = "2";
    cell2.innerHTML = removeButton(todo.id);
    //set the checkbox based on if it is completed
    if (todo.complete == false)
    {
        todo.complete = false;
        changeClassTaskNotComplete(todo.id);        
    }

    else
    {
        todo.complete = true;   
        changeClassTaskComplete(todo.id);   
    }
}

//iscComplete-return the status of the to do 
export function isCompleted(todoID)
{
    let index = findTodo(todoID);
    if (todoList[index].complete == true)
    {
        return true;
    }
    else
    {
       return false;
    }
}

//findTodo-return the index of a todo
function findTodo(todoID)
{
    let index = todoList.map( object => object.id).indexOf(parseInt(todoID));
    return index;
}

//setCompletedStatus-sets the status of a todo based on if the checkbox
//is check by the user
export function setCompleteStatus(todoID)
{
    let index = findTodo(todoID);
    let taskComplete = isCompleted(todoID);
    if (taskComplete == true)
    {
        todoList[index].complete = false;
        changeClassTaskNotComplete(todoID);       
    }

    else
    {
        todoList[index].complete = true;        
        
        changeClassTaskComplete(todoID);
         
    }
    saveTodoList(todoList);
    countActiveTodos();   
}

//removeTodo-removes a todo
export function removeTodo(todoID, rowIndex)
{
    let index = findTodo(todoID);
    todoList.splice(index,1);
    removeRow(rowIndex);
    countActiveTodos();
    saveTodoList(todoList);
}

//countActiveTodo- counts the todo that are still active
export function countActiveTodos()
{
    
    let numTodo = todoList.length;
    for(let i = 0; i < todoList.length; i++)
    {
        if(todoList[i].complete == true)
        {
            numTodo = numTodo - 1;
        }
    }
    updateTasksLeft(numTodo);
}

import { loadLSTodoList } from "./ls.js";
import { addTask, showAll,  setCompleteStatus, removeTodo, showActiveTasks, showCompletedTasks, loadTodoList } from "./todo.js";
import { resetTable } from "./utilities.js";

//add a task
function onClickAddTask()
{
    addTask();
}
window.onClickAddTask=onClickAddTask;

//rendres the todo list on load
function onLoadShowList()
{
    loadTodoList();
    showAll();
}
window.onLoadShowList=onLoadShowList;

//marks a todo complete status
function onClickMarkComplete(todoID)
{
    setCompleteStatus(todoID);   
}
window.onClickMarkComplete=onClickMarkComplete;

//removes a todo
function onClickRemove(todo)
{
    let rowIndex = todo.parentNode.parentNode.rowIndex;
    removeTodo(todo.id, rowIndex);
}
window.onClickRemove=onClickRemove;

//renders the view based on the button clicked
function activeView(id)
{
    resetView();
    resetTable();
    if (id == "viewAll")
    {
        showAll();
    }
    if (id == "viewActive")
    {
        showActiveTasks();
    }
    if (id == "viewCompleted")
    {
        showCompletedTasks();
    }
    document.getElementById(id).className = "viewActive";
}
window.activeView=activeView;

function resetView()
{
    document.getElementById("viewAll").className = "view";
    document.getElementById("viewActive").className = "view";
    document.getElementById("viewCompleted").className = "view";
}
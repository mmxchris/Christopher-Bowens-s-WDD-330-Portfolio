import { loadLSTodoList } from "./ls.js";
import { addTask, showAll,  setCompleteStatus, removeTodo, showActiveTasks, showCompletedTasks, loadTodoList } from "./todo.js";
import { resetTable } from "./utilities.js";

function onClickAddTask()
{
    addTask();
    //loadTodoList();
}
window.onClickAddTask=onClickAddTask;

function onLoadShowList()
{
    loadTodoList();
    showAll();
}
window.onLoadShowList=onLoadShowList;

function onClickMarkComplete(todoID)
{
    setCompleteStatus(todoID);
    //markComplete(todoID);
    
}
window.onClickMarkComplete=onClickMarkComplete;

function onClickRemove(todo)
{
    let rowIndex = todo.parentNode.parentNode.rowIndex;
    removeTodo(todo.id, rowIndex);
}
window.onClickRemove=onClickRemove;

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
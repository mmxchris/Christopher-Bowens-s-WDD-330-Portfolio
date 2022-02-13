//cavetodoList-saves a todo list to local storage
export function saveTodoList(todoList)
{
    const todoListJSON = JSON.stringify(todoList)
    localStorage.setItem("todoList", todoListJSON);
}

//loadLSTodo-loads a array of todos from local storage
export function loadLSTodoList()
{
    let todoListText = localStorage.getItem("todoList")
    console.log(localStorage.getItem("todoList"));
    let todoList = JSON.parse(todoListText);
    return todoList;
}
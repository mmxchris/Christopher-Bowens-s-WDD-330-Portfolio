//checkBox changes the checkbox to checked or unchecked based on the status of the todo
export function checkBox(id, todoComplete)
{
    let checkBox = "<input type =\"checkbox\" id=\"" + id + "\" onchange=\"onClickMarkComplete(this.id)\">";

    if (todoComplete == false)
    {
        checkBox = "<input type =\"checkbox\" id=\"" + id + "\" onchange=\"onClickMarkComplete(this.id)\">";
    }
   if (todoComplete == true)
    {
        checkBox = "<input type =\"checkbox\" checked id=\"" + id + "\" onchange=\"onClickMarkComplete(this.id)\">";
    }
    return checkBox;
}

//removeButton- renders a remove button
export function removeButton(todoID)
{
    return "<button type=\"button\" id=\"" + todoID + "\"onclick=\"onClickRemove(this)\">Remove</button>";
}

//changeClassTaskComplete-changes class to of the cell the todo is rendered in to complete
export function changeClassTaskComplete(todoID)
{
    document.getElementById(todoID).cells[1].className = "complete";
}

//changeClassTaskComplete-changes class to of the cell the todo is rendered in to notComplete
export function changeClassTaskNotComplete(todoID)
{
    document.getElementById(todoID).cells[1].className = ".notComplete";
}

//removeRow-removes the table row 
export function removeRow(rowIndex)
{
    document.getElementById("todoList").deleteRow(rowIndex);
}

//restTable-resets the table the todo are rendered in
export function resetTable()
{
    let row = document.getElementsByTagName("tr");    
    for(let i = 1; i < row.length - 1; i)
    {
        removeRow(i);          
    }
}

//updateTasksLeft-update the number of todo that are still active
export function updateTasksLeft(count)
{
    let totalCount = "Tasks Left " + count;
    document.getElementById("tasksLeft").innerHTML = totalCount;
}
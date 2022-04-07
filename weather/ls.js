export function saveHistory(history)
{
    const historyJSON = JSON.stringify(history);
    localStorage.setItem("locHistory", historyJSON)
    console.log("History saved");
}

export function loadHistory()
{
    let historyJSON = localStorage.getItem("locHistory");
    let history = JSON.parse(historyJSON);
    console.log(history);
    return history;
}
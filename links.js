const links =[
{
    label: "Week 1 Notes",
    url: "week1/index.html"
}
]

let lLen = links.length;
let text = "<ol>";

for (let i = 0; i < lLen; i++)
{
    text += "<li><a href=" + links[i].url + ">" + links[i].label + "</a></li>";    
}

text += "</ol>";

document.getElementById("content").innerHTML = text;
const links =[
    {label: "Home",
    url:"index.html"

    },
    {
        label: "Week 1 Notes",
        url: "week1/index.html"       
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    }
    ]
    
    let lLen = links.length;
    let menu = " "
    
    for (let i = 0; i < lLen; i++)
    {
        menu += "<a href=../" + links[i].url + ">" + links[i].label + "</a>";
        console.log(menu);    
    }
    
    document.getElementById("menuContent").innerHTML = menu;
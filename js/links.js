const links =[
    {
        label: "Week 1 Notes",
        url: "week1/index.html"       
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 Notes",
        url: "week4/index.html"
    },{
        label: "Week 5 Notes",
        url: "week5/index.html"
    },{
        
        label: "Week 6: Challenge One-Todo",
        url: "ChallengeOne/challengeOne.html"
        
    }
    ]
    
    let lLen = links.length;
    let text = "<ol>";
    let menu = " "
    
    for (let i = 0; i < lLen; i++)
    {
        //console.log(links[i].label);
       //console.log(links[i].url);
        text += "<li><a href=" + links[i].url + ">" + links[i].label + "</a></li>";
        menu += "<a href=" + links[i].url + ">" + links[i].label + "</a>";
        console.log(menu);    
    }
    
    text += "</ol>";    
    
    document.getElementById("menuContent").innerHTML = menu;
    document.getElementById("content").innerHTML = text;
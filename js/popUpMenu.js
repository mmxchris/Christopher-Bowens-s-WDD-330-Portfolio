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
    let menu = " "
    
    for (let i = 0; i < lLen; i++)
    {
        menu += "<a href=../" + links[i].url + ">" + links[i].label + "</a>";    
    }
    
    document.getElementById("menuContent").innerHTML = menu;
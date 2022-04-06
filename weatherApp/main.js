import { currentWeather, forecastWeather } from "./weather.js";
import { getCurrentWeather,getForecastWeather, getCoords } from "./APICall.js";
import { loadHistory, saveHistory } from "./ls.js";


let current = new currentWeather;
const forecastList = new Array();
let history = [];

document.getElementById('submit').addEventListener('click', setWeather);

async function setCurrentWeather(lat, long){
    current.setCurrent(await getCurrentWeather(lat, long));
}

async function setForecastWeather(lat, lon)
{
    let tempForecast =  await getForecastWeather(lat, lon);
    forecastList.splice(0, forecastList.length);
    for(let i = 0; i < tempForecast.list.length; i += 8)
    {
        let newTempForcast = new forecastWeather;
        newTempForcast.setForecast(tempForecast.list[i], tempForecast.city.name,tempForecast.city.coord.lat, tempForecast.city.coord.lon);
        forecastList.push(newTempForcast);
    }
}

async function displayCurrent()
{
    document.getElementById('currentWeather').style.display = "block";
    await current.displayCurrent();
}

async function displayForecast()
{
    document.getElementById('forecastWeather').innerHTML='';
    for(let i = 0; i < forecastList.length; i++)
    {
        forecastList[i].display();
    }
}

async function setWeather()
{
    let coords = await getCoords(document.getElementById("zipcode").value);
    document.getElementById("zipcode").innerHTML = "";
    await setCurrentWeather(coords.lat, coords.lon);
    addHistory(current.location, coords.zipcode, coords.lat, coords.lon);
    await setForecastWeather(coords.lat, coords.lon);
    await displayCurrent();
    await showForecastButton();
    await displayForecast();
    createBackButton();
    displayHistory();
}

async function showForecastButton()
{
    const showForecastButton = document.createElement('button');
    showForecastButton.innerHTML = "Get 5 day forecast";
    showForecastButton.addEventListener('click', showForecast);
    
    document.getElementById('currentWeather').appendChild(showForecastButton);
}

function createBackButton()
{
    const backButton = document.createElement('button');
    backButton.innerHTML = "Back";
    backButton.addEventListener('click', showCurrent);
    document.getElementById('forecastWeather').appendChild(backButton);
}

function showForecast()
{
    document.getElementById('forecastWeather').style.display = "block";
    document.getElementById('currentWeather').style.display = "none";
    document.getElementById('header').style.display = "none";
    document.getElementById('dropup').style.display ="none";
}

function showCurrent()
{
    document.getElementById('forecastWeather').style.display = "none";
    document.getElementById('currentWeather').style.display = "block";
    document.getElementById('header').style.display = "block"; 
    document.getElementById('dropup').style.display ="block";  
}

function onLoadShowHistory(){
    let savedHistory = loadHistory();
    if (savedHistory !== null)
    {
        history = savedHistory;
    }
    displayHistory();
}
window.onLoadShowHistory=onLoadShowHistory;

function addHistory(location, zipcode, lat, lon)
{
    let newhistory = {location: location,
                    zipcode: zipcode,
                    lat: lat,
                    lon: lon};
    if (history.length == 5)
    {
        history = history.slice(1, history.lenght)
    }
    history.push(newhistory);
    saveHistory(history);
}
function displayHistory()
{
    document.getElementById('history').innerHTML ='';
    for (let i = 0; i < history.length; i++)
    {
        const item = document.createElement('div');
        item.innerHTML += history[i].location + "-" + history[i].zipcode + " ";
        item.setAttribute('id',history[i].zipcode);
        item.onclick = setWeatherByHistory;
        document.getElementById('history').appendChild(item);
    }
    
}

async function setWeatherByHistory(event)
{
    let coords = await getCoords(event.target.id);
    document.getElementById("zipcode").innerHTML = "";
    await setCurrentWeather(coords.lat, coords.lon);
    await setForecastWeather(coords.lat, coords.lon);
    await displayCurrent();
    await showForecastButton();
    await displayForecast();
    createBackButton();
}
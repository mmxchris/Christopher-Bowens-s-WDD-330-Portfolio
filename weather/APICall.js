
let zipcode = 0;
const apiAddress = "https://api.openweathermap.org/data/2.5/";
const currentKey = "weather?"
const forecastKey = "forecast?"
const apiKey = "&appid=ef773b999f588ce53f6a25769ea920ed";
const latKey = "lat=";
const lonKey = "&lon=";
const units = "&units=imperial";

async function getJSON(url)
{
    const response = await fetch(url);
    if (response.ok){
        const fetchJson = await response.json();
        return fetchJson;
    }
}

export async function getCoords(zipcode)
{
    let getLocationAddress="https://api.openweathermap.org/geo/1.0/zip?zip=";
    let getLocationURL = getLocationAddress + zipcode + apiKey;
    const location = await getJSON(getLocationURL);
    const coords = {zipcode:location.zip, lat:location.lat, lon:location.lon}
    return coords;
}

export async function getCurrentWeather(lat, lon){
    let url = apiAddress + currentKey + latKey + lat + lonKey + lon + units + apiKey;
    const currentCondition = await getJSON(url);
    return currentCondition;
}

export async function getForecastWeather(lat, lon)
{
    let url = apiAddress + forecastKey + latKey + lat + lonKey + lon + units + apiKey;
    const forecast = await getJSON(url);
    return forecast;
}

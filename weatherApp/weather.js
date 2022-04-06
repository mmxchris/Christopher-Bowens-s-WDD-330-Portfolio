const imgAddress = 'http://openweathermap.org/img/w/';
const png ='.png';
export class currentWeather {
    constructor (temp, 
        condition,
        windSpeed,
        icon,
        location,
        lat,
        lon) {
        this.temp = temp;
        this.condition = condition;
        this.windSpeed = windSpeed;
        this.icon = icon
        this.location = location;
        this.lat = lat;
        this.lon = lon;
        }
        async setCurrent(currentCondition){
            this.temp = currentCondition.main.temp;
            this.condition = currentCondition.weather[0].description;
            this.windSpeed = currentCondition.wind.speed;
            this.icon = currentCondition.weather[0].icon
            this.location = currentCondition.name;
            this.lat = currentCondition.coord.lat;
            this.lon = currentCondition.coord.lon;
        }
        async displayCurrent()
        {
            document.getElementById('currentWeather').innerHTML='';
            const item = document.createElement('div');
            //item.setAttribute('data-name', this.location);
            item.innerHTML = '<div id="current"> <h2>Location:' + this.location + '</h2>' + 
            '<div class="image"> <img src ="' + imgAddress + this.icon + png + '"></div>' +
            '<div class="condition"><p>Condition: <BR>' + this.condition + '</p></div>' +
            '<div class="temp"><p>Current Temperature: <BR>' + this.temp + '°F</p></div>' + 
            '<div class="wind"><p>Wind Speed: <BR>' + this.windSpeed + ' MPH </p></div></div>'
            document.getElementById('currentWeather').appendChild(item);           
        }
}

export class forecastWeather{
    constructor(tempLow,
        tempHigh,
        condition,
        windSpeed,
        location,
        icon,
        lat,
        lon,
        day) {
            this.tempLow = tempLow;
            this.tempHigh = tempHigh
            this.condition = condition;
            this.windSpeed = windSpeed;
            this.location = location;
            this.icon = icon;
            this.lat = lat;
            this.lon = lon;
            this.day = day;
            }

            async setForecast(forecastWeather, location, lat, lon)
            {
            this.tempLow = forecastWeather.main.temp_min;
            this.tempHigh = forecastWeather.main.temp_max;
            this.condition = forecastWeather.weather[0].description;
            this.windSpeed = forecastWeather.wind.speed;
            this.location = location;
            this.icon = forecastWeather.weather[0].icon;
            this.lat = lat;
            this.lon = lon;
            this.day = getDay(forecastWeather.dt); 
            }

            async display()
            {
                const item = document.createElement('div');
                //item.setAttribute('data-name', this.location)
                //item.style.display = 'none';
                item.innerHTML = 
                '<div id="forecast"><h3>' + this.day +
                '<div class="image"> <img src ="http://openweathermap.org/img/w/' + this.icon + '.png"></div>' +
                '<div class="condition"><p>' + this.condition + '</p></div>' +
                '<div class="temp"><p>Temperatures: <BR> Low: ' + this.tempLow + '°F <BR> High:' + this.tempHigh + '°F</p></div>' + 
                '<div class="wind"><p>Wind Speed: <BR>' + this.windSpeed + ' MPH </p></div> <HR></div>'
                document.getElementById('forecastWeather').appendChild(item);    
            }
        }

function getDay(timestamp)
{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = new Date(timestamp * 1000);
    let dayName = days[day.getDay()];
    return dayName;
}
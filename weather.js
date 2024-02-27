


const apiKey = "5eee2f3efaf5353b1b6ed9bd06d13d4e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWheather(city){
    const response = await fetch(apiUrl + city + '&appid=5eee2f3efaf5353b1b6ed9bd06d13d4e');
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main =="Clear"){
        weatherIcon.src ="images/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src ="images/rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src ="images/snow.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src ="images/mist.png";
    }
    else if(data.weather[0].main =="Clouds"){
        weatherIcon.src ="images/clouds.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src ="images/drizzle.png";
    }   
}  

searchBtn.addEventListener("click", ()=>{
    checkWheather(searchBox.value);

})
function changeTemperatureUnit() {
    var tempElement = document.querySelector('.temp');
    var currentTemp = parseFloat(tempElement.textContent);
    var unitSelector = document.getElementById('temp-unit');
    var selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
    var newTemp;

    switch(selectedUnit) {
        case 'C':
            newTemp = currentTemp;
            break;
        case 'F':
            newTemp = (currentTemp * 9/5) + 32;
            break;
        case 'K':
            newTemp = currentTemp + 273.15;
            break;
        default:
            return; 
    }

    tempElement.textContent = newTemp.toFixed(2) + '°' + selectedUnit;
}


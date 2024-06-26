
function searchCity(city) {
let apiKey = "ffoa584b071af31b9db038336tec0bd6";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiKey);
axios.get(apiURL).then(updateWeather);
let weatherDetailsElement = document.querySelector("#weather-details");
}

function handleSearchSubmit(event) {
event.preventDefault(); 
let searchInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector("#city"); 
cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


function updateWeather(response) {
    let cityElement = document.querySelector("#city");
    let countryElement = document.querySelector("#country");
    let temperatureElement = document.querySelector("#display-degree-celsius");
    let weatherDetailsElement = document.querySelector("#weather-details-element");
    let weatherConditionsElement = document.querySelector("#condition-description");
    let humidityWindElement = document.querySelector("#humidity-wind-description"); 
    let largeIconElement = document.querySelector("#display-icon");
    
    console.log(response.data);
    
    cityElement.innerHTML = response.data.city;
    countryElement.innerHTML = response.data.country;
    temperatureElement.innerHTML = response.data.temperature.current;
    weatherDetailsElement.innerHTML = `${response.data.date} | ${response.data.time}`; 
    weatherConditionsElement.innerHTML =`${response.data.condition.description}`;
    humidityWindElement.innerHTML = `humidity: <strong>${response.data.temperature.humidity}%</strong> | Wind: <strong>${response.data.wind.speed}</strong> km/h`;
    largeIconElement.innerHTML = response.data.condition.icon;
    }
    
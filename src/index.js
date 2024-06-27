
function searchCity (city) {
let apiKey = "ffoa584b071af31b9db038336tec0bd6";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(updateWeather);
let weatherDetailsElement = document.querySelector("#display-degree-celsius");/// this is an issue here go and fix this its wrong 
}
console.log(apiKey);

function handleSearchSubmit(event) {
event.preventDefault(); 
let searchInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector("#city"); 
cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


function updateWeather(response) {
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

    let countryElement = document.querySelector("#country");
    countryElement.innerHTML = response.data.country;

    let temperatureElement = document.querySelector("#display-degree-celsius");
    temperatureElement.innerHTML = response.data.temperature.current;

    let weatherDetailsElement = document.querySelector("#weather-details-element");
    weatherDetailsElement.innerHTML = `${response.data.date} | ${response.data.time}`; 

    let weatherConditionsElement = document.querySelector("#condition-description");
    weatherConditionsElement.innerHTML =`${response.data.condition.description}`;

    let humidityWindElement = document.querySelector("#humidity-wind-description"); 
    humidityWindElement.innerHTML = `humidity:${response.data.temperature.humidity}% | Wind: ${response.data.wind.speed} km/h`;

    let largeIconElement = document.querySelector("#display-icon");
    largeIconElement.innerHTML = response.data.condition.icon;
    }

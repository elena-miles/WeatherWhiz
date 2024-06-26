
function searchCity (city) {
    let apiKey = "ffoa584b071af31b9db038336tec0bd6";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
    axios.get(apiURL).then(updateWeather);
let weatherDetailsElement = document.querySelector("#display-degree-celsius");
console.log(response.data);
}

function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input").value;
let normalizedInput = searchInput.trim().replace(/\s+/g, ' '); // input correcting here 
let city = normalizedInput.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
let cityElement = document.querySelector("#city"); 
cityElement.innerHTML = city;
searchCity (city); //calling search city function 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function formatDate(timestamp) {
let date = new Date(timestamp * 1000);
let hours = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return `${day} | ${hours}:${minutes}`;
}

function updateWeather(response) {
let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

let countryElement = document.querySelector("#country");
    countryElement.innerHTML = response.data.country;

let temperatureElement = document.querySelector("#display-degree-celsius");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);

let weatherConditionsElement = document.querySelector("#condition-description"); 
    weatherConditionsElement.innerHTML =`${response.data.condition.description}`;

let humidityElement = document.querySelector("#humidity"); 
    humidityElement.innerHTML = `humidity:${response.data.temperature.humidity}`;
    
let windElement =document.querySelector("#wind");
    windElement.innerHTML = `Wind: ${response.data.wind.speed}`;

let dateElement = document.querySelector("#time");
    dateElement.innerHTML = formatDate(response.data.time);

let iconElement = document.querySelector("#icon");
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app" alt="weather icon" />`;
}
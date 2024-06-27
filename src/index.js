
function searchCity (city) {
let apiKey = "ffoa584b071af31b9db038336tec0bd6";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
axios.get(apiURL).then(updateWeather);
let weatherDetailsElement = document.querySelector("#display-degree-celsius");
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


function updateWeather(response) {
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

    let countryElement = document.querySelector("#country");
    countryElement.innerHTML = response.data.country;

    let temperatureElement = document.querySelector("#display-degree-celsius");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);

    let weatherConditionsElement = document.querySelector("#condition-description"); 
    weatherConditionsElement.innerHTML =`${response.data.condition.description}`;

    let humidityWindElement = document.querySelector("#humidity-wind-description"); 
    humidityWindElement.innerHTML = `humidity:${response.data.temperature.humidity}% | Wind: ${response.data.wind.speed} km/h`;

    let largeIconElement = document.querySelector("#display-icon");
    largeIconElement.innerHTML = response.data.condition.icon; //not working fix this 
    }
console.log(response.data); 

    let weatherDayTimeElement = document.querySelector("#weather-details-element");
    weatherDayTimeElement.innerHTML = `${response.data.date} | ${response.data.time}`; //undefined in console work on a new time day function

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

function formatDate (date){

let hours = date.getHours();
let minutes = date.getMinutes ();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
let day = days[ date.getDay];
if (minutes < 10){
 minutes = `0${minutes}`;    
}
return `${day} ${hours}: ${minutes}`;
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
    humidityElement.innerHTML = `humidity:${response.data.temperature.humidity}%`;
    
    let windElement =document.querySelector("#wind");
    windElement.innerHTML = `| Wind: ${response.data.wind.speed} km/h`;

    let date = new date(response.data.time * 1000); 
    let timeElement = document.querySelector("#time");
    timeElement.innerHTML = formatDate(date); // not working fix 

    //let iconElement = document.querySelector("#icon");ClassName
    //iconElement.innerHTML 
    //let icon = <img src="`${response.data.condition.icon_url}`" class="weather-ap" 
    // } > </img>; //not working
}
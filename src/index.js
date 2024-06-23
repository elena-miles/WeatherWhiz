


function handleSearchSubmit(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-form-input");

    let cityElement = document.querySelector("#city"); 
    cityElement.innerHTML = searchInput.value; 

    searchCity(searchInput.value);
}

function searchCity(city){
// make api call and update interface
let apiKey = "ffoa584b071af31b9db038336tec0bd6";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiURL);

axios.get(apiURL).then(Response => {console.log(Response.data);
document.querySelector('.display-degree-celcius').innerHTML = Response.data.temperature.current; 
});
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);























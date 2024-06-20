function handleSearchSubmit (event){
event.preventDefault(); 
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSubmit);




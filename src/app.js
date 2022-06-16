
function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;

}
let apiKey = "cba4b90df0ca1f578fc4dddc5551b537";
let apiUrl = ´https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${apiKey}&units=metric´;

axios.get(apiUrl).then((response) => {
  console.log(response);
});
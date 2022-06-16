
function displayTemperature(response){
    console.log(resonse.data.main.temp  );
}
let apiKey = "cba4b90df0ca1f578fc4dddc5551b537";
let apiUrl = ´https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${apiKey}&units=metric´;

axios.get(apiUrl).then(displayTemperature);
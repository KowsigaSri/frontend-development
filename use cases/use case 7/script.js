const apiKey = "56dbc3286543a278cc1307c7cccbb95d";


function getWeather() {
  const city = document.getElementById("cityInput").value;


  if (city === "") {
    alert("Please enter a city name");
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent =
        `Temperature: ${data.main.temp} °C`;
      document.getElementById("description").textContent =
        `Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").textContent =
        `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").textContent =
        `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}



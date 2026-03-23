const apiKey = "56dbc3286543a278cc1307c7cccbb95d";

const weatherContainer = document.getElementById("weatherContainer");
const favoritesContainer = document.getElementById("favoritesContainer");

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


/* SEARCH WEATHER */

searchBtn.addEventListener("click", () => {

const city = cityInput.value;

getWeather(city);

});


function getWeather(city){

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)

.then(response => response.json())

.then(data => {

displayWeather(data);

});

}


/* DISPLAY WEATHER */

function displayWeather(data){

weatherContainer.innerHTML = "";

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `

<h3>${data.name}</h3>

<p>🌡 Temperature: ${data.main.temp}°C</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

<p>🌬 Wind: ${data.wind.speed} km/h</p>

<button onclick="saveFavorite('${data.name}')">⭐ Save City</button>

`;

weatherContainer.appendChild(card);

}


/* FAVORITES */

function saveFavorite(city){

favorites.push(city);

localStorage.setItem("favorites", JSON.stringify(favorites));

displayFavorites();

}


function displayFavorites(){

favoritesContainer.innerHTML = "";

favorites.forEach(city => {

const div = document.createElement("div");

div.classList.add("card");

div.innerHTML = `<h3>${city}</h3>`;

favoritesContainer.appendChild(div);

});

}


/* DARK MODE */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});


/* REAL TIME CLOCK */

function updateClock(){

const clock = document.getElementById("clock");

const now = new Date();

clock.innerText = now.toLocaleTimeString();

}

setInterval(updateClock,1000);


/* INIT */

displayFavorites();
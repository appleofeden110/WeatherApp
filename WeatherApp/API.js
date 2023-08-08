const API_Key = "340463b28c4852c79c88d4eaa0f61847";
const API_Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const API_City = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIconContainer = document.getElementById("weather-icon-container");
async function checkWeather(city) {
    const response = await fetch(API_Url + city + '&appid=' + API_Key)
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else {
      var data = await response.json();
    }
    const weatherMain = data.weather[0].main;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " " +  "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " " + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";
    
    function setWeatherIcon(iconName) {
    const iconHTML = `<box-icon name='${iconName}' color='#000000' size="130px" class="weather-icon"></box-icon>`;
    weatherIconContainer.innerHTML = iconHTML;
  }
  if (weatherMain === "Clouds") {
  setWeatherIcon("cloud");
} else if (weatherMain === "Mist") {
  setWeatherIcon("google-cloud"); 
} else if (weatherMain === "Rain") {
  setWeatherIcon("cloud-rain");
} else if (weatherMain === "Snow") {
  setWeatherIcon("cloud-snow"); 
} else if (weatherMain === "Clear") {
  setWeatherIcon("sun"); 
} else if (weatherMain === "Drizzle") {
  setWeatherIcon("cloud-drizzle"); 
}
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener("click", () =>{
      checkWeather(API_City.value);
    })

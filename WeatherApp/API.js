
const API_Key = "340463b28c4852c79c88d4eaa0f61847";
const API_Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const API_City = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(API_Url + city + '&appid=' + API_Key)

    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else {
      var data = await response.json();
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " " +  "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " " + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";
    
    if(data.weather[0].main == "Clouds")
    {
      weather_icon.name = "cloud"
    }
    else if(data.weather[0].main == "Mist"){
      weather_icon.name = "cloud-drizzle"
    }
    else if(data.weather[0].main == "Rain"){
      weather_icon.name = "cloud-rain"
    }
    else if(data.weather[0].main == "Snow"){
      weather_icon.src = "/My wether app/Img/Snow.png"
    }
    else if(data.weather[0].main == "Clear"){
      weather_icon.src = "/My wether app/Img/Clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
      weather_icon.src = "/My wether app/Img/Drizzle.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener("click", () =>{
      checkWeather(API_City.value);
    })

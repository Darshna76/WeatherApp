
const result = document.getElementById("container")
const searchBtn = document.getElementById("search-btn")
const inputVal = document.getElementById("input-val")
const apiKey = "75afb58356795fc69d26d7436291d071";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var now = new Date();
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekday = weekdays[now.getDay()];
var month = months[now.getMonth()];
var date = now.getDate();
var dateString = weekday + ', ' + month + ' ' + date;


searchBtn.addEventListener("click", () => {
  const cityName = inputVal.value;
  console.log(cityName)
  if (cityName === "") {
    alert("Enter a city name")
  } else {
    fetch(url + cityName + `&appid=${apiKey}`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data);



        result.innerHTML = `<h1 class="heading">${data.name}(${data.sys.country})</h1>
        <hr class="hr">
        <div class="loc-date">
            <div><i class=" icon fas fa-map-marker-alt location-icon"></i>${data.name}</div>
            <div>  <i class=" icon fas fa-calendar-alt date-icon"></i>${dateString}</div>
        </div>
        <div class="temp-img">
            <div class="temp">${Math.round(data.main.temp)}ºC</div>
            <img  class="img" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"></span>
        </div>
        
        
        <div class="wether-info">
            <div class="weather">${data.weather[0].main}</div>
            <div>Humidity: ${data.main.humidity}%</div>
            <div>Pressure: ${data.main.pressure}atm</div>
            <div>Wind Speed: ${data.wind.speed}km/h</div>
        </div>`

      })

      .catch(() => {
        alert("City not found")
      })
      inputVal.value ="";
  }
  
})

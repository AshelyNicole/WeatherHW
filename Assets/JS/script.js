var APIKey = "&appid=f56c94699b79bf806441d23eacbfa401";
var weather = {};
var location = "";

// Current Weather 
location=$("#locationInp").val()
console.log("we're searching for location ",location)
var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f56c94699b79bf806441d23eacbfa401`

$.get(weatherURL, function(param){
    console.log("success callback")
    weather.name=param.name
    weather.state=param.weather[0].description
    weather.temp=param.main.temp
    weather.wind=param.wind.speed
    weather.icon=param.weather[0].icon
    console.log("weather",weather)
})

// Weather Display 
$("#weatherName").text(weather.name)
$("#weatherState").text(weather.state)
$("#weatherTemp").text(weather.temp)
$("#weatherWind").text(weather.wind)
$("#weatherIcon").attr("src", `http://openweathermap.org/img/wn/${weather.icon}.png`)
hideExcept([".homeButton",".page2"]);
//Search Query


//Five Day Forecast
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q={city name},{state}&units=imperial&appid=" + APIKey ;

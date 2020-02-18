var APIKey = "&appid=f56c94699b79bf806441d23eacbfa401";
var imgIcon = ["01d.png", "02d.png", "03d.png", "04d.png", "09d.png","10d.png", "11d.png", "13d.png", "50d.png"]
var weatherImg = "https://openweathermap.org/img/wn" + imgIcon;

var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q={city name},{state}&units=imperial&appid=" + APIKey ;

// Current Weather Los Angeles
var losAngelesURL = "https://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&units=imperial" + APIKey;
var laUVIndex = "https://"

$.ajax({
    url: losAngelesURL,
    method: "GET"
}).then(function(response) {
    console.log(losAngelesURL)
    console.log(response)
    $(".cityTitle").html("<strong>" + response.name)
    $(".weatherImg").html(weatherImg)
        console.log(weatherImg)
    $(".cityTemp").html("Temperature:" + " " + response.main.temp)
    $("cityHumidity").html("Humidity:" + " " + response.main.humidity)
        console.log(response.main.humidity)
    $(".cityWind").html("Wind Speed:" + " " + response.wind.speed)

})



//Search Query


//Five Day Forecast

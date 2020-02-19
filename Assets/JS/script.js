var weather = {};
var location = "";

navigator.geolocation.getCurrentPosition (success, error)
if success(function(param){
    var latitude = "lat=" + position.coords.latitude
    var longitude = "lon=" + position.coords.longitude
    var geoURL = "https://api.openweathermap.org/data/2.5/weather?"
    var APIKey = "&appid=f56c94699b79bf806441d23eacbfa401";
    var queryURL = geoURL + latitude + "&" + longitude +APIKey
    $.get(queryUrl, function(param){
        weather = param
        location = param.name
        countryCode = param.sys.countryCode
        $("#searchBtn").show()
    }
})

if error(){
    $("#searchBtn").click(function(){
        location = $("#locationInput").val()
        console.log("Give me a location", location)
        var weatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f56c94699b79bf806441d23eacbfa401`
        $.get(weatherURL, function(param){
            console.log("Success!")
            weather.name = param.name
            weather.temp = param.main.temp
            weather.humidity = param.main.humidity
            weather.wind = param.wind.speed
            weather.img = param.weather[0].icon
            console.log("weather", weather)
        })
    })
    
    
    // Current Weather 
    $("#cityTitle").text(weather.name)
    $("#cityTemp").text(weather.temp)
    $("#cityHumidity").text(weather.humidity)
    $("#citySpeed").text(weather.wind)
    $("#weatherImg").attr("src", `http://openweathermap.org/img/wn/${weather.icon}.png`)
}
    
    





//Five Day Forecast
// var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${APIKey}`

// $("#forecastbtn").click(function(){
//     $.get(forecastURL, function(param){
//         weather.name = param.name
//         weather.temp = param.main.temp
//         weather.humidity = param.main.humidity
//         weather.wind = param.wind.speed
//         weather.img = param.weather[0].icon
//     })
// })

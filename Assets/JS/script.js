$(document).ready(function(){
   var weather = {};
   
   
   //using user's geolocation
   navigator.geolocation.getCurrentPosition(success, error)
   function success(position) {
      callWeatherAPI("", position.coords.latitude,position.coords.longitude)
      isUserLocation = true
   }

   function error() {
      $("#locationInput").show()
      $("#searchBtn").show()
   }
   


   function callWeatherAPI (inputLocation, lat, long) {
      var weatherURL = "https://api.openweathermap.org/data/2.5/weather?"
      var apiKey = "&units=imperial&appid="+ "&appid=4f4c69be324442d2253185e95d65f6bb"
      var queryURL = ""
      var currentLocation = "q=" + inputLocation
      var currentLat = "lat=" + lat
      var currentLong = "lon=" + long
      
      if(inputLocation =="") {
         queryURL = weatherURL + currentLat + "&" + currentLong + apiKey
      } else {
         queryURL = weatherURL + currentLocation + apiKey
      }
      $.ajax({
         url: queryURL,
         method: "GET",
         success: function(response) {
            console.log("Success!")
            weather.name = response.name
            weather.temp = response.main.temp
            weather.humidity = response.main.humidity
            weather.wind = response.wind.speed
            weather.img = response.weather[0].icon
            console.log("weather", weather)
            $("#cityTitle").text(weather.name)
            $("#cityTemp").text(weather.temp)
            $("#cityHumidity").text(weather.humidity)
            $("#citySpeed").text(weather.wind)
            $("#weatherImg").attr("src", `http://openweathermap.org/img/wn/${weather.icon}2x.png`)
            $("#searchBtn").show()
         }
      })  
   }

   function uvIndex(inputLocation, lat, long) {
      var weatherURL = "https://api.openweathermap.org/data/2.5/weather?"
      var apiKey = "&units=imperial&appid="+ "&appid=4f4c69be324442d2253185e95d65f6bb"
      var queryURL = ""
      var currentLocation = "q=" + inputLocation
      var currentLat = "lat=" + lat
      var currentLong = "lon=" + long
      
      if(inputLocation =="") {
         queryURL = weatherURL + currentLat + "&" + currentLong + apiKey
      } else {
         queryURL = weatherURL + currentLocation + apiKey
      }
      $.ajax({
         url: queryURL,
         type: "GET",
         dataType: "json",
         success: function(data) {
            var uvIndex = $("#cityUV")
            var uvBtn =$("<span>").addClass("btn btn-sm").text(data.value)

            if(data.value < 3) {
               uvBtn.addClass("btn-success")
            } else if (data.value <7) {
               uvBtn.addClass("btn-warning")
            } else {
               uvBtn.addClass("btn-danger")
            }
            
            $("#uvlevel-item").append(uvIndex.append(uvBttn))

         }
      })
   }
})




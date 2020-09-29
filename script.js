$(document).ready(function () {

    
    
    
    $("#searchBtn").on("click", function(event) {

    var city_name = $("#citySearchBox").val();
    // var cityTemp = $(".temp").val();
    // var cityHum = $(".humidity").val();
    // var cityWind = $(".windSpeed").val();
    

    console.log(city_name)
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=imperial&appid=37574b1d6986c3e876db8a1d6e2f05dc";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
        console.log("response: " , response);

        

        $(".cityName").append(city_name);
        $(".temp").append("Temperature: ", response.main.temp.toFixed(1) + " ℉");
        $(".humidity").append("Humidity: ", response.main.humidity + "%");
        $(".windSpeed").append("Wind Speed: ", response.wind.speed + " MPH");
        
        
        var newToList = $("<ul>");
        //Inserts the new city to the top of the list
        $(".list-group-item").prepend(newToList, city_name);
        // console.log(newToList); 
    
        // var newCity = response.name
        // newToList.attr("name", newCity);

    });

    })


})
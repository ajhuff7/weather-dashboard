$(document).ready(function () {

    
    var date = moment().format('MM/DD/YYYY');
    
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


        $(".cityName").text(city_name + " (" + date + ") ");
        $(".temp").text("Temperature: ", response.main.temp.toFixed(1) + " ℉");
        $(".humidity").text("Humidity: ", response.main.humidity + "%");
        $(".windSpeed").text("Wind Speed: ", response.wind.speed + " MPH");
        
        // var realTemp = response.main.temp = num.toFixed(1);
        var newToList = $("<ul>");
        //Inserts the new city to the top of the list
        $(".list-group-item").prepend(newToList, city_name);
        // console.log(newToList); 


        if (response.weather[0].main == "Clear" || response.weather[0].main == "Sunny") {
            $("#weatherIcon").removeClass("fas fa-arrow-left").addClass("fas fa-sun");
        }

        else if (response.weather[0].main == "Snow") {
            $("#weatherIcon").removeClass("fas fa-arrow-left").addClass("far fa-snowflake");
        }

        else if (response.weather[0].main == "Windy") {
            $("#weatherIcon").removeClass("fas fa-arrow-left").addClass("fas fa-wind");
        }

        else if (response.weather[0].main == "Rain" || response.weather[0].main == "Stormy") {
            $("#weatherIcon").removeClass("fas fa-arrow-left").addClass("fas fa-umbrella");
        }

        else if (response.weather[0].main == "Clouds" || response.weather[0].main == "Thunder" ) {
            $("#weatherIcon").removeClass("fas fa-arrow-left").addClass("fas fa-cloud");
        }

        else {
            $("#weatherIcon").removeClass("fas fa-arrow-left").addClass("fas fa-meteor");
        }
        
      

        var coordLat = response.coord.lat
        var coordLon = response.coord.lon
        console.log(coordLat)
        console.log(coordLon)
    });

    })


})
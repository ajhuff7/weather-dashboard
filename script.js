$(document).ready(function () {

    
    var date = moment().format('MM/DD/YYYY');
    
    $("#searchBtn").on("click", function(event) {

    var city_name = $("#citySearchBox").val();
    // var cityTemp = $(".temp").val();
    // var cityHum = $(".humidity").val();
    // var cityWind = $(".windSpeed").val();
    
    

    console.log(city_name)
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city_name + "&units=imperial&appid=37574b1d6986c3e876db8a1d6e2f05dc";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
        console.log("response: " , response);


        $(".cityName").append(city_name + " (" + date + ") ");
        $(".temp").append("Temperature: ", response.list[0].main.temp.toFixed(1) + " ℉");
        $(".humidity").append("Humidity: ", response.list[0].main.humidity + "%");
        $(".windSpeed").append("Wind Speed: ", response.list[0].wind.speed + " MPH");
        
        // var realTemp = response.main.temp = num.toFixed(1);
        var newToList = $("<ul>");
        //Inserts the new city to the top of the list

        $(".list-group-item").prepend(newToList, city_name);
        // console.log(newToList); 

        
        var forecast = response.list[0].weather[0].main


        if (forecast == "Clear" || forecast == "Sunny") {
            $("#weatherIcon").removeClass("fas fa-arrow-circle-left").addClass("fas fa-sun");
        }

        else if (forecast == "Snow") {
            $("#weatherIcon").removeClass("fas fa-arrow-circle-left").addClass("far fa-snowflake");
        }

        else if (forecast == "Windy") {
            $("#weatherIcon").removeClass("fas fa-arrow-circle-left").addClass("fas fa-wind");
        }

        else if (forecast == "Rain" || forecast == "Stormy") {
            $("#weatherIcon").removeClass("fas fa-arrow-circle-left").addClass("fas fa-umbrella");
        }

        else if (forecast == "Clouds" || forecast == "Thunder" ) {
            $("#weatherIcon").removeClass("fas fa-arrow-circle-left").addClass("fas fa-cloud");
        }

        else {
            $("#weatherIcon").removeClass("fas fa-arrow-circle-left").addClass("fas fa-meteor");
        }
        
      

        var coordLat = response.city.coord.lat
        var coordLon = response.city.coord.lon
        // console.log(coordLat)
        // console.log(coordLon)

        var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + coordLat + "&lon=" + coordLon + "&appid=37574b1d6986c3e876db8a1d6e2f05dc";
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response2) {
            console.log("response: " , response2);

            $("#uvIndex").append("UV Index: ", response2.value)

            if (response2.value < 2) {
                $("#uvIndex").removeClass("badge badge-transparent").addClass("badge badge-success");
            }
    
            else if (response2.value > 2 && response2.value < 6) {
                $("#uvIndex").removeClass("badge badge-transparent").addClass("badge badge-warning");
            }
    
            else {
                $("#uvIndex").removeClass("badge badge-transparent").addClass("badge badge-danger");
            }

        
        
        
        });

    });

    })


})
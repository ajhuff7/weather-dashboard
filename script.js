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
        var hum = response.list[0].main.humidity;
        var windS = response.list[0].wind.speed;


        $(".cityName").append(city_name + " (" + date + ") ");
        $(".temp").append("Temperature: ", response.list[0].main.temp + " ℉");
        $(".humidity").append("Humidity: ", hum + "%");
        $(".windSpeed").append("Wind Speed: ", windS + " MPH");
        
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

        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordLat + "&lon=" + coordLon + "&units=imperial&appid=37574b1d6986c3e876db8a1d6e2f05dc";
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response2) {
            console.log("response: " , response2);
            
            
            var Array = response2.daily

            var date1 = moment().add(1, 'days').format('MM/DD/YYYY');
            
            
            var badge1 = Array[0].weather[0].main
            var temps1 = Array[0].temp.max
            var hum1 = Array[0].humidity

                                
        $("#uvIndex").append("UV Index: ", response2.current.uvi)

        if (response2.current.uvi < 2) {
            $("#uvIndex").removeClass("badge badge-transparent").addClass("badge badge-success");
        }

        else if (response2.current.uvi > 2 && response2.current.uvi < 6) {
            $("#uvIndex").removeClass("badge badge-transparent").addClass("badge badge-warning");
        }

        else {
            $("#uvIndex").removeClass("badge badge-transparent").addClass("badge badge-danger");
        }
      
  
            // console.log(date1)
            // console.log(badge1)
            // console.log(temps1)
            // console.log(hum1)
            // console.log(Array)




            $(".date1").append(date1)
            $(".temps1").append("Temperature: ", temps1 + " ℉");
            $(".hum1").append("Humidity: ", hum1 + "%");
            $("weatherIcon1").css("background-color", "blue");
            
            
            if (badge1 == "Clear" || badge1 == "Sunny") {
                $("#weatherIcon1").removeClass("fas fa-arrow-circle-left").addClass("fas fa-sun");
            }
        
            else if (badge1 == "Snow") {
                $("#weatherIcon1").removeClass("fas fa-arrow-circle-left").addClass("far fa-snowflake");
            }
        
            else if (badge1 == "Windy") {
                $("#weatherIcon1").removeClass("fas fa-arrow-circle-left").addClass("fas fa-wind");
            }
    
            else if (badge1 == "Rain" || badge1 == "Stormy") {
                $("#weatherIcon1").removeClass("fas fa-arrow-circle-left").addClass("fas fa-umbrella");
            }
        
            else if (badge1 == "Clouds" || badge1 == "Thunder" ) {
                $("#weatherIcon1").removeClass("fas fa-arrow-circle-left").addClass("fas fa-cloud");
            }
    
            else {
                $("#weatherIcon1").removeClass("fas fa-arrow-circle-left").addClass("fas fa-meteor");
            }



            var date2 = moment().add(2, 'days').format('MM/DD/YYYY');
            var badge2 = Array[1].weather[0].main
            var temps2 = Array[1].temp.max
            var hum2 = Array[1].humidity


            $(".date2").append(date2)
            $(".temps2").append("Temperature: ", temps2 + " ℉");
            $(".hum2").append("Humidity: ", hum2 + "%");
            
            
            if (badge2 == "Clear" || badge2 == "Sunny") {
                $("#weatherIcon2").removeClass("fas fa-arrow-circle-left").addClass("fas fa-sun");
            }
        
            else if (badge2 == "Snow") {
                $("#weatherIcon2").removeClass("fas fa-arrow-circle-left").addClass("far fa-snowflake");
            }
        
            else if (badge2 == "Windy") {
                $("#weatherIcon2").removeClass("fas fa-arrow-circle-left").addClass("fas fa-wind");
            }
    
            else if (badge2 == "Rain" || badge2 == "Stormy") {
                $("#weatherIcon2").removeClass("fas fa-arrow-circle-left").addClass("fas fa-umbrella");
            }
        
            else if (badge2 == "Clouds" || badge2 == "Thunder" ) {
                $("#weatherIcon2").removeClass("fas fa-arrow-circle-left").addClass("fas fa-cloud");
            }
    
            else {
                $("#weatherIcon2").removeClass("fas fa-arrow-circle-left").addClass("fas fa-meteor");
            }




            var date3 = moment().add(3, 'days').format('MM/DD/YYYY');
            var badge3 = Array[2].weather[0].main
            var temps3 = Array[2].temp.max
            var hum3 = Array[2].humidity


            $(".date3").append(date3)
            $(".temps3").append("Temperature: ", temps3 + " ℉");
            $(".hum3").append("Humidity: ", hum3 + "%");
            
            
            if (badge3 == "Clear" || badge3 == "Sunny") {
                $("#weatherIcon3").removeClass("fas fa-arrow-circle-left").addClass("fas fa-sun");
            }
        
            else if (badge3 == "Snow") {
                $("#weatherIcon3").removeClass("fas fa-arrow-circle-left").addClass("far fa-snowflake");
            }
        
            else if (badge3 == "Windy") {
                $("#weatherIcon3").removeClass("fas fa-arrow-circle-left").addClass("fas fa-wind");
            }
    
            else if (badge3 == "Rain" || badge3 == "Stormy") {
                $("#weatherIcon3").removeClass("fas fa-arrow-circle-left").addClass("fas fa-umbrella");
            }
        
            else if (badge3 == "Clouds" || badge3 == "Thunder" ) {
                $("#weatherIcon3").removeClass("fas fa-arrow-circle-left").addClass("fas fa-cloud");
            }
    
            else {
                $("#weatherIcon3").removeClass("fas fa-arrow-circle-left").addClass("fas fa-meteor");
            }



            var date4 = moment().add(4, 'days').format('MM/DD/YYYY');
            var badge4 = Array[3].weather[0].main
            var temps4 = Array[3].temp.max
            var hum4 = Array[3].humidity


            $(".date4").append(date4)
            $(".temps4").append("Temperature: ", temps4 + " ℉");
            $(".hum4").append("Humidity: ", hum4 + "%");
            
            
            if (badge4 == "Clear" || badge4 == "Sunny") {
                $("#weatherIcon4").removeClass("fas fa-arrow-circle-left").addClass("fas fa-sun");
            }
        
            else if (badge4 == "Snow") {
                $("#weatherIcon4").removeClass("fas fa-arrow-circle-left").addClass("far fa-snowflake");
            }
        
            else if (badge4 == "Windy") {
                $("#weatherIcon4").removeClass("fas fa-arrow-circle-left").addClass("fas fa-wind");
            }
    
            else if (badge4 == "Rain" || badge4 == "Stormy") {
                $("#weatherIcon4").removeClass("fas fa-arrow-circle-left").addClass("fas fa-umbrella");
            }
        
            else if (badge4 == "Clouds" || badge4 == "Thunder" ) {
                $("#weatherIcon4").removeClass("fas fa-arrow-circle-left").addClass("fas fa-cloud");
            }
    
            else {
                $("#weatherIcon4").removeClass("fas fa-arrow-circle-left").addClass("fas fa-meteor");
            }




            var date5 = moment().add(5, 'days').format('MM/DD/YYYY');
            var badge5 = Array[4].weather[0].main
            var temps5 = Array[4].temp.max
            var hum5 = Array[4].humidity


            $(".date5").append(date5)
            $(".temps5").append("Temperature: ", temps5 + " ℉");
            $(".hum5").append("Humidity: ", hum5 + "%");
            
            
            if (badge5 == "Clear" || badge5 == "Sunny") {
                $("#weatherIcon5").removeClass("fas fa-arrow-circle-left").addClass("fas fa-sun");
            }
        
            else if (badge5 == "Snow") {
                $("#weatherIcon5").removeClass("fas fa-arrow-circle-left").addClass("far fa-snowflake");
            }
        
            else if (badge5 == "Windy") {
                $("#weatherIcon5").removeClass("fas fa-arrow-circle-left").addClass("fas fa-wind");
            }
    
            else if (badge5 == "Rain" || badge5 == "Stormy") {
                $("#weatherIcon5").removeClass("fas fa-arrow-circle-left").addClass("fas fa-umbrella");
            }
        
            else if (badge5 == "Clouds" || badge5 == "Thunder" ) {
                $("#weatherIcon5").removeClass("fas fa-arrow-circle-left").addClass("fas fa-cloud");
            }
    
            else {
                $("#weatherIcon5").removeClass("fas fa-arrow-circle-left").addClass("fas fa-meteor");
            }
        
        
        });

    });

    })


})
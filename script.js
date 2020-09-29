

    $("#searchBtn").on("click", function(event) {

    var city_name = $("#citySearchBox").val();
    
    console.log(city_name)
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=37574b1d6986c3e876db8a1d6e2f05dc";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
        console.log("response: " , response);

        

        
        
        var newToList = $("<ul>");
        //Inserts the new city to the top of the list
        $(".list-group").prepend(newToList, city_name);
        // console.log(newToList); 
    
        // var newCity = response.name
        // newToList.attr("name", newCity);
        
    });
    })
// function getWeather() {

    var city_name = $("#citySearchBox").val();
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=37574b1d6986c3e876db8a1d6e2f05dc";
    $.ajax({
      url: queryURL,
      method: "GET"
    // }).then(function(response) {
    //   $("#").text(JSON.stringify(response));
    // });
//   }
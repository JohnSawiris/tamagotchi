import { apiKey } from './../.env';
export function getWeatherData(userInput, displayData) {
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  let key = "&appid=" + apiKey;

  $.get(url + userInput + key)
    .then(function(results) {
      let weatherCondition;
      results.weather.forEach((element) => {
        if(element.main === 'Rain') {
          weatherCondition = 'Rain';
        } else if(element.main === 'Snow') {
          weatherCondition = 'Snow';
        } else {
          weatherCondition = 'Enjoy it';
        }
      });
      displayData(weatherCondition);
    })
    .fail(function() {
      console.log('something went wrong');
    });
}

import { apiKey } from './../.env';

export function getWeatherData(userInput, displayData) {
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let key = "&appid=" + apiKey;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + key;

    request.onload = function() {
      if(this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open('GET', url, true);
    request.send();
  });//Promise end

  promise.then(function(response) {
    let weatherCondition;
    let results = JSON.parse(response);
    results.weather.forEach(function(element) {
      if(element.main === 'Clouds') {
        weatherCondition = 'Clouds';
      } else if(element.main === 'Snow') {
        weatherCondition = 'Snow';
      } else {
        weatherCondition = 'Enjoy it';
      }

    });//forEach
    displayData(weatherCondition);
  }, function(error) {
    console.log(`Something went wrong ${error.message}`);
  });//then

}//weather end




// export function getWeatherData(userInput, displayData) {
//   let url = 'https://api.openweathermap.org/data/2.5/weather?q=';
//   let key = "&appid=" + apiKey;
//
//   $.get(url + userInput + key)
//     .then(function(results) {
//       let weatherCondition;
//       results.weather.forEach((element) => {
//         if(element.main === 'Rain') {
//           weatherCondition = 'Rain';
//         } else if(element.main === 'Snow') {
//           weatherCondition = 'Snow';
//         } else {
//           weatherCondition = 'Enjoy it';
//         }
//       });
//       displayData(weatherCondition);
//     })
//     .fail(function() {
//       console.log('something went wrong');
//     });
// }

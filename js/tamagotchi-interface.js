import { Tamagotchi } from './../js/tamagotchi.js';
import { getWeatherData } from './../js/weather.js';

$(document).ready(function(){
  let choo = new Tamagotchi("Choo");

  choo.setNeedLevel();

  setInterval(function() {
    $('#food-level').text(choo.foodLevel);
    $('#mood-level').text(choo.moodLevel);
    $('#rest-level').text(choo.restLevel);
  }, 1000);

  $('#feed').click(function() {
    const eatDinner = choo.feed(10);
    console.log(eatDinner("mushrooms"));
  });//feed end

  $('#play').click(function() {
    const play = choo.play(10);
    play();
  });//play end
  $('#sleep').click(function() {
    const sleep = choo.nap(10);
    sleep();
  });//sleep end

  $('#weather-form').submit(function(event) {
    event.preventDefault();

    let userInput = $("#location").val();
    console.log(`userInput = ${userInput}`);
    getWeatherData(userInput, displayData);
  });

});//ready end

function displayData(condition) {
  $('#weather').text(condition);
}

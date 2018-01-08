import {Tamagotchi} from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let choo = new Tamagotchi("Choo");

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  //TESTS **************************

  it('should have a name and have foodLevel, moodLevel, and restLevel set to 10'
    + 'when it is created', function(){

    expect(choo.name).toEqual("Choo");
    expect(choo.foodLevel).toEqual(10);
    expect(choo.moodLevel).toEqual(10);
    expect(choo.restLevel).toEqual(10);
    })
};

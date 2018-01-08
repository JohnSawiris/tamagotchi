import {Tamagotchi} from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let choo;

  beforeEach(function() {
    choo = new Tamagotchi("Choo");
    jasmine.clock().install();
    choo.setNeedLevel();
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
  });

  it('should have a foodLevel, moodLevel, and restLevel of 7 after 3001 ms', function(){
    jasmine.clock().tick(3001);
    expect(choo.foodLevel).toEqual(7);
    expect(choo.moodLevel).toEqual(7);
    expect(choo.restLevel).toEqual(7);
  });

  it('should', function(){

  });

  it('should', function(){

  });

  it('should', function(){

  });

  it('should', function(){

  });


});

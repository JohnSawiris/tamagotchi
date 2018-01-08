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

  it('should die if foodLevel drops to or below zero', function(){
    choo.foodLevel = 0;
    expect(choo.isDead()).toEqual(true);
    choo.foodLevel = -1;
    expect(choo.isDead()).toEqual(true);
  });

  it('should be bored if moodLevel drops below zero', function(){
    choo.moodLevel = 0;
    expect(choo.isBored()).toEqual(true);
    choo.moodLevel = -1;
    expect(choo.isBored()).toEqual(true);
  });

  it('should be exhausted if restLevel drops below zero', function(){
    choo.restLevel = 0;
    expect(choo.isExhausted()).toEqual(true);
    choo.restLevel = -1;
    expect(choo.isExhausted()).toEqual(true);
  });

  it('should have a foodLevel of 10 if it is fed', function(){
    jasmine.clock().tick(9001);
    expect(choo.foodLevel).toEqual(1);
    choo.feed();
    expect(choo.foodLevel).toEqual(10);
  });

  it('should have a moodLevel of 10 if you play with it', function(){
    jasmine.clock().tick(9001);
    expect(choo.moodLevel).toEqual(1);
    choo.play();
    expect(choo.moodLevel).toEqual(10);
  });

  it('should have a restLevel of 10 if it takes a nap', function(){
    jasmine.clock().tick(9001);
    expect(choo.restLevel).toEqual(1);
    choo.nap();
    expect(choo.restLevel).toEqual(10);
  });

  it('should be able to be fed if it is already dead', function(){
    jasmine.clock().tick(10001);
    //make sure tamagotchi is dead after 10 seconds without feeding
    expect(choo.isDead()).toEqual(true);
    //make sure the feed() method fails and returns false
    expect(choo.feed()).toEqual(false);
    //make sure the dead tamagotchi has not been fed
    expect(choo.foodLevel).toEqual(0);

  });

});

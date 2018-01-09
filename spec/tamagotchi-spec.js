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

  it('should have a moodLevel of 0 after 20 seconds', function(){
    jasmine.clock().tick(20001);
    expect(choo.moodLevel).toEqual(0);
  });

  it('should have a restLevel of 0 after 50 seconds', function(){
    jasmine.clock().tick(50001);
    expect(choo.restLevel).toEqual(0);
  });

  it('should have a foodLevel of 0 after 48001 ms', function(){
    jasmine.clock().tick(48001);
    expect(choo.foodLevel).toEqual(0);
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

  it('should increase the foodLevel by the amount it is fed ', function(){
    jasmine.clock().tick(8001);
    expect(choo.foodLevel).toEqual(9);
    choo.eatSmall = choo.feed(5);
    choo.eatSmall("blueberries");
    expect(choo.foodLevel).toEqual(14);
  });

  it('should increase the moodLevel by the amount it is played', function(){
    jasmine.clock().tick(18001);
    expect(choo.moodLevel).toEqual(1);
    choo.litteGame = choo.play(4);
    choo.litteGame('xBox');
    expect(choo.moodLevel).toEqual(5);
  });

  it('should increase the restLevel by the amount it sleeps', function(){
    jasmine.clock().tick(45001);
    expect(choo.restLevel).toEqual(1);
    choo.longNap = choo.nap(9);
    choo.longNap('short nap');//it gives choo a long nap
    expect(choo.restLevel).toEqual(10);
  });

  it('should not be able to be fed if it is already dead', function(){
    jasmine.clock().tick(48001);
    //make sure tamagotchi is dead after 10 seconds without feeding
    expect(choo.isDead()).toEqual(true);
    //make sure the feed() method fails and returns false
    choo.feedSmall = choo.feed(5);
    expect(choo.feedSmall("human flesh")).toEqual(false);
    //make sure the dead tamagotchi has not been fed
    expect(choo.foodLevel).toEqual(0);

  });

  it('should not be able to play if it is already dead', function(){
    jasmine.clock().tick(48001);
    //make sure tamagotchi is dead after 10 seconds without feeding
    expect(choo.isDead()).toEqual(true);
    //make sure the feed() method fails and returns false
    choo.bigGame = choo.play(9);
    expect(choo.bigGame('xBox')).toEqual(false);
    //make sure the dead tamagotchi has not been fed
    expect(choo.moodLevel).toEqual(0);

  });

  it('should not be able to nap if it is already dead', function(){
    jasmine.clock().tick(50001);
    //make sure tamagotchi is dead after 10 seconds without feeding
    expect(choo.isDead()).toEqual(true);
    //make sure the feed() method fails and returns false
    choo.shortNap = choo.nap(5);
    expect(choo.shortNap()).toEqual(false);
    //make sure the dead tamagotchi has not been fed
    expect(choo.restLevel).toEqual(0);

  });

  it('should lose 3 hunger per tick if isBored and isExhausted', function() {
    choo.moodLevel = 0;
    choo.restLevel = 0;
    expect(choo.foodLevel).toEqual(10);
    jasmine.clock().tick(8001);
    expect(choo.foodLevel).toEqual(7);
  });

});

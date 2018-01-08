export class Tamagotchi{
  constructor(name){
    this.name = name;
    //feed to increase foodLevel
    this.foodLevel = 10;
    //play with pet to increase moodLevel
    this.moodLevel = 10;
    //make pet sleep to increase restLevel
    this.restLevel = 10;
  }

  //set each level to decrease at a rate of 1 pt per second
  setNeedLevel(){
    setInterval(() => {
      this.foodLevel--;
      this.moodLevel--;
      this.restLevel--;
    }, 1000);
  }

}

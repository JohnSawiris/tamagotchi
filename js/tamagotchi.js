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

  check(arg) {

    return () => {
      if(arg <= 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  isDead() {
    const deadCheck = this.check(this.foodLevel);
    return deadCheck();
  }

  isBored() {
    const boredCheck = this.check(this.moodLevel);
    return boredCheck();
  }

  isExhausted() {
    const tiredCheck = this.check(this.restLevel);
    return tiredCheck();
  }

  feed(){
    if (!this.isDead()){
      this.foodLevel = 10;
    } else {
      return false;
    }
  }

  play(){
    this.moodLevel = 10;
  }

  nap(){
    this.restLevel = 10;
  }

}

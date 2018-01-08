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

  feed(amt){
    return (food) => {
      if (!this.isDead()){
        this.foodLevel += amt;
        return `${this.name} ate the ${food}! Food level goes up by ${amt}!`
      } else {
        return false;
      }
    }
  }

  play(amt){
    return (nameOfTheGame) => {
      if(!this.isDead()) {
        this.moodLevel += amt;
        return `${this.name} played ${nameOfTheGame}! Mood level goes up by ${amt}!`;
      } else {
          return false;
      }
    }
  }

  nap(amt){
    return (nap) => {
      if(!this.isDead()) {
        this.restLevel += amt;
        return `${this.name} took a ${nap}! Rest level goes up by ${amt}!`;
      } else {
        return false;
      }
    }
  }

}

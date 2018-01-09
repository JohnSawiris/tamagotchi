export class Tamagotchi{
  constructor(name){
    this.name = name;
    //feed to increase foodLevel
    this.foodLevel = 10;
    //play with pet to increase moodLevel
    this.moodLevel = 10;
    //make pet sleep to increase restLevel
    this.restLevel = 10;
    this.hungerMod = 0;
  }

  //set each level to decrease at a rate of 1 pt per second
  setNeedLevel(){

    setInterval(() => {
      if(this.moodLevel > 0) {
        this.moodLevel--;
      }
    }, 2000);
    setInterval(() => {
      if(this.restLevel > 0) {
        this.restLevel--;
      }
    }, 5000);
    setInterval(() => {
      if(this.isBored() && this.isExhausted()) {
        this.hungerMod = 2;
      } else if (this.isBored() || this.isExhausted()) {
        this.hungerMod = 1;
      } else {
        this.hungerMod = 0;
      }

      if(this.foodLevel > 0) {
        if (this.foodLevel < this.hungerMod+1){
          this.foodLevel = 0;
        } else {
          this.foodLevel -= 1 + this.hungerMod;
        }
      }

    }, 8000);
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
        console.log("choo was fed");
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

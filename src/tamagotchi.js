// Business Logic
// export function 
export class Tamagotchi {

    constructor(name) {
      this.name = name;
      this.hunger = 10;
      this.health = 10;
      this.happiness = 10;
    }
    setHappiness() {
      setInterval(() => {
        this.happiness--;
      }, 1000);
    }
    
    setHealth() {
      setInterval(() => {
        this.health--;
      }, 1000)
    }
    setHunger() {
      setInterval(() => {
        this.hunger--;
      }, 1000);
    }

  crying() {
    if (this.hunger < 3 || this.health < 3 || this.happiness < 3) {
      return true;
    } 
  }
  feed() {
    this.hunger = 10;
    this.health += 2;
    this.happiness += 1;
  }
  death() {
  if (this.hunger === 0 || this.health < 0 || this.happiness < 0) {
  return true;
  }
  }
}
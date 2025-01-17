class Animal {
  name;
  species;
  energy;
  damage = 10;
  healthGain = 10;
  move;

  static remainingAnimals = 3;

  constructor(name, species, energy) {
    this.name = name;
    this.species = species;
    this.energy = energy;
  }

  getName() {
    return this.name;
  }

  setName(value) {
    this.name = value;
  }

  getSpecies() {
    return this.species;
  }

  setSpecies(value) {
    this.species = value;
  }

  getEnergy() {
    return this.energy;
  }

  setEnergy(value) {
    this.energy = value;
  }

  attack(target) {
    if (Animal.remainingAnimals === 0) {
      console.log(`There are no animals left to fight.`);
      return;
    }

    this.beforeAttack(target);

    if (this.energy <= target.damage) {
      Animal.remainingAnimals -= 1;
      console.log(`${target.getName()} won! ${this.getName()} lost!`);
      return;
    } else if (target.energy <= this.damage) {
      Animal.remainingAnimals -= 1;
      console.log(`${this.getName()} won! ${target.getName()} lost!`);
      return;
    }
    this.setEnergy(this.energy - this.damage);
    target.setEnergy(target.energy - this.damage);

    console.log(`${this.getName()} is ${this.getEnergy()}`);
    console.log(`${target.getName()} is ${target.getEnergy()}`);
  }

  beforeAttack(target) {
    console.log(
      `${this.getName()} ${this.move} to attack ${target.getName()}!`
    );
  }

  eat() {
    this.energy += this.healthGain;
    console.log(`${this.getName()} eats and gains energy!`);
  }
}

class Bird extends Animal {
  canFly;

  constructor(name, species, canFly) {
    super(name, species);
    this.damage = 20;
    this.canFly = canFly;
    this.energy = 100;
    this.move = "swoops in";
  }
}

class Mammal extends Animal {
  furColor;

  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor;
    this.damage = 50;
    this.energy = 200;
    this.move = "lunges";
  }
}

class Reptile extends Animal {
  coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species);
    this.coldBlooded = coldBlooded;
    this.damage = 30;
    this.energy = 100;
    this.move = "strikes";
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

```js

let animalMethods = {
    eat(){
    `I live in ${this.location} and I can eat`
    },
    changeLocation(newLocation){
    return this.location = newLocation;
    },
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

let dogMethods = {
    bark(){
        alert (`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        return this.name = newName;
    }
    changeColor(newColor){
        return this.color = newColor;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

let catMethods = {
    meow(){
        alert (`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName){
        this.name = newName;
    }
    changeColorOfEyes(newColor){
        this.color = newColor;
    }
    summary(){
        return `I am ${thisname} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

function createAnimal(location, noOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = this.location;
    animal.noOfLegs = this.noOfLegs;
    return animal;
}

function createDog(name, color){
    let dog = Object.create(animalMethods);
    dog.name = this.name;
   dog.color = this.color;
   dog._proto_ = dogMethods;
    return dog;
}
function createCat(name, colorOfEyes){
    let cat = Object.create(animalMethods);
    cat.name = this.name;
  cat.colorOfEyes = this.colorOfEyes;
  cat._proto_ = catMethods;
    return cat;
}


```

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

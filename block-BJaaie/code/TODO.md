# Inheritance

Convert the below requirements into inheritance using:

- Pseudoclassical Pattern
- Class Pattern

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

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

```js

// Pseudoclassical Pattern

function createAnimal(location, noOfLegs){
    this.location = location;
    this.noOfLegs = noOfLegs;
}

createAnimal.prototype = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary(){
        console.log (`I live in ${this.location} and I have ${this.numberOfLegs}`);
    }
}

function CreateDog(location, noOfLegs, name, color){
    CreateDog.apply(this, [location, noOfLegs]);
    this.name = name;
    this.noOfLegs = noOfLegs;
}

CreateDog.prototype.bark = function(){
    alert (`I am ${this.name} and I can bark 🐶`)
}
CreateDog.prototype.changeName = function(newName){
    this.name = newName;
    return this.name
}
CreateDog.prototype.changeColor = function(newColor){
    this.color = newColor;
    return this.color;
}
CreateDog.prototype.summary = function(){
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

function CreateCat(location, noOfLegs, name, colorOfEyes){
    CreateCat.apply(this, [location, noOfLegs]);
    this.name = name;
    this.noOfLegs = colorOfEyes;
}

CreateCat.prototype.meow = function(){
    alert (`I am ${this.name} and I can do mewo meow 😹`)
}
CreateCat.prototype.changeName = function(newName){
    this.name = newName;
    return this.name
}
CreateCat.prototype.changeColorOfEyes = function(newColor){
    this.color = newColor;
    return this.color;
}
CreateCat.prototype.summary = function(){
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
}

Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

// Class Pattern

class Animal {
    constructor(location, noOfLegs){
        this.location = location;
        this.noOfLegs = noOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    }
    summary(){
        console.log (`I live in ${this.location} and I have ${this.numberOfLegs}`);
    }
}

class Dog extends Animal {
    constructor(location, noOfLegs, name, color){
        super(location, noOflegs);
        this.name = name;
        this.color = color;
    }
    bark(){
        alert (`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        this.name = newName;
        return this.name
    }
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

class Cat extends Animal {
    constructor(location, noOfLegs, name, colorOfEyes){
        super(location, noOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert (`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        return `I am ${thisname} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

let animal1 = new Animal("India", 5);
let cat1 = new Cat("India", 5, "jane", "blue");
```
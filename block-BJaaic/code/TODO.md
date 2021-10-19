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

let dogMethods = {
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

let catMethods = {
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

function createAnimal(location, noOfLegs){
    let obj = Object.create(animalMethods);
   obj.location = location;
    obj.noOfLegs = noOfLegs;
    return obj;
}

function createDog(location, noOfLegs, name, color){
    let obj = createAnimal(location, noOfLegs)
    Object.setPrototypeOf(obj, dogMethods);
    obj.name = name;
    obj.color = color;
    return obj;
}
function createCat(location, noOfLegs, name, colorOfEyes){
    let obj = createAnimal(location, noOfLegs);
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    return obj;
}

Object.setPrototypeOf(dogMethods, animalMethods)
Object.setPrototypeOf(catMethods, animalMethods)


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

## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name} can eat!`)
    }
    sleep(){
        console.log(`${this.name} can sleep!`)
        }
    walk(){
        console.log(`${this.name} can walk!`)
    }
}

class Player extends Person {
    constructor(name, age, gender, sportsName){
        super(name, age, gender)
        this.sportsName = sportsName;
    }
    play(){
        console.log(`${this.name} can play!`)
    }
}

class Teacher extends Person {
    constructor(name, age,gender, instituteName){
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach(){
        console.log(`${this.name} can teach!`)
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind){
        super(name, age, gender);
        this.kind = kind;
    }
    createArt(){
        console.log(`${this.name} can create Art of ${this.kind}!`)
    }
}

class Cricketer extends Player {
    constructor(name, age, gender, sportsName, teamName){
        super(name, age, gender, sportsName)
        this.teamName = teamName;
    }
    playCricket(){
        `${this.name} can play cricket!`
    }
}

let hayley = new Cricketer("Hayley", 38, "female", "cricket", "South Africa");
hayley; // "Hayley", 38, "female", "cricket", "South Africa"
```

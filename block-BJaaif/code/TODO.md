## Working with Object Literals

#### Challenge 1/1

Create a function that accepts two inputs (name and age) and returns an object. Let's call this function `makePerson`. This function will:

1. create an empty object
2. add a `name` property to the newly created object with its value being the 'name' argument passed into the function
3. add an `age` property to the newly created object with its value being the 'age' argument passed into the function
4. return the object

```js
function makePerson(name, age)
    let obj = {};
    this.name = name;
    this.age = age;
    return obj;
}
```

## Using Object.create

#### Challenge 1/3

Inside `personStore` object, create a property `greet` where the value is a function that logs "hello".

```js

let personStore = {
    greet: function(){
        console.log("hello");
    }
}
```

#### Challenge 2/3

Create a function `personFromPersonStore` that takes as input a `name` and an `age`. When called, the function will create person objects using the `Object.create` method on the `personStore` object. And return the object with age and name.

```js
function personFromPersonStore(name, age){
    let person = Object.create(personStore);
    return person;
}
```

#### Challenge 3/3

Without editing the code you've already written, add an `introduce` method to the `personStore` object that logs "Hi, my name is [name]".

```js
let personStore = {
    greet: function(){
        console.log("hello");
    }
    introduce: function(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
```


## Using the NEW keyword

#### Challenge 1/3

Create a function `PersonConstructor` that uses the `this` keyword to save a single property onto its scope called `greet`. `greet` should be a function that logs the string 'hello'.

```js
function PersonConstructor(){
    this.greet = function(){
        console.log("hello");
    };
}
```

#### Challenge 2/3

Create a function `personFromConstructor` that takes as input a `name` and an `age`. When called, the function will create person objects using the `new` keyword instead of the Object.create method.

```js
function PersonfromConstructor(name, age){
    this.greet = function(){
        console.log("hello");
    };
}
```

#### Challenge 3/3

Without editing the code you've already written, add an `introduce` method to the `PersonConstructor` function that logs "Hi, my name is [name]".

```js
function PersonConstructor(){
    this.greet = function(){
        console.log("hello");
    };
    this.introduce = function(){
        console.log(`Hi, my name is ${this.name}`);
    };
}
```

## Using ES6 Classes

#### Challenge 1/2

Create a class `PersonClass`. `PersonClass` should have a constructor that is passed an input of `name` and saves it to a property by the same name. `PersonClass` should also have a method called `greet` that logs the string 'hello'.

```js
class PersonClass {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello`);
    }
}
```

#### Challenge 2/2

Create a class `DeveloperClass` that creates objects by extending the `PersonClass` class. In addition to having a `name` property and `greet` method, `DeveloperClass` should have an `introduce` method. When called, `introduce` should log the string 'Hello World, my name is [name]'.

```js
class DeveloperClass extends PersonClass {
    constructor(name, introduce){
        super(name);
    }
    introduce(){
        console.log(`Hello World, my name is ${this.name}`);
    }
}
```

## Subclassing

#### Challenge 1/5

Create an object `adminFunctionStore` that has access to all methods in the `userFunctionStore` object, without copying them over individually.

```js
class AdminFunctionStore extends userFunctionStore{
    constructor(){
        super()
    }
}
```

#### Challenge 2/5

Create an `adminFactory` function that creates an object with all the same data fields (and default values) as objects of the `userFactory` class, but without copying each data field individually.



#### Challenge 3/5

Then make sure the value of the 'type' field for `adminFactory` objects is 'Admin' instead of 'User'.

#### Challenge 4/5

Make sure that `adminFactory` objects have access to `adminFunctionStore` methods, without copying them over.

#### Challenge 5/5

Create a method called `sharePublicMessage` that logs 'Welcome users!' and will be available to `adminFactory` objects, but not `userFactory` objects. Do not add this method directly in the `adminFactory` function.
```

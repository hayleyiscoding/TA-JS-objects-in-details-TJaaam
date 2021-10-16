# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js
// Using Function to create object

function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function getProjects() {
    return noOfProjects;
  };
  user.changeName = function changeName(newName) {
    user.name = name;
    return user.name;
  };
  user.incrementProject = function incrementProject(value) {
    user.noOfProjects = user.noOfProjects + 1;
    return user.noOfProjects;
  };
  user.decrementProject = function decrementProject(value) {
    user.noOfProjects = user.noOfProjects - 1;
    return user.noOfProjects;
  };
  return user;
}

let question1 = createUser("Hayley", 8007, 12);

// Using Object.create (prototypal pattern)

function createUser(name, id, noOfProjects) {
  let user = Object.create(createUser.prototype);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}

createUser.prototype = {
  getProjects() {
    return noOfProjects;
  },
  changeName(newName) {
    user.name = name;
    return user.name;
  },
  incrementProject(value) {
    user.noOfProjects = user.noOfProjects + 1;
    return user.noOfProjects;
  },
  decrementProject(value) {
    user.noOfProjects = user.noOfProjects - 1;
    return user.noOfProjects;
  },
};

let question1 = createUser("Hayley", 8007, 12);

// Using Pseudoclassical Way

function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
  getProjects() {
    return noOfProjects;
  },
  changeName(newName) {
    user.name = name;
    return user.name;
  },
  incrementProject(value) {
    user.noOfProjects = user.noOfProjects + 1;
    return user.noOfProjects;
  },
  decrementProject(value) {
    user.noOfProjects = user.noOfProjects - 1;
    return user.noOfProjects;
  },
};

let question1 = new CreateUser("Hayley", 8007, 12);

// Using class

class User {
  constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return noOfProjects;
  }
  changeName(newName) {
    this.name = name;
    return this.name;
  }
  incrementProject(value) {
    this.noOfProjects = this.noOfProjects + 1;
    return this.noOfProjects;
  }
  decrementProject(value) {
    this.noOfProjects = this.noOfProjects - 1;
    return this.noOfProjects;
  }
}

let question1 = new User("Hayley", 8007, 12);
```

function consPerson (name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
}


consPerson.exercise = function () {
            console.log('Running is fun! - said no one ever.');
        }


        consPerson.fetchJob = function () {
            console.log(`${this.name} is a ${this.job}`);
        }


function Programmer(name, job, age, languages) {
  Person.call(name, job, age); // Inherit properties from Person
  this.languages = languages || []; // Languages passed in
  this.busy = true; // Default value for busy is true
}


function Programmer(name, job, age, languages) {
  Person.call(name, job, age); // Inherit properties from Person
  this.languages = languages || []; // Languages passed in
  this.busy = true; // Default value for busy is true
}


// Set Programmer's prototype to inherit from Person's prototype
Programmer.prototype = Object.create(consPerson.prototype);
Programmer.prototype.constructor = Programmer;


// Programmer's methods
Programmer.prototype.completeTask = function() {
  this.busy = false; // Task completed, not busy anymore
};


Programmer.prototype.acceptNewTask = function() {
  this.busy = true; // Accept new task, mark busy
};


Programmer.prototype.offerNewTask = function() {
  if (this.busy) {
    console.log(`${this.name} can't accept any new tasks right now.`);
  } else {
    console.log(`${this.name} would love to take on a new responsibility.`);
  }
};


Programmer.prototype.learnLanguage = function(language) {
  this.languages.push(language);
};


Programmer.prototype.listLanguages = function() {
  return this.languages.join(", ");
};


const techProgrammer1 = new consPerson('Brad', 'Backend Engineer', 20);
const c1 = new Programmer('Liana', 'DevOps', 35, ['HTML', 'C#', 'LUA']);
const c2 = new Programmer('Edwin', 'Janitor', 55, ['HTML', 'SASS', 'Ruby']);
const c3 = new Programmer('Manny', 'SysOps', 31, ['HTML', 'CSS', 'JS', 'R']);


// Test methods
person1.exercise(); // Running is fun! - said no one ever.
person1.fetchJob(); // Brad is a Backend Engineer


// Programmer actions
c1.offerNewTask(); // Liana can't accept any new tasks right now.
c1.completeTask(); // Completing task, not busy anymore
c1.offerNewTask(); // Liana would love to take on a new responsibility.
